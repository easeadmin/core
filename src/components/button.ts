import Action from './action.js'

/**
 * Button
 * @docs https://baidu.github.io/amis/zh-CN/components/button
 */
export default class Button extends Action {
  protected json: Record<string, any> = { type: 'button' }
  url(url: string) {
    this.json['url'] = url
    return this
  }

  tooltipTrigger(tooltipTrigger: 'hover' | 'focus') {
    this.json['tooltipTrigger'] = tooltipTrigger
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  loading(loading: boolean) {
    this.json['loading'] = loading
    return this
  }

  loadingOn(loadingOn: string) {
    this.json['loadingOn'] = loadingOn
    return this
  }
}
