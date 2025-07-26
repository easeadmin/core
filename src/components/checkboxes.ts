import Api from './api.js'
import FormItem from './form_item.js'

/**
 * Checkboxes
 * @docs https://baidu.github.io/amis/zh-CN/components/form/checkboxes
 */
export default class Checkboxes extends FormItem {
  protected json: Record<string, any> = { type: 'checkboxes' }

  option(option: object[] | string[]) {
    this.json['option'] = option
    return this
  }

  source(source: string | Record<string, any> | Api) {
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

  columnsCount(columnsCount: number) {
    this.json['columnsCount'] = columnsCount
    return this
  }

  menuTpl(menuTpl: string) {
    this.json['menuTpl'] = menuTpl
    return this
  }

  checkAll(checkAll: boolean) {
    this.json['checkAll'] = checkAll
    return this
  }

  inline(inline: boolean) {
    this.json['inline'] = inline
    return this
  }

  defaultCheckAll(defaultCheckAll: boolean) {
    this.json['defaultCheckAll'] = defaultCheckAll
    return this
  }

  creatable(creatable: boolean) {
    this.json['creatable'] = creatable
    return this
  }

  createBtnLabel(createBtnLabel: string) {
    this.json['createBtnLabel'] = createBtnLabel
    return this
  }

  addControls(addControls: object[]) {
    this.json['addControls'] = addControls
    return this
  }

  addApi(addApi: string | Record<string, any> | Api) {
    this.json['addApi'] = addApi
    return this
  }

  editable(editable: boolean) {
    this.json['editable'] = editable
    return this
  }

  editControls(editControls: object[]) {
    this.json['editControls'] = editControls
    return this
  }

  editApi(editApi: string | Record<string, any> | Api) {
    this.json['editApi'] = editApi
    return this
  }

  removable(removable: boolean) {
    this.json['removable'] = removable
    return this
  }

  deleteApi(deleteApi: string | Record<string, any> | Api) {
    this.json['deleteApi'] = deleteApi
    return this
  }

  optionType(optionType: 'default' | 'button') {
    this.json['optionType'] = optionType
    return this
  }

  itemClassName(itemClassName: string) {
    this.json['itemClassName'] = itemClassName
    return this
  }

  labelClassName(labelClassName: string) {
    this.json['labelClassName'] = labelClassName
    return this
  }
}
