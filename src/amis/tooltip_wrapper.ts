import Schema from './schema.js'

/**
 * TooltipWrapper
 * @docs https://baidu.github.io/amis/zh-CN/components/tooltip-wrapper
 */
export default class TooltipWrapper extends Schema<TooltipWrapper> {
  protected json: Record<string, any> = { type: 'tooltip-wrapper' }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  content(content: string) {
    this.json['content'] = content
    return this
  }

  placement(placement: 'top' | 'bottom' | 'left' | 'right') {
    this.json['placement'] = placement
    return this
  }

  tooltipTheme(tooltipTheme: 'light' | 'dark') {
    this.json['tooltipTheme'] = tooltipTheme
    return this
  }

  offset(offset: number[]) {
    this.json['offset'] = offset
    return this
  }

  showArrow(showArrow: boolean) {
    this.json['showArrow'] = showArrow
    return this
  }

  enterable(enterable: boolean) {
    this.json['enterable'] = enterable
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  trigger(trigger: string) {
    this.json['trigger'] = trigger
    return this
  }

  mouseEnterDelay(delay: number) {
    this.json['mouseEnterDelay'] = delay
    return this
  }

  mouseLeaveDelay(delay: number) {
    this.json['mouseLeaveDelay'] = delay
    return this
  }

  rootClose(rootClose: boolean) {
    this.json['rootClose'] = rootClose
    return this
  }

  inline(inline: boolean) {
    this.json['inline'] = inline
    return this
  }

  wrapperComponent(wrapperComponent: string) {
    this.json['wrapperComponent'] = wrapperComponent
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  tooltipStyle(tooltipStyle: Record<string, string>) {
    this.json['tooltipStyle'] = tooltipStyle
    return this
  }

  tooltipClassName(tooltipClassName: string) {
    this.json['tooltipClassName'] = tooltipClassName
    return this
  }

  tooltipArrowClassName(tooltipArrowClassName: string) {
    this.json['tooltipArrowClassName'] = tooltipArrowClassName
    return this
  }
}
