import Schema from './schema.js'

/**
 * Alert
 * @docs https://baidu.github.io/amis/zh-CN/components/alert
 */
export default class Alert extends Schema<Alert> {
  protected json: Record<string, any> = { type: 'alert' }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  level(level: 'info' | 'success' | 'warning' | 'danger') {
    this.json['level'] = level
    return this
  }

  showCloseButton(showCloseButton: boolean) {
    this.json['showCloseButton'] = showCloseButton
    return this
  }

  closeButtonClassName(className: string) {
    this.json['closeButtonClassName'] = className
    return this
  }

  showIcon(showIcon: boolean) {
    this.json['showIcon'] = showIcon
    return this
  }

  icon(icon: string) {
    this.json['icon'] = icon
    return this
  }

  iconClassName(className: string) {
    this.json['iconClassName'] = className
    return this
  }

  actions(actions: object) {
    this.json['actions'] = actions
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }
}
