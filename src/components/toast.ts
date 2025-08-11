import Schema from './schema.js'

/**
 * Toast
 * @docs https://baidu.github.io/amis/zh-CN/components/toast
 */
export default class Toast extends Schema<Toast> {
  protected json: Record<string, any> = { type: 'toast' }

  actionType(actionType: string) {
    this.json['actionType'] = actionType
    return this
  }

  items(items: ToastItem[]) {
    this.json['items'] = items
    return this
  }

  position(
    position:
      | 'center'
      | 'top-center'
      | 'bottom-center'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
  ) {
    this.json['position'] = position
    return this
  }

  closeButton(closeButton: boolean) {
    this.json['closeButton'] = closeButton
    return this
  }

  showIcon(showIcon: boolean) {
    this.json['showIcon'] = showIcon
    return this
  }

  timeout(timeout: number) {
    this.json['timeout'] = timeout
    return this
  }
}

export class ToastItem extends Schema<ToastItem> {
  title(title: string) {
    this.json['title'] = title
    return this
  }

  body(body: string) {
    this.json['body'] = body
    return this
  }

  level(level: 'info' | 'warning' | 'error' | 'success') {
    this.json['level'] = level
    return this
  }

  position(position: 'left' | 'right' | 'top' | 'bottom') {
    this.json['position'] = position
    return this
  }

  closeButton(closeButton: boolean) {
    this.json['closeButton'] = closeButton
    return this
  }

  showIcon(showIcon: boolean) {
    this.json['showIcon'] = showIcon
    return this
  }

  timeout(timeout: number) {
    this.json['timeout'] = timeout
    return this
  }

  allowHtml(allowHtml: boolean) {
    this.json['allowHtml'] = allowHtml
    return this
  }
}
