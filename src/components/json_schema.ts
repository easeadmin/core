import FormItem from './form_item.js'

/**
 * JsonSchema
 * @docs https://baidu.github.io/amis/zh-CN/components/form/json-schema
 */
export default class JsonSchema extends FormItem {
  protected json: Record<string, any> = { type: 'json-schema' }

  schema(schema: object | string) {
    this.json['schema'] = schema
    return this
  }
}
