import Schema from './schema.js'

/**
 * Pagination
 * @docs https://baidu.github.io/amis/zh-CN/components/pagination
 */
export default class Pagination extends Schema<Pagination> {
  protected json: Record<string, any> = { type: 'pagination' }

  mode(mode: 'normal' | 'simple') {
    this.json['mode'] = mode
    return this
  }

  layout(layout: string | string[]) {
    this.json['layout'] = layout
    return this
  }

  maxButtons(maxButtons: number) {
    this.json['maxButtons'] = maxButtons
    return this
  }

  total(total: number) {
    this.json['total'] = total
    return this
  }

  activePage(activePage: number) {
    this.json['activePage'] = activePage
    return this
  }

  perPage(perPage: number) {
    this.json['perPage'] = perPage
    return this
  }

  showPerPage(showPerPage: boolean) {
    this.json['showPerPage'] = showPerPage
    return this
  }

  size(size: 'sm' | 'md') {
    this.json['size'] = size
    return this
  }

  ellipsisPageGap(ellipsisPageGap: boolean) {
    this.json['ellipsisPageGap'] = ellipsisPageGap
    return this
  }

  perPageAvailable(perPageAvailable: number[]) {
    this.json['perPageAvailable'] = perPageAvailable
    return this
  }

  showPageInput(showPageInput: boolean) {
    this.json['showPageInput'] = showPageInput
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  enable(enable: boolean) {
    this.json['enable'] = enable
    return this
  }

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }
}
