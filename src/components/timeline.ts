import Api from './api.js'
import Schema from './schema.js'

/**
 * Timeline
 * @docs https://baidu.github.io/amis/zh-CN/components/timeline
 */
export default class Timeline extends Schema<Timeline> {
  protected json: Record<string, any> = { type: 'timeline' }

  items(items: TimelineItem[]) {
    this.json['items'] = items
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  mode(mode: 'left' | 'right' | 'alternate' | 'top' | 'bottom') {
    this.json['mode'] = mode
    return this
  }

  direction(direction: 'vertical' | 'horizontal') {
    this.json['direction'] = direction
    return this
  }

  reverse(reverse: boolean) {
    this.json['reverse'] = reverse
    return this
  }

  iconClassName(iconClassName: string) {
    this.json['iconClassName'] = iconClassName
    return this
  }

  timeClassName(timeClassName: string) {
    this.json['timeClassName'] = timeClassName
    return this
  }

  titleClassName(titleClassName: string) {
    this.json['titleClassName'] = titleClassName
    return this
  }

  detailClassName(detailClassName: string) {
    this.json['detailClassName'] = detailClassName
    return this
  }

  cardSchema(cardSchema: string) {
    this.json['cardSchema'] = cardSchema
    return this
  }
}

export class TimelineItem extends Schema<TimelineItem> {
  time(time: string) {
    this.json['time'] = time
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  detail(detail: string) {
    this.json['detail'] = detail
    return this
  }

  detailCollapsedText(detailCollapsedText: string) {
    this.json['detailCollapsedText'] = detailCollapsedText
    return this
  }

  detailExpandedText(detailExpandedText: string) {
    this.json['detailExpandedText'] = detailExpandedText
    return this
  }

  color(color: string) {
    this.json['color'] = color
    return this
  }

  backgroundColor(backgroundColor: string) {
    this.json['backgroundColor'] = backgroundColor
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  iconClassName(iconClassName: string) {
    this.json['iconClassName'] = iconClassName
    return this
  }

  timeClassName(timeClassName: string) {
    this.json['timeClassName'] = timeClassName
    return this
  }

  titleClassName(titleClassName: string) {
    this.json['titleClassName'] = titleClassName
    return this
  }

  detailClassName(detailClassName: string) {
    this.json['detailClassName'] = detailClassName
    return this
  }

  dotSize(dotSize: 'sm' | 'md' | 'lg' | 'xl') {
    this.json['dotSize'] = dotSize
    return this
  }

  lineColor(lineColor: string) {
    this.json['lineColor'] = lineColor
    return this
  }

  hideDot(hideDot: boolean) {
    this.json['hideDot'] = hideDot
    return this
  }

  align(align: 'left' | 'right' | 'alternate' | 'top' | 'bottom') {
    this.json['align'] = align
    return this
  }

  cardSchema(cardSchema: object) {
    this.json['cardSchema'] = cardSchema
    return this
  }
}
