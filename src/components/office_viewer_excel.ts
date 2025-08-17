import Schema from './schema.js'

/**
 * OfficeViewerExcel
 * @docs https://baidu.github.io/amis/zh-CN/components/office-viewer
 */
export default class OfficeViewerExcel extends Schema<OfficeViewerExcel> {
  protected json: Record<string, any> = { type: 'office-viewer-excel' }

  showFormulaBar(showFormulaBar: boolean) {
    this.json['showFormulaBar'] = showFormulaBar
    return this
  }

  showSheetTabBar(showSheetTabBar: boolean) {
    this.json['showSheetTabBar'] = showSheetTabBar
    return this
  }

  fontURL(fontURL: object) {
    this.json['fontURL'] = fontURL
    return this
  }
}
