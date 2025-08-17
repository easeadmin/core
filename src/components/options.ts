import FormItem from './form_item.js'
import Api from './api.js'

/**
 * Options
 * @docs https://baidu.github.io/amis/zh-CN/components/form/options
 */
export default class Options extends FormItem {
  protected json: Record<string, any> = { type: 'select' }

  size(size: 'xs' | 'sm' | 'md' | 'lg') {
    this.json['size'] = size
    return this
  }

  options(options: object[] | string[]) {
    this.json['options'] = options
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
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

  deferField(deferField: string) {
    this.json['deferField'] = deferField
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

  itemHeight(itemHeight: number) {
    this.json['itemHeight'] = itemHeight
    return this
  }

  virtualThreshold(virtualThreshold: number) {
    this.json['virtualThreshold'] = virtualThreshold
    return this
  }

  valuesNoWrap(valuesNoWrap: boolean) {
    this.json['valuesNoWrap'] = valuesNoWrap
    return this
  }

  clearValueOnSourceChange(clearValueOnSourceChange: boolean) {
    this.json['clearValueOnSourceChange'] = clearValueOnSourceChange
    return this
  }
}
