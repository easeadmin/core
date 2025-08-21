import amis from 'easeadmin/builder/amis'
import Controller from 'easeadmin/controllers/controller'
import BuilderRepository from '../repositories/builder_repository.js'

export default class BuilderController extends Controller {
  protected repository = new BuilderRepository()

  protected builder() {
    let json: Record<string, any> = this.ctx.admin.api('store')
    let code: Record<string, any> = this.ctx.admin.api('store')
    json['data'] = 'json=${json}'
    code['data'] = 'code=${code}'
    return amis('page')
      .data({
        json: '{"type":"page","body":{"type":"tpl","tpl":"json to amis"}}',
        code: 'amis("page").body(amis("tpl").tpl("json to amis"))',
      })
      .body(
        amis('hbox')
          .gap('md')
          .columns([
            amis('textarea')
              .id('json')
              .name('json')
              .label('JSON')
              .minRows(32)
              .maxRows(40)
              .placeholder('amis json')
              .onEvent('change', [
                amis('event').actionType('ajax').action('api', json),
                amis('event')
                  .actionType('setValue')
                  .action('componentId', 'code')
                  .attr('args', { value: '${event.data.responseResult.responseData.code}' }),
              ]),
            amis('textarea')
              .id('code')
              .name('code')
              .label('CODE')
              .minRows(32)
              .maxRows(40)
              .placeholder('amis code')
              .onEvent('change', [
                amis('event').actionType('ajax').action('api', code),
                amis('event')
                  .actionType('setValue')
                  .action('componentId', 'json')
                  .attr('args', { value: '${event.data.responseResult.responseData.json}' }),
              ]),
          ])
      )
  }

  async store(): Promise<any> {
    const data = this.ctx.request.only(['json', 'code'])
    if (data.json) {
      let code = this.repository.code(data)
      return this.ok({ code: code })
    } else if (data.code) {
      let json = this.repository.json(data)
      return this.ok({ json: json })
    }
    return this.ok({ json: '', code: '' })
  }
}
