import Schema from './schema.js'

/**
 * Log
 * @docs https://baidu.github.io/amis/zh-CN/components/log
 */
export default class Log extends Schema<Log> {
  protected json: Record<string, any> = { type: 'log' }

  height(height: number) {
    this.json['height'] = height
    return this
  }

  autoScroll(autoScroll: boolean) {
    this.json['autoScroll'] = autoScroll
    return this
  }

  disableColor(disableColor: boolean) {
    this.json['disableColor'] = disableColor
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  encoding(encoding: string) {
    this.json['encoding'] = encoding
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  credentials(credentials: string) {
    this.json['credentials'] = credentials
    return this
  }

  rowHeight(rowHeight: number) {
    this.json['rowHeight'] = rowHeight
    return this
  }

  maxLength(maxLength: number) {
    this.json['maxLength'] = maxLength
    return this
  }

  operation(operation: any[]) {
    this.json['operation'] = operation
    return this
  }
}
