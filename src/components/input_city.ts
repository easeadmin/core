import FormItem from './form_item.js'

/**
 * InputCity
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-city
 */
export default class InputCity extends FormItem {
  protected json: Record<string, any> = { type: 'input-city' }

  allowCity(allowCity: boolean) {
    this.json['allowCity'] = allowCity
    return this
  }

  allowDistrict(allowDistrict: boolean) {
    this.json['allowDistrict'] = allowDistrict
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }

  extractValue(extractValue: boolean) {
    this.json['extractValue'] = extractValue
    return this
  }
}
