import Schema from './schema.js'

/**
 * Json
 * @docs https://baidu.github.io/amis/zh-CN/components/json
 */
export default class Json extends Schema<Json> {
  protected json: Record<string, any> = { type: 'json' }

  value(value: object | string) {
    this.json['value'] = value
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  levelExpand(levelExpand: number) {
    this.json['levelExpand'] = levelExpand
    return this
  }

  jsonTheme(jsonTheme: string) {
    this.json['jsonTheme'] = jsonTheme
    return this
  }

  mutable(mutable: boolean) {
    this.json['mutable'] = mutable
    return this
  }

  displayDataTypes(displayDataTypes: boolean) {
    this.json['displayDataTypes'] = displayDataTypes
    return this
  }

  ellipsisThreshold(ellipsisThreshold: number) {
    this.json['ellipsisThreshold'] = ellipsisThreshold
    return this
  }
}
