import Schema from './schema.js'
import Action from './action.js'

/**
 * Drawer
 * @docs https://baidu.github.io/amis/zh-CN/components/drawer
 */
export default class Drawer extends Schema<Drawer> {
  protected json: Record<string, any> = { type: 'drawer' }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  size(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl') {
    this.json['size'] = size
    return this
  }

  position(position: 'left' | 'right' | 'top' | 'bottom') {
    this.json['position'] = position
    return this
  }

  headerClassName(className: string) {
    this.json['headerClassName'] = className
    return this
  }

  bodyClassName(className: string) {
    this.json['bodyClassName'] = className
    return this
  }

  footerClassName(className: string) {
    this.json['footerClassName'] = className
    return this
  }

  showCloseButton(showCloseButton: boolean) {
    this.json['showCloseButton'] = showCloseButton
    return this
  }

  closeOnEsc(closeOnEsc: boolean) {
    this.json['closeOnEsc'] = closeOnEsc
    return this
  }

  closeOnOutside(closeOnOutside: boolean) {
    this.json['closeOnOutside'] = closeOnOutside
    return this
  }

  overlay(overlay: boolean) {
    this.json['overlay'] = overlay
    return this
  }

  resizable(resizable: boolean) {
    this.json['resizable'] = resizable
    return this
  }

  width(width: number | string) {
    this.json['width'] = width
    return this
  }

  height(height: number | string) {
    this.json['height'] = height
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
