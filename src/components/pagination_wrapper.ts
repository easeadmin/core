import Schema from './schema.js'

/**
 * PaginationWrapper
 * @docs https://baidu.github.io/amis/zh-CN/components/pagination-wrapper
 */
export default class PaginationWrapper extends Schema<PaginationWrapper> {
  protected json: Record<string, any> = { type: 'pagination-wrapper' }

  showPageInput(showPageInput: boolean) {
    this.json['showPageInput'] = showPageInput
    return this
  }

  maxButtons(maxButtons: number) {
    this.json['maxButtons'] = maxButtons
    return this
  }

  inputName(inputName: string) {
    this.json['inputName'] = inputName
    return this
  }

  outputName(outputName: string) {
    this.json['outputName'] = outputName
    return this
  }

  perPage(perPage: number) {
    this.json['perPage'] = perPage
    return this
  }

  position(position: 'top' | 'bottom' | 'none') {
    this.json['position'] = position
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }
}
