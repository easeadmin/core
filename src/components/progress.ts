import Schema from './schema.js'

/**
 * Progress
 * @docs https://baidu.github.io/amis/zh-CN/components/progress
 */
export default class Progress extends Schema<Progress> {
  protected json: Record<string, any> = { type: 'progress' }

  type(type: string) {
    this.json['type'] = type
    return this
  }

  mode(mode: string) {
    this.json['mode'] = mode
    return this
  }

  className(className: string) {
    this.json['className'] = className
    return this
  }

  value(value: string) {
    this.json['value'] = value
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  showLabel(showLabel: boolean) {
    this.json['showLabel'] = showLabel
    return this
  }

  stripe(stripe: boolean) {
    this.json['stripe'] = stripe
    return this
  }

  animate(animate: boolean) {
    this.json['animate'] = animate
    return this
  }

  map(map: string | object) {
    this.json['map'] = map
    return this
  }

  threshold(threshold: { value: string; color?: string } | object) {
    this.json['threshold'] = threshold
    return this
  }

  showThresholdText(showThresholdText: boolean) {
    this.json['showThresholdText'] = showThresholdText
    return this
  }

  valueTpl(valueTpl: string) {
    this.json['valueTpl'] = valueTpl
    return this
  }

  strokeWidth(strokeWidth: number) {
    this.json['strokeWidth'] = strokeWidth
    return this
  }

  gapDegree(gapDegree: number) {
    this.json['gapDegree'] = gapDegree
    return this
  }

  gapPosition(gapPosition: string) {
    this.json['gapPosition'] = gapPosition
    return this
  }
}
