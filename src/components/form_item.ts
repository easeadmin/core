import Api from './api.js'
import Schema from './schema.js'
import Remark from './remark.js'
import { QueryType } from '../types.js'
/**
 * form
 * @docs https://baidu.github.io/amis/zh-CN/components/form
 */
export default class FormItem extends Schema<FormItem> {
  // ease function
  filter(filter: QueryType) {
    this.json['filter'] = filter
    return this
  }

  inputClassName(inputClassName: string) {
    this.json['inputClassName'] = inputClassName
    return this
  }

  labelClassName(labelClassName: string) {
    this.json['labelClassName'] = labelClassName
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  value(value: any) {
    this.json['value'] = value
    return this
  }

  label(label: string | boolean) {
    this.json['label'] = label
    return this
  }

  labelAlign(labelAlign: 'left' | 'right') {
    this.json['labelAlign'] = labelAlign
    return this
  }

  labelRemark(labelRemark: Remark) {
    this.json['labelRemark'] = labelRemark
    return this
  }

  description(description: object | string) {
    this.json['description'] = description
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  inline(inline: boolean) {
    this.json['inline'] = inline
    return this
  }

  strictMode(strictMode: boolean) {
    this.json['strictMode'] = strictMode
    return this
  }

  submitOnChange(submitOnChange: boolean) {
    this.json['submitOnChange'] = submitOnChange
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  disabledOn(disabledOn: string) {
    this.json['disabledOn'] = disabledOn
    return this
  }

  visible(visible: boolean) {
    this.json['visible'] = visible
    return this
  }

  visibleOn(visibleOn: string) {
    this.json['visibleOn'] = visibleOn
    return this
  }

  required(required: boolean) {
    this.json['required'] = required
    return this
  }

  requiredOn(requiredOn: string) {
    this.json['requiredOn'] = requiredOn
    return this
  }

  validations(validations: string | object) {
    this.json['validations'] = validations
    return this
  }

  validateApi(validateApi: string | Record<string, any> | Api) {
    this.json['validateApi'] = validateApi
    return this
  }

  autoFill(autoFill: AutoFill) {
    this.json['autoFill'] = autoFill
    return this
  }

  static(state: boolean) {
    this.json['static'] = state
    return this
  }

  staticClassName(className: string) {
    this.json['staticClassName'] = className
    return this
  }

  staticLabelClassName(labelClassName: string) {
    this.json['staticLabelClassName'] = labelClassName
    return this
  }

  staticInputClassName(inputClassName: string) {
    this.json['staticInputClassName'] = inputClassName
    return this
  }

  staticSchema(schema: { limit: number }) {
    this.json['staticSchema'] = schema
    return this
  }
}

class AutoFill extends Schema<AutoFill> {
  showSuggestion(showSuggestion: boolean) {
    this.json['showSuggestion'] = showSuggestion
    return this
  }
  api(api: string | Record<string, any> | Api) {
    this.json['api'] = api
    return this
  }

  silent(silent: boolean) {
    this.json['silent'] = silent
    return this
  }

  fillMappinng(mapping: object) {
    this.json['mapping'] = mapping
    return this
  }

  trigger(trigger: string) {
    this.json['trigger'] = trigger
    return this
  }

  mode(mode: 'dialog' | 'drawer' | 'popOver') {
    this.json['mode'] = mode
    return this
  }

  labelField(labelField: string) {
    this.json['labelField'] = labelField
    return this
  }

  position(position: string) {
    this.json['position'] = position
    return this
  }

  size(size: string) {
    this.json['size'] = size
    return this
  }

  columns(columns: object[]) {
    this.json['columns'] = columns
    return this
  }

  filter(filter: object) {
    this.json['filter'] = filter
    return this
  }

  columnRatio(columnRatio: number) {
    this.json['columnRatio'] = columnRatio
    return this
  }
}
