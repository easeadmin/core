import Schema from './schema.js'

/**
 * Badge
 * @docs https://baidu.github.io/amis/zh-CN/components/badge
 */
export default class Badge extends Schema<Badge> {
  protected json: Record<string, any> = {}

  mode(mode: 'dot' | 'text' | 'ribbon') {
    this.json['mode'] = mode
    return this
  }

  text(text: string | number) {
    this.json['text'] = text
    return this
  }

  size(size: number) {
    this.json['size'] = size
    return this
  }

  level(level: 'info' | 'success' | 'warning' | 'danger') {
    this.json['level'] = level
    return this
  }

  overflowCount(count: number) {
    this.json['overflowCount'] = count
    return this
  }

  position(position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') {
    this.json['position'] = position
    return this
  }

  offset(offset: [number, number]) {
    this.json['offset'] = offset
    return this
  }

  animation(animation: boolean) {
    this.json['animation'] = animation
    return this
  }

  visibleOn(visibleOn: string) {
    this.json['visibleOn'] = visibleOn
    return this
  }
}
