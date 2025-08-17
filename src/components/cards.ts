import Api from './api.js'
import Schema from './schema.js'
import Card from './card.js'

/**
 * Cards
 * @docs https://baidu.github.io/amis/zh-CN/components/cards
 */
export default class Cards extends Schema<Cards> {
  protected json: Record<string, any> = { type: 'cards' }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  headerClassName(headerClassName: string) {
    this.json['headerClassName'] = headerClassName
    return this
  }

  footerClassName(footerClassName: string) {
    this.json['footerClassName'] = footerClassName
    return this
  }

  itemClassName(itemClassName: string) {
    this.json['itemClassName'] = itemClassName
    return this
  }

  card(card: Card) {
    this.json['card'] = card
    return this
  }

  selectable(selectable: boolean) {
    this.json['selectable'] = selectable
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  checkOnItemClick(checkOnItemClick: boolean) {
    this.json['checkOnItemClick'] = checkOnItemClick
    return this
  }
}
