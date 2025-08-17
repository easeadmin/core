import Api from './api.js'
import FormItem from './form_item.js'

/**
 * NestedSelect
 * @docs https://baidu.github.io/amis/zh-CN/components/form/imatrix-checkboxes
 */
export default class NestedSelect extends FormItem {
  protected json: Record<string, any> = { type: 'nested-select' }

  options(columns: object[] | string[]) {
    this.json['columns'] = columns
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  delimiter(delimiter: boolean) {
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

  cascade(cascade: boolean) {
    this.json['cascade'] = cascade
    return this
  }

  withChildren(withChildren: boolean) {
    this.json['withChildren'] = withChildren
    return this
  }

  onlyChildren(onlyChildren: boolean) {
    this.json['onlyChildren'] = onlyChildren
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }

  searchPromptText(searchPromptText: string) {
    this.json['searchPromptText'] = searchPromptText
    return this
  }

  noResultsText(noResultsText: string) {
    this.json['noResultsText'] = noResultsText
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  hideNodePathLabel(hideNodePathLabel: boolean) {
    this.json['hideNodePathLabel'] = hideNodePathLabel
    return this
  }

  onlyLeaf(onlyLeaf: boolean) {
    this.json['onlyLeaf'] = onlyLeaf
    return this
  }

  maxTagCount(maxTagCount: number) {
    this.json['maxTagCount'] = maxTagCount
    return this
  }

  overflowTagPopover(overflowTagPopover: boolean) {
    this.json['overflowTagPopover'] = overflowTagPopover
    return this
  }
}
