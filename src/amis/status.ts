import Schema from './schema.js'

/**
 * Status
 * @docs https://baidu.github.io/amis/zh-CN/components/status
 */
export default class Status extends Schema<Status> {
  protected json: Record<string, any> = { type: 'status' }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  map(map: object) {
    this.json['map'] = map
    return this
  }

  labelMap(labelMap: object) {
    this.json['labelMap'] = labelMap
    return this
  }

  source(source: { label?: string; icon?: string; color?: string; className?: string }) {
    this.json['source'] = source
    return this
  }
}
