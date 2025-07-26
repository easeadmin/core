import Schema from './schema.js'

/**
 * Divider
 * @docs https://baidu.github.io/amis/zh-CN/components/divider
 */
export default class Divider extends Schema<Divider> {
  protected json: Record<string, any> = { type: 'divider' }

  lineStyle(lineStyle: 'dashed' | 'solid') {
    this.json['lineStyle'] = lineStyle
    return this
  }

  direction(direction: 'horizontal' | 'vertical') {
    this.json['direction'] = direction
    return this
  }

  color(color: string) {
    this.json['color'] = color
    return this
  }

  rotate(rotate: number) {
    this.json['rotate'] = rotate
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  titleClassName(titleClassName: string) {
    this.json['titleClassName'] = titleClassName
    return this
  }

  titlePosition(titlePosition: 'left' | 'right' | 'center') {
    this.json['titlePosition'] = titlePosition
    return this
  }
}
