import FormItem from './form_item.js'

/**
 * InputKvs
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-kvs
 */
export default class InputKvs extends FormItem {
  protected json: Record<string, any> = { type: 'input-kvs' }

  valueType(valueType: string) {
    this.json['valueType'] = valueType
    return this
  }

  keyPlaceholder(keyPlaceholder: string) {
    this.json['keyPlaceholder'] = keyPlaceholder
    return this
  }

  valuePlaceholder(valuePlaceholder: string) {
    this.json['valuePlaceholder'] = valuePlaceholder
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  defaultValue(defaultValue: string) {
    this.json['defaultValue'] = defaultValue
    return this
  }

  autoParseJSON(autoParseJSON: boolean) {
    this.json['autoParseJSON'] = autoParseJSON
    return this
  }

  keyItem(keySchema: FormItem) {
    this.json['keyItem'] = keySchema
    return this
  }

  valueItems(valueSchema: FormItem[]) {
    this.json['valueItems'] = valueSchema
    return this
  }
}
