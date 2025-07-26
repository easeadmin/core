import FormItem from './form_item.js'

/**
 * InputGroup
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-group
 */
export default class InputGroup extends FormItem {
  protected json: Record<string, any> = { type: 'input-group' }

  body(body: FormItem[]) {
    this.json['body'] = body
    return this
  }

  validationConfig(validationConfig: object) {
    this.json['validationConfig'] = validationConfig
    return this
  }

  errorMode(errorMode: 'full' | 'partial') {
    this.json['errorMode'] = errorMode
    return this
  }

  delimiter(delimiter: string) {
    this.json['delimiter'] = delimiter
    return this
  }
}
