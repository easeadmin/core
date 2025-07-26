import FormItem from './form_item.js'

/**
 * InputQuarterRange
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-quarter-range
 */
export default class InputQuarterRange extends FormItem {
  protected json: Record<string, any> = { type: 'input-quarter-range' }

  valueFormat(valueFormat: string) {
    this.json['valueFormat'] = valueFormat
    return this
  }

  displayFormat(displayFormat: string) {
    this.json['displayFormat'] = displayFormat
    return this
  }

  minDate(minDate: string) {
    this.json['minDate'] = minDate
    return this
  }

  maxDate(maxDate: string) {
    this.json['maxDate'] = maxDate
    return this
  }

  minDuration(minDuration: string) {
    this.json['minDuration'] = minDuration
    return this
  }

  maxDuration(maxDuration: string) {
    this.json['maxDuration'] = maxDuration
    return this
  }

  utc(utc: boolean) {
    this.json['utc'] = utc
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
