import Schema from './schema.js'

/**
 * Wrapper
 * @docs https://baidu.github.io/amis/zh-CN/components/wrapper
 */
export default class Wrapper extends Schema<Wrapper> {
  protected json: Record<string, any> = { type: 'wrapper' }

  size(size: 'xs' | 'sm' | 'md' | 'lg' | 'none') {
    this.json['size'] = size
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }
}
