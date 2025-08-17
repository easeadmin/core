import Schema from './schema.js'

/**
 * Sparkline
 * @docs https://baidu.github.io/amis/zh-CN/components/sparkline
 */
export default class Sparkline extends Schema<Sparkline> {
  protected json: Record<string, any> = { type: 'sparkline' }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  width(width: number) {
    this.json['width'] = width
    return this
  }

  height(height: number) {
    this.json['height'] = height
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }
}
