import Schema from './schema.js'

/**
 * Each
 * @docs https://baidu.github.io/amis/zh-CN/components/each
 */
export default class Each extends Schema<Each> {
  protected json: Record<string, any> = { type: 'each' }

  value(value: object[]) {
    this.json['value'] = value
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  items(items: object) {
    this.json['items'] = items
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  itemKeyName(itemKeyName: string) {
    this.json['itemKeyName'] = itemKeyName
    return this
  }

  indexKeyName(indexKeyName: string) {
    this.json['indexKeyName'] = indexKeyName
    return this
  }
}
