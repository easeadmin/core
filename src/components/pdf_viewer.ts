import Schema from './schema.js'

/**
 * PDFViewer
 * @docs https://baidu.github.io/amis/zh-CN/components/pdf-viewer
 */
export default class PDFViewer extends Schema<PDFViewer> {
  protected json: Record<string, any> = { type: 'pdf-viewer' }

  src(src: any) {
    this.json['src'] = src
    return this
  }

  width(width: number) {
    this.json['width'] = width
    return this
  }

  height(height: number) {
    this.json['height'] = height
    return this
  }

  background(background: string) {
    this.json['background'] = background
    return this
  }
}
