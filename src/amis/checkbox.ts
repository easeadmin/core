import FormItem from './form_item.js'

/**
 * Checkbox
 * @docs https://baidu.github.io/amis/zh-CN/components/form/checkbox
 */
export default class Checkbox extends FormItem {
  protected json: Record<string, any> = { type: 'checkbox' }

  option(option: string) {
    this.json['option'] = option
    return this
  }

  trueValue(trueValue: string | number | boolean) {
    this.json['trueValue'] = trueValue
    return this
  }

  falseValue(falseValue: string | number | boolean) {
    this.json['falseValue'] = falseValue
    return this
  }

  optionType(optionType: 'default' | 'button') {
    this.json['optionType'] = optionType
    return this
  }
}
