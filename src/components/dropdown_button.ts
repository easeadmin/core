import Button from './button.js'
import Action from './action.js'

/**
 * ButtonGroup
 * @docs https://baidu.github.io/amis/zh-CN/components/dropdown-button
 */
export default class ButtonGroup extends Button {
  protected json: Record<string, any> = { type: 'dropdown-button' }

  label(label: string) {
    this.json['label'] = label
    return this
  }

  btnClassName(btnClassName: string) {
    this.json['btnClassName'] = btnClassName
    return this
  }

  menuClassName(menuClassName: string) {
    this.json['menuClassName'] = menuClassName
    return this
  }

  block(block: boolean) {
    this.json['block'] = block
    return this
  }

  size(size: 'xs' | 'lg' | 'sm' | 'md') {
    this.json['size'] = size
    return this
  }

  align(align: 'left' | 'right') {
    this.json['align'] = align
    return this
  }

  iconOnly(iconOnly: boolean) {
    this.json['iconOnly'] = iconOnly
    return this
  }

  defaultIsOpened(defaultIsOpened: boolean) {
    this.json['defaultIsOpened'] = defaultIsOpened
    return this
  }

  closeOnOutside(closeOnOutside: boolean) {
    this.json['closeOnOutside'] = closeOnOutside
    return this
  }

  closeOnClick(closeOnClick: boolean) {
    this.json['closeOnClick'] = closeOnClick
    return this
  }

  trigger(trigger: 'hover' | 'click') {
    this.json['trigger'] = trigger
    return this
  }

  hideCaret(hideCaret: boolean) {
    this.json['hideCaret'] = hideCaret
    return this
  }

  buttons(buttons: Action[] | object[]) {
    this.json['buttons'] = buttons
    return this
  }
}
