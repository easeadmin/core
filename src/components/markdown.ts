import Schema from './schema.js'

/**
 * Markdown
 * @docs https://baidu.github.io/amis/zh-CN/components/markdown
 */
export default class Markdown extends Schema<Markdown> {
  protected json: Record<string, any> = { type: 'markdown' }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  value(value: string) {
    this.json['value'] = value
    return this
  }

  src(src: any) {
    this.json['src'] = src
    return this
  }
}
