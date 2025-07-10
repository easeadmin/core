import FormItem from './form_item.js'

/**
 * InputTimeRange
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-time-range
 */
export default class InputTimeRange extends FormItem {
  protected json: Record<string, any> = { type: 'input-time-range' }

  valueFormat(valueFormat: string) {
    this.json['valueFormat'] = valueFormat
    return this
  }

  displayFormat(displayFormat: string) {
    this.json['displayFormat'] = displayFormat
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  embed(embed: boolean) {
    this.json['embed'] = embed
    return this
  }

  animation(animation: boolean) {
    this.json['animation'] = animation
    return this
  }

  extraName(extraName: string) {
    this.json['extraName'] = extraName
    return this
  }

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }
}
