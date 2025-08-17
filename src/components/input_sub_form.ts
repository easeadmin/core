import FormItem from './form_item.js'
import Form from './form.js'

/**
 * InputSubForm
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-sub-form
 */
export default class InputSubForm extends FormItem {
  protected json: Record<string, any> = { type: 'input-sub-form' }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  labelField(labelField: string) {
    this.json['labelField'] = labelField
    return this
  }

  btnLabel(btnLabel: string) {
    this.json['btnLabel'] = btnLabel
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

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  addable(addable: boolean) {
    this.json['addable'] = addable
    return this
  }

  removable(removable: boolean) {
    this.json['removable'] = removable
    return this
  }

  addButtonClassName(addButtonClassName: string) {
    this.json['addButtonClassName'] = addButtonClassName
    return this
  }

  itemClassName(itemClassName: string) {
    this.json['itemClassName'] = itemClassName
    return this
  }

  itemsClassName(itemsClassName: string) {
    this.json['itemsClassName'] = itemsClassName
    return this
  }

  form(form: Form) {
    this.json['form'] = form
    return this
  }

  addButtonText(addButtonText: string) {
    this.json['addButtonText'] = addButtonText
    return this
  }

  showErrorMsg(showErrorMsg: boolean) {
    this.json['showErrorMsg'] = showErrorMsg
    return this
  }
}
