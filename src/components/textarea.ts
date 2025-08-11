import FormItem from './form_item.js'

/**
 * Textarea
 * @docs https://baidu.github.io/amis/zh-CN/components/form/textarea
 */
export default class Textarea extends FormItem {
  protected json: Record<string, any> = { type: 'textarea' }

  minRows(minRows: number) {
    this.json['minRows'] = minRows
    return this
  }

  maxRows(maxRows: number) {
    this.json['maxRows'] = maxRows
    return this
  }

  trimContents(trimContents: boolean) {
    this.json['trimContents'] = trimContents
    return this
  }

  readOnly(readOnly: boolean) {
    this.json['readOnly'] = readOnly
    return this
  }

  showCounter(showCounter: boolean) {
    this.json['showCounter'] = showCounter
    return this
  }

  maxLength(maxLength: number) {
    this.json['maxLength'] = maxLength
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
}
