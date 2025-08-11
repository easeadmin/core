import Schema from './schema.js'

/**
 * Code
 * @docs https://baidu.github.io/amis/zh-CN/components/code
 */
export default class Code extends Schema<Code> {
  protected json: Record<string, any> = { type: 'code' }

  value(value: string) {
    this.json['value'] = value
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  language(language: string) {
    this.json['language'] = language
    return this
  }

  tabSize(tabSize: number) {
    this.json['tabSize'] = tabSize
    return this
  }

  editorTheme(editorTheme: string) {
    this.json['editorTheme'] = editorTheme
    return this
  }

  wordWrap(wordWrap: string) {
    this.json['wordWrap'] = wordWrap
    return this
  }

  maxHeight(maxHeight: string | number) {
    this.json['maxHeight'] = maxHeight
    return this
  }
}
