import Schema from './schema.js'

/**
 * iFrame
 * @docs https://baidu.github.io/amis/zh-CN/components/iframe
 */
export default class IFrame extends Schema<IFrame> {
  protected json: Record<string, any> = { type: 'iframe' }

  frameBorder(frameBorder: any[]) {
    this.json['frameBorder'] = frameBorder
    return this
  }

  src(src: string) {
    this.json['src'] = src
    return this
  }

  allow(allow: string) {
    this.json['allow'] = allow
    return this
  }

  sandbox(sandbox: string) {
    this.json['sandbox'] = sandbox
    return this
  }

  referrerpolicy(referrerpolicy: string) {
    this.json['referrerpolicy'] = referrerpolicy
    return this
  }

  height(height: number | string) {
    this.json['height'] = height
    return this
  }

  width(width: number | string) {
    this.json['width'] = width
    return this
  }
}
