import Api from './api.js'
import FormItem from './form_item.js'
import Schema from './schema.js'

/**
 * Picker
 * @docs https://baidu.github.io/amis/zh-CN/components/form/picker
 */
export default class Picker extends FormItem {
  protected json: Record<string, any> = { type: 'picker' }

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

  modalTitle(modalTitle: string) {
    this.json['modalTitle'] = modalTitle
    return this
  }

  modalMode(modalMode: 'dialog' | 'drawer') {
    this.json['modalMode'] = modalMode
    return this
  }

  modalSize(size: 'sm' | 'md' | 'lg' | 'xl') {
    this.json['modalSize'] = size
    return this
  }

  pickerSchema(pickerSchema: object) {
    this.json['pickerSchema'] = pickerSchema
    return this
  }

  embed(embed: boolean) {
    this.json['embed'] = embed
    return this
  }

  overflowConfig(overflowConfig: OverflowConfig) {
    this.json['overflowConfig'] = overflowConfig
    return this
  }

  itemClearable(itemClearable: boolean) {
    this.json['itemClearable'] = itemClearable
    return this
  }
}

export class OverflowConfig extends Schema<OverflowConfig> {
  maxTagCount(maxTagCount: number) {
    this.json['maxTagCount'] = maxTagCount
    return this
  }

  displayPosition(displayPosition: ['select' | 'crud']) {
    this.json['displayPosition'] = displayPosition
    return this
  }

  overflowTagPopover(overflowTagPopover: object) {
    this.json['overflowTagPopover'] = overflowTagPopover
    return this
  }

  overflowTagPopoverInCRUD(overflowTagPopoverInCRUD: object) {
    this.json['overflowTagPopoverInCRUD'] = overflowTagPopoverInCRUD
    return this
  }
}
