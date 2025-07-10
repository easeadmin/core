import Schema from './schema.js'

/**
 * Number
 * @docs https://baidu.github.io/amis/zh-CN/components/number
 */
export default class Number extends Schema<Number> {
  protected json: Record<string, any> = { type: 'number' }

  value(value: string | number) {
    this.json['value'] = value
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  kilobitSeparator(kilobitSeparator: boolean) {
    this.json['kilobitSeparator'] = kilobitSeparator
    return this
  }

  precision(precision: number) {
    this.json['precision'] = precision
    return this
  }

  percent(percent: boolean | number) {
    this.json['percent'] = percent
    return this
  }

  prefix(prefix: string) {
    this.json['prefix'] = prefix
    return this
  }

  affix(affix: string) {
    this.json['affix'] = affix
    return this
  }
}
