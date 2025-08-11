import FormItem from './form_item.js'

/**
 * Radio
 * @docs https://baidu.github.io/amis/zh-CN/components/form/radio
 */
export default class Radio extends FormItem {
  protected json: Record<string, any> = { type: 'radio' }

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
}
