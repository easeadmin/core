import FormItem from './form_item.js'

/**
 * JsonSchemaEditor
 * @docs https://baidu.github.io/amis/zh-CN/components/form/json-schema-editor
 */
export default class JsonSchemaEditor extends FormItem {
  protected json: Record<string, any> = { type: 'json-schema-editor' }

  rootTypeMutable(rootTypeMutable: boolean) {
    this.json['rootTypeMutable'] = rootTypeMutable
    return this
  }

  showRootInfo(showRootInfo: boolean) {
    this.json['showRootInfo'] = showRootInfo
    return this
  }

  disabledTypes(disabledTypes: string[]) {
    this.json['disabledTypes'] = disabledTypes
    return this
  }

  definitions(definitions: object) {
    this.json['definitions'] = definitions
    return this
  }

  mini(mini: boolean) {
    this.json['mini'] = mini
    return this
  }
}
