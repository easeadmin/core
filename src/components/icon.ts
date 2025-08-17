import Schema from './schema.js'

/**
 * Icon
 * @docs https://baidu.github.io/amis/zh-CN/components/icon
 */
export default class Icon extends Schema<Icon> {
  protected json: Record<string, any> = { type: 'icon' }

  icon(icon: string) {
    this.json['icon'] = icon
    return this
  }

  vendor(vendor: string) {
    this.json['vendor'] = vendor
    return this
  }
}
