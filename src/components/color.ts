import Schema from './schema.js'

/**
 * Color
 * @docs https://baidu.github.io/amis/zh-CN/components/color
 */
export default class Color extends Schema<Color> {
  protected json: Record<string, any> = { type: 'color' }

  value(value: string) {
    this.json['value'] = value
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  defaultColor(defaultColor: string) {
    this.json['defaultColor'] = defaultColor
    return this
  }

  showValue(showValue: boolean) {
    this.json['showValue'] = showValue
    return this
  }

  popOverContainerSelector(popOverContainerSelector: string) {
    this.json['popOverContainerSelector'] = popOverContainerSelector
    return this
  }
}
