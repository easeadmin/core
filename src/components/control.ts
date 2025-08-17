import Schema from './schema.js'

/**
 * Control
 * @docs https://baidu.github.io/amis/zh-CN/components/form/control
 */
export default class Control extends Schema<Control> {
  protected json: Record<string, any> = { type: 'control' }

  label(label: string) {
    this.json['label'] = label
    return this
  }

  description(description: string) {
    this.json['description'] = description
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }
}
