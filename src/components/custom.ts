import Schema from './schema.js'

/**
 * Custom
 * @docs https://baidu.github.io/amis/zh-CN/components/custom
 */
export default class Custom extends Schema<Custom> {
  protected json: Record<string, any> = { type: 'custom' }
  name(name: string) {
    this.json['name'] = name
    return this
  }

  inline(inline: boolean) {
    this.json['inline'] = inline
    return this
  }

  html(html: string) {
    this.json['html'] = html
    return this
  }

  onMount(onMount: string) {
    this.json['onMount'] = onMount
    return this
  }

  onUpdate(onUpdate: string) {
    this.json['onUpdate'] = onUpdate
    return this
  }

  onUnmount(onUnmount: string) {
    this.json['onUnmount'] = onUnmount
    return this
  }
}
