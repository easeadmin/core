import FormItem from './form_item.js'
import Api from './api.js'

/**
 * InputTag
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-tag
 */
export default class InputTag extends FormItem {
  protected json: Record<string, any> = { type: 'input-tag' }

  options(options: object[] | string[]) {
    this.json['options'] = options
    return this
  }

  optionsTip(optionsTip: object[] | string[]) {
    this.json['optionsTip'] = optionsTip
    return this
  }

  source(source: string | Api) {
    this.json['source'] = source
    return this
  }

  delimiter(delimiter: string) {
    this.json['delimiter'] = delimiter
    return this
  }

  labelField(labelField: string) {
    this.json['labelField'] = labelField
    return this
  }

  valueField(valueField: string) {
    this.json['valueField'] = valueField
    return this
  }

  joinValues(joinValues: boolean) {
    this.json['joinValues'] = joinValues
    return this
  }

  extractValue(extractValue: boolean) {
    this.json['extractValue'] = extractValue
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  resetValue(resetValue: string) {
    this.json['resetValue'] = resetValue
    return this
  }

  max(max: number) {
    this.json['max'] = max
    return this
  }

  maxTagLength(maxTagLength: number) {
    this.json['maxTagLength'] = maxTagLength
    return this
  }

  maxTagCount(maxTagCount: number) {
    this.json['maxTagCount'] = maxTagCount
    return this
  }

  overflowTagPopover(overflowTagPopover: object) {
    this.json['overflowTagPopover'] = overflowTagPopover
    return this
  }

  enableBatchAdd(enableBatchAdd: boolean) {
    this.json['enableBatchAdd'] = enableBatchAdd
    return this
  }

  separator(separator: string) {
    this.json['separator'] = separator
    return this
  }
}
