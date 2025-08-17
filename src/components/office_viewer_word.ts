import Schema from './schema.js'

/**
 * OfficeViewerWord
 * @docs https://baidu.github.io/amis/zh-CN/components/office-viewer
 */
export default class OfficeViewerWord extends Schema<OfficeViewerWord> {
  protected json: Record<string, any> = { type: 'office-viewer-word' }

  src(src: any) {
    // Api 类型需根据项目实际定义调整
    this.json['src'] = src
    return this
  }

  loading(loading: boolean) {
    this.json['loading'] = loading
    return this
  }

  enableVar(enableVar: boolean) {
    this.json['enableVar'] = enableVar
    return this
  }

  wordOptions(wordOptions: object) {
    this.json['wordOptions'] = wordOptions
    return this
  }
}
