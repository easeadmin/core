import Schema from './schema.js'

/**
 * Tpl
 * @docs https://baidu.github.io/amis/zh-CN/components/tpl
 */
export default class Tpl extends Schema<Tpl> {
  protected json: Record<string, any> = { type: 'tpl' }

  tpl(tpl: string) {
    this.json['tpl'] = tpl
    return this
  }

  showNativeTitle(showNativeTitle: boolean) {
    this.json['showNativeTitle'] = showNativeTitle
    return this
  }
}
