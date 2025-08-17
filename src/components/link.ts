import Schema from './schema.js'

/**
 * Link
 * @docs https://baidu.github.io/amis/zh-CN/components/link
 */
export default class Link extends Schema<Link> {
  protected json: Record<string, any> = { type: 'link' }

  body(body: string) {
    this.json['body'] = body
    return this
  }

  href(href: string) {
    this.json['href'] = href
    return this
  }

  blank(blank: boolean) {
    this.json['blank'] = blank
    return this
  }

  htmlTarget(htmlTarget: string) {
    this.json['htmlTarget'] = htmlTarget
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  icon(icon: string) {
    this.json['icon'] = icon
    return this
  }

  rightIcon(rightIcon: string) {
    this.json['rightIcon'] = rightIcon
    return this
  }
}
