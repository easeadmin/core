import Schema from './schema.js'

/**
 * Mapping
 * @docs https://baidu.github.io/amis/zh-CN/components/mapping
 */
export default class Mapping extends Schema<Mapping> {
  protected json: Record<string, any> = { type: 'mapping' }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  map(map: object) {
    this.json['map'] = map
    return this
  }

  source(source: string | object) {
    this.json['source'] = source
    return this
  }

  valueField(valueField: string) {
    this.json['valueField'] = valueField
    return this
  }

  labelField(labelField: string) {
    this.json['labelField'] = labelField
    return this
  }

  itemSchema(itemSchema: string | object) {
    this.json['itemSchema'] = itemSchema
    return this
  }
}
