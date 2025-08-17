import Schema from './schema.js'
import Action from './action.js'

/**
 * ButtonGroup
 * @docs https://baidu.github.io/amis/zh-CN/components/button-group
 */
export default class ButtonGroup extends Schema<ButtonGroup> {
  protected json: Record<string, any> = { type: 'button-group' }

  vertical(vertical: boolean) {
    this.json['vertical'] = vertical
    return this
  }

  tiled(tiled: boolean) {
    this.json['tiled'] = tiled
    return this
  }

  btnLevel(
    level:
      | 'link'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'dark'
      | 'default'
  ) {
    this.json['btnLevel'] = level
    return this
  }

  btnActiveLevel(
    level:
      | 'link'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'dark'
      | 'default'
  ) {
    this.json['btnActiveLevel'] = level
    return this
  }

  buttons(buttons: Action[]) {
    this.json['buttons'] = buttons
    return this
  }
}
