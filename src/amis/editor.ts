import FormItem from './form_item.js'

/**
 * Editor
 * @docs https://baidu.github.io/amis/zh-CN/components/form/editor
 */
export default class Editor extends FormItem {
  protected json: Record<string, any> = { type: 'editor' }

  language(language: string) {
    this.json['language'] = language
    return this
  }

  size(size: 'md' | 'lg' | 'xl' | 'xxl') {
    this.json['size'] = size
    return this
  }

  allowFullscreen(allowFullscreen: boolean) {
    this.json['allowFullscreen'] = allowFullscreen
    return this
  }

  options(options: object) {
    this.json['options'] = options
    return this
  }
}
