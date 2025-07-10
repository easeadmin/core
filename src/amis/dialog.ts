import Schema from './schema.js'
import Action from './action.js'

/**
 * Dialog
 * @docs https://baidu.github.io/amis/zh-CN/components/dialog
 */
export default class Dialog extends Schema<Dialog> {
  protected json: Record<string, any> = { type: 'dialog' }

  title(title: string | object) {
    this.json['title'] = title
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  size(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full') {
    this.json['size'] = size
    return this
  }

  width(width: string | number) {
    this.json['width'] = width
    return this
  }
  height(height: string | number) {
    this.json['height'] = height
    return this
  }

  bodyClassName(className: string) {
    this.json['bodyClassName'] = className
    return this
  }

  closeOnEsc(closeOnEsc: boolean) {
    this.json['closeOnEsc'] = closeOnEsc
    return this
  }

  showCloseButton(showCloseButton: boolean) {
    this.json['showCloseButton'] = showCloseButton
    return this
  }

  showErrorMsg(showErrorMsg: boolean) {
    this.json['showErrorMsg'] = showErrorMsg
    return this
  }

  showLoading(showLoading: boolean) {
    this.json['showLoading'] = showLoading
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }
  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  actions(actions: Action[]) {
    this.json['actions'] = actions
    return this
  }

  data(data: object) {
    this.json['data'] = data
    return this
  }
}
