import Schema from './schema.js'

/**
 * Shape
 * @docs https://baidu.github.io/amis/zh-CN/components/slider
 */
export default class Slider extends Schema<Slider> {
  protected json: Record<string, any> = { type: 'slider' }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  right(right: object) {
    this.json['right'] = right
    return this
  }

  left(left: object) {
    this.json['left'] = left
    return this
  }

  bodyWidth(bodyWidth: string) {
    this.json['bodyWidth'] = bodyWidth
    return this
  }
}
