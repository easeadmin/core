import Schema from './schema.js'

/**
 * BarCode
 * @docs https://baidu.github.io/amis/zh-CN/components/bar-code
 */
export default class BarCode extends Schema<BarCode> {
  protected json: Record<string, any> = { type: 'bar-code' }

  value(value: string) {
    this.json['value'] = value
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }
}
