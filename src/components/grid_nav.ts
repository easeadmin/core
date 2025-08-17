import Schema from './schema.js'
import BadgeSchema from './badge.js'
import ActionSchema from './action.js'

/**
 * GridNav
 * @docs https://baidu.github.io/amis/zh-CN/components/grid-nav
 */
export default class GridNav extends Schema<GridNav> {
  protected json: Record<string, any> = { type: 'grid-nav' }

  itemClassName(itemClassName: string) {
    this.json['itemClassName'] = itemClassName
    return this
  }

  contentClassName(contentClassName: string) {
    this.json['contentClassName'] = contentClassName
    return this
  }

  value(value: object[]) {
    this.json['value'] = value
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  square(square: boolean) {
    this.json['square'] = square
    return this
  }

  center(center: boolean) {
    this.json['center'] = center
    return this
  }

  border(border: boolean) {
    this.json['border'] = border
    return this
  }

  gutter(gutter: number) {
    this.json['gutter'] = gutter
    return this
  }

  reverse(reverse: boolean) {
    this.json['reverse'] = reverse
    return this
  }

  iconRatio(iconRatio: number) {
    this.json['iconRatio'] = iconRatio
    return this
  }

  direction(direction: 'horizontal' | 'vertical') {
    this.json['direction'] = direction
    return this
  }

  columnNum(columnNum: number) {
    this.json['columnNum'] = columnNum
    return this
  }

  options(options: GridNavOptionItem[]) {
    this.json['options'] = options
    return this
  }
}

export class GridNavOptionItem extends Schema<GridNavOptionItem> {
  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  text(text: string) {
    this.json['text'] = text
    return this
  }

  badge(badge: BadgeSchema) {
    this.json['badge'] = badge
    return this
  }

  link(link: string) {
    this.json['link'] = link
    return this
  }

  blank(blank: boolean) {
    this.json['blank'] = blank
    return this
  }

  clickAction(clickAction: ActionSchema) {
    this.json['clickAction'] = clickAction
    return this
  }
}
