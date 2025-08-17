import Schema from './schema.js'

/**
 * remark
 * @docs https://baidu.github.io/amis/zh-CN/components/remark
 */
export default class Remark extends Schema<Remark> {
  protected json: Record<string, any> = { type: 'remark' }

  content(content: string) {
    this.json['content'] = content
    return this
  }

  placement(placement: 'top' | 'bottom' | 'left' | 'right') {
    this.json['placement'] = placement
    return this
  }

  trigger(trigger: 'hover' | 'click') {
    this.json['trigger'] = trigger
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  shape(shape: 'circle' | 'square') {
    this.json['shape'] = shape
    return this
  }
}
