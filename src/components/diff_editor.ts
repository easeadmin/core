import FormItem from './form_item.js'

/**
 * DiffEditor
 * @docs https://baidu.github.io/amis/zh-CN/components/form/diff-editor
 */
export default class DiffEditor extends FormItem {
  protected json: Record<string, any> = { type: 'diff-editor' }

  language(language: string) {
    this.json['language'] = language
    return this
  }

  diffValue(diffValue: string) {
    this.json['diffValue'] = diffValue
    return this
  }
}
