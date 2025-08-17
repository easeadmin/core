import FormItem from './form_item.js'

/**
 * InputSwitch
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-switch
 */
export default class InputSwitch extends FormItem {
  protected json: Record<string, any> = { type: 'switch' }

  option(option: string) {
    this.json['option'] = option
    return this
  }

  onText(onText: string | object) {
    this.json['onText'] = onText
    return this
  }

  offText(offText: string | object) {
    this.json['offText'] = offText
    return this
  }

  trueValue(trueValue: boolean | string | number) {
    this.json['trueValue'] = trueValue
    return this
  }

  falseValue(falseValue: boolean | string | number) {
    this.json['falseValue'] = falseValue
    return this
  }

  size(size: 'sm' | 'md') {
    this.json['size'] = size
    return this
  }

  loading(loading: boolean) {
    this.json['loading'] = loading
    return this
  }
}
