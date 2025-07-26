import Schema from './schema.js'

/**
 * AnchorNav
 * @docs https://baidu.github.io/amis/zh-CN/components/anchor-nav
 */
export default class AnchorNav extends Schema<AnchorNav> {
  protected json: Record<string, any> = { type: 'anchor-nav' }

  linkClassName(linkClassName: string) {
    this.json['linkClassName'] = linkClassName
    return this
  }

  sectionClassName(sectionClassName: string) {
    this.json['sectionClassName'] = sectionClassName
    return this
  }

  links(links: Link[]) {
    this.json['links'] = links
    return this
  }

  direction(direction: 'horizontal' | 'vertical') {
    this.json['direction'] = direction
    return this
  }

  active(active: string) {
    this.json['active'] = active
    return this
  }
}

export class Link extends Schema<Link> {
  title(title: string) {
    this.json['title'] = title
    return this
  }

  href(href: string) {
    this.json['href'] = href
    return this
  }

  body(body: string) {
    this.json['body'] = body
    return this
  }
}
