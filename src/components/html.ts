import Schema from './schema.js'

/**
 * Html
 * @docs https://baidu.github.io/amis/zh-CN/components/html
 */
export default class Html extends Schema<Html> {
  protected json: Record<string, any> = { type: 'html' }

  html(html: string) {
    this.json['html'] = html
    return this
  }
}
