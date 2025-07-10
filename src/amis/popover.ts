import Schema from './schema.js'

/**
 * PopOver
 * @docs https://baidu.github.io/amis/zh-CN/components/popover
 */
export default class PopOver extends Schema<PopOver> {
  mode(mode: 'popOver' | 'dialog' | 'drawer') {
    this.json['mode'] = mode
    return this
  }

  size(size: string) {
    this.json['size'] = size
    return this
  }

  position(position: string) {
    this.json['position'] = position
    return this
  }

  offset(offset: { top: number; left: number }) {
    this.json['offset'] = offset
    return this
  }

  trigger(trigger: 'hover' | 'click') {
    this.json['trigger'] = trigger
    return this
  }

  showIcon(showIcon: boolean) {
    this.json['showIcon'] = showIcon
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  body(body: object | string) {
    this.json['body'] = body
    return this
  }
}
