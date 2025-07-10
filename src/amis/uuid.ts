import Schema from './schema.js'

/**
 * Uuid
 * @docs https://baidu.github.io/amis/zh-CN/components/form/uuid
 */
export default class Uuid extends Schema<Uuid> {
  protected json: Record<string, any> = { type: 'uuid' }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  length(length: number) {
    this.json['length'] = length
    return this
  }
}
