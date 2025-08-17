import FormItem from './form_item.js'

/**
 * InputKv
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-kv
 */
export default class InputKv extends FormItem {
  protected json: Record<string, any> = { type: 'input-kv' }

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

  keySchema(keySchema: FormItem) {
    this.json['keySchema'] = keySchema
    return this
  }

  valueSchema(valueSchema: FormItem) {
    this.json['valueSchema'] = valueSchema
    return this
  }
}
