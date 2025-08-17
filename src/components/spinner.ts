import Schema from './schema.js'

/**
 * Spinner
 * @docs https://baidu.github.io/amis/zh-CN/components/spinner
 */
export default class Spinner extends Schema<Spinner> {
  protected json: Record<string, any> = { type: 'spinner' }

  show(show: boolean) {
    this.json['show'] = show
    return this
  }

  showOn(showOn: string) {
    this.json['showOn'] = showOn
    return this
  }

  spinnerClassName(className: string) {
    this.json['spinnerClassName'] = className
    return this
  }

  spinnerWrapClassName(className: string) {
    this.json['spinnerWrapClassName'] = className
    return this
  }

  size(size: 'sm' | 'lg') {
    this.json['size'] = size
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  tip(tip: string) {
    this.json['tip'] = tip
    return this
  }

  tipPlacement(tipPlacement: 'top' | 'bottom' | 'left' | 'right') {
    this.json['tipPlacement'] = tipPlacement
    return this
  }

  delay(delay: number) {
    this.json['delay'] = delay
    return this
  }

  overlay(overlay: boolean) {
    this.json['overlay'] = overlay
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  loadingConfig(config: { root: string }) {
    this.json['loadingConfig'] = config
    return this
  }
}
