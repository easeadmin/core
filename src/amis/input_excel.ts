import FormItem from './form_item.js'

/**
 * InputExcel
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-excel
 */
export default class InputExcel extends FormItem {
  protected json: Record<string, any> = { type: 'input-excel' }

  allSheets(allSheets: boolean) {
    this.json['allSheets'] = allSheets
    return this
  }

  parseMode(parseMode: 'array' | 'object') {
    this.json['parseMode'] = parseMode
    return this
  }

  includeEmpty(includeEmpty: boolean) {
    this.json['includeEmpty'] = includeEmpty
    return this
  }

  plainText(plainText: boolean) {
    this.json['plainText'] = plainText
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  maxLength(maxLength: number) {
    this.json['maxLength'] = maxLength
    return this
  }
}
