import FormItem from './form_item.js'
import Button from './button.js'

/**
 * ButtonToolbar
 * @docs https://baidu.github.io/amis/zh-CN/components/form/button-toolbar
 */
export default class ButtonToolbar extends FormItem {
  protected json: Record<string, any> = { type: 'button-toolbar' }

  buttons(buttons: Button[]) {
    this.json['buttons'] = buttons
    return this
  }
}
