import Schema from './schema.js'
import Action from './action.js'

/**
 * Panel
 * @docs https://baidu.github.io/amis/zh-CN/components/panel
 */
export default class Panel extends Schema<Panel> {
  protected json: Record<string, any> = { type: 'panel' }

  headerClassName(name: string) {
    this.json['headerClassName'] = name
    return this
  }

  footerClassName(name: string) {
    this.json['footerClassName'] = name
    return this
  }

  actionsClassName(name: string) {
    this.json['actionsClassName'] = name
    return this
  }

  bodyClassName(name: string) {
    this.json['bodyClassName'] = name
    return this
  }

  title(title: object) {
    this.json['title'] = title
    return this
  }

  header(header: object) {
    this.json['header'] = header
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  footer(footer: object) {
    this.json['footer'] = footer
    return this
  }

  affixFooter(affixFooter: boolean) {
    this.json['affixFooter'] = affixFooter
    return this
  }

  actions(actions: Action[]) {
    this.json['actions'] = actions
    return this
  }
}
