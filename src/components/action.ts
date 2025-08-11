import Schema from './schema.js'
import Badge from './badge.js'
import Api from './api.js'

/**
 * Action
 * @docs https://baidu.github.io/amis/zh-CN/components/action
 */
export default class Action extends Schema<Action> {
  protected json: Record<string, any> = { type: 'action' }

  api(api: string | Record<string, any> | Api) {
    this.json['actionType'] = 'ajax'
    this.json['api'] = api
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  badge(badge: Badge) {
    this.json['badge'] = badge
    return this
  }

  actionType(actionType: string) {
    this.json['actionType'] = actionType
    return this
  }

  dialog(dialog: object) {
    this.json['actionType'] = 'dialog'
    this.json['dialog'] = dialog
    return this
  }

  label(label: string) {
    this.json['label'] = label
    return this
  }

  level(level: string) {
    this.json['level'] = level
    return this
  }

  size(size: string) {
    this.json['size'] = size
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  align(align: 'left' | 'right' | 'center') {
    this.json['align'] = align
    return this
  }

  iconClassName(iconClassName: string) {
    this.json['iconClassName'] = iconClassName
    return this
  }

  rightIcon(icon: string) {
    this.json['rightIcon'] = icon
    return this
  }

  rightIconClassName(iconClassName: string) {
    this.json['rightIconClassName'] = iconClassName
    return this
  }

  active(active: boolean) {
    this.json['active'] = active
    return this
  }

  activeLevel(level: string) {
    this.json['activeLevel'] = level
    return this
  }

  activeClassName(activeClassName: string) {
    this.json['activeClassName'] = activeClassName
    return this
  }

  block(block: boolean) {
    this.json['block'] = block
    return this
  }

  confirmText(confirmText: string | object) {
    this.json['confirmText'] = confirmText
    return this
  }

  confirmTitle(confirmTitle: string | object) {
    this.json['confirmTitle'] = confirmTitle
    return this
  }

  reload(reload: string) {
    this.json['reload'] = reload
    return this
  }

  tooltip(tooltip: string) {
    this.json['tooltip'] = tooltip
    return this
  }

  disabledTip(disabledTip: string) {
    this.json['disabledTip'] = disabledTip
    return this
  }

  tooltipPlacement(tooltipPlacement: string) {
    this.json['tooltipPlacement'] = tooltipPlacement
    return this
  }

  close(close: boolean | string) {
    this.json['close'] = close
    return this
  }

  required(required: string[]) {
    this.json['required'] = required
    return this
  }

  onClick(onClick: string) {
    this.json['onClick'] = onClick
    return this
  }

  blank(blank: boolean) {
    this.json['blank'] = blank
    return this
  }
}
