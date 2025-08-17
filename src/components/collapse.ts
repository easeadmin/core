import Schema from './schema.js'

/**
 * Collapse
 * @docs https://baidu.github.io/amis/zh-CN/components/collapse
 */
export default class Collapse extends Schema<Collapse> {
  protected json: Record<string, any> = { type: 'collapse' }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  collapsed(collapsed: boolean) {
    this.json['collapsed'] = collapsed
    return this
  }

  key(key: string) {
    this.json['key'] = key
    return this
  }

  header(header: object | string) {
    this.json['header'] = header
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  showArrow(showArrow: boolean) {
    this.json['showArrow'] = showArrow
    return this
  }
}
