import FormItem from './form_item.js'

/**
 * InputRepeat
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-repeat
 */
export default class InputRepeat extends FormItem {
  protected json: Record<string, any> = { type: 'input-repeat' }

  options(options: string) {
    this.json['options'] = options
    return this
  }
}
