import Schema from './schema.js'

/**
 * Date
 * @docs https://baidu.github.io/amis/zh-CN/components/date
 */
export default class Date extends Schema<Date> {
  protected json: Record<string, any> = { type: 'date' }

  value(value: string) {
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

  displayFormat(displayFormat: string) {
    this.json['displayFormat'] = displayFormat
    return this
  }

  valueFormat(valueFormat: string) {
    this.json['valueFormat'] = valueFormat
    return this
  }

  fromNow(fromNow: boolean) {
    this.json['fromNow'] = fromNow
    return this
  }

  updateFrequency(updateFrequency: number) {
    this.json['updateFrequency'] = updateFrequency
    return this
  }

  displayTimeZone(displayTimeZone: string) {
    this.json['displayTimeZone'] = displayTimeZone
    return this
  }
}
