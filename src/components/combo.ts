import Api from './api.js'
import FormItem from './form_item.js'

/**
 * Combo
 * @docs https://baidu.github.io/amis/zh-CN/components/form/combo
 */
export default class Combo extends FormItem {
  protected json: Record<string, any> = { type: 'combo' }

  formClassName(formClassName: string) {
    this.json['formClassName'] = formClassName
    return this
  }

  items(items: FormItem[]) {
    this.json['items'] = items
    return this
  }

  noBorder(noBorder: boolean) {
    this.json['noBorder'] = noBorder
    return this
  }

  scaffold(scaffold: object) {
    this.json['scaffold'] = scaffold
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  multiLine(multiLine: boolean) {
    this.json['multiLine'] = multiLine
    return this
  }

  minLength(minLength: number) {
    this.json['minLength'] = minLength
    return this
  }

  maxLength(maxLength: number) {
    this.json['maxLength'] = maxLength
    return this
  }

  flat(flat: boolean) {
    this.json['flat'] = flat
    return this
  }

  joinValues(joinValues: boolean) {
    this.json['joinValues'] = joinValues
    return this
  }

  delimiter(delimiter: string) {
    this.json['delimiter'] = delimiter
    return this
  }

  addable(addable: boolean) {
    this.json['addable'] = addable
    return this
  }

  addattop(addattop: boolean) {
    this.json['addattop'] = addattop
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

  deleteConfirmText(deleteConfirmText: string) {
    this.json['deleteConfirmText'] = deleteConfirmText
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  draggableTip(draggableTip: string) {
    this.json['draggableTip'] = draggableTip
    return this
  }

  subFormMode(subFormMode: 'normal' | 'inline' | 'horizontal') {
    this.json['subFormMode'] = subFormMode
    return this
  }

  subFormHorizontal(subFormHorizontal: object) {
    this.json['subFormHorizontal'] = subFormHorizontal
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  canAccessSuperData(canAccessSuperData: boolean) {
    this.json['canAccessSuperData'] = canAccessSuperData
    return this
  }

  conditions(conditions: object) {
    this.json['conditions'] = conditions
    return this
  }

  typeSwitchable(typeSwitchable: boolean) {
    this.json['typeSwitchable'] = typeSwitchable
    return this
  }

  strictMode(strictMode: boolean) {
    this.json['strictMode'] = strictMode
    return this
  }

  syncFields(syncFields: string[]) {
    this.json['syncFields'] = syncFields
    return this
  }

  nullable(nullable: boolean) {
    this.json['nullable'] = nullable
    return this
  }

  itemClassName(itemClassName: string) {
    this.json['itemClassName'] = itemClassName
    return this
  }

  itemsWrapperClassName(itemsWrapperClassName: string) {
    this.json['itemsWrapperClassName'] = itemsWrapperClassName
    return this
  }

  deleteBtnClassName(deleteBtnClassName: object | string) {
    this.json['deleteBtnClassName'] = deleteBtnClassName
    return this
  }

  addBtn(addBtn: object) {
    this.json['addBtn'] = addBtn
    return this
  }

  addButtonClassName(addButtonClassName: string) {
    this.json['addButtonClassName'] = addButtonClassName
    return this
  }

  addButtonText(addButtonText: string) {
    this.json['addButtonText'] = addButtonText
    return this
  }
}
