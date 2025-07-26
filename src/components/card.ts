import Schema from './schema.js'
import Action from './action.js'

/**
 * Card
 * @docs https://baidu.github.io/amis/zh-CN/components/card
 */
export default class Card extends Schema<Card> {
  protected json: Record<string, any> = { type: 'card' }

  type(type: string) {
    this.json['type'] = type
    return this
  }

  href(href: string) {
    this.json['href'] = href
    return this
  }

  header(header: Header) {
    this.json['header'] = header
    return this
  }

  body(body: any[]) {
    this.json['body'] = body
    return this
  }

  bodyClassName(bodyClassName: string) {
    this.json['bodyClassName'] = bodyClassName
    return this
  }

  actions(actions: object[]) {
    this.json['actions'] = actions
    return this
  }

  actionsCount(actionsCount: number) {
    this.json['actionsCount'] = actionsCount
    return this
  }

  itemAction(itemAction: Action) {
    this.json['itemAction'] = itemAction
    return this
  }

  media(media: Media) {
    this.json['media'] = media
    return this
  }

  secondary(secondary: string) {
    this.json['secondary'] = secondary
    return this
  }

  toolbar(toolbar: object[]) {
    this.json['toolbar'] = toolbar
    return this
  }

  dragging(dragging: boolean) {
    this.json['dragging'] = dragging
    return this
  }

  selectable(selectable: boolean) {
    this.json['selectable'] = selectable
    return this
  }

  checkable(checkable: boolean) {
    this.json['checkable'] = checkable
    return this
  }

  selected(selected: boolean) {
    this.json['selected'] = selected
    return this
  }

  hideCheckToggler(hideCheckToggler: boolean) {
    this.json['hideCheckToggler'] = hideCheckToggler
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  useCardLabel(useCardLabel: boolean) {
    this.json['useCardLabel'] = useCardLabel
    return this
  }
}

export class Media extends Schema<Media> {
  type(type: 'image' | 'video') {
    this.json['type'] = type
    return this
  }
  url(url: string) {
    this.json['url'] = url
    return this
  }
  position(position: 'left' | 'right' | 'top' | 'bottom') {
    this.json['position'] = position
    return this
  }
  isLive(isLive: boolean) {
    this.json['isLive'] = isLive
    return this
  }
  autoPlay(autoPlay: boolean) {
    this.json['autoPlay'] = autoPlay
    return this
  }
  poster(poster: string) {
    this.json['poster'] = poster
    return this
  }
}

export class Header extends Schema<Header> {
  title(title: string) {
    this.json['title'] = title
    return this
  }

  titleClassName(titleClassName: string) {
    this.json['titleClassName'] = titleClassName
    return this
  }

  subTitle(subTitle: string | object) {
    this.json['subTitle'] = subTitle
    return this
  }

  subTitleClassName(subTitleClassName: string) {
    this.json['subTitleClassName'] = subTitleClassName
    return this
  }

  subTitlePlaceholder(subTitlePlaceholder: string) {
    this.json['subTitlePlaceholder'] = subTitlePlaceholder
    return this
  }

  description(description: string) {
    this.json['description'] = description
    return this
  }

  descriptionClassName(descriptionClassName: string) {
    this.json['descriptionClassName'] = descriptionClassName
    return this
  }

  descriptionPlaceholder(descriptionPlaceholder: string) {
    this.json['descriptionPlaceholder'] = descriptionPlaceholder
    return this
  }

  avatar(avatar: string) {
    this.json['avatar'] = avatar
    return this
  }

  avatarClassName(avatarClassName: string) {
    this.json['avatarClassName'] = avatarClassName
    return this
  }

  imageClassName(imageClassName: string) {
    this.json['imageClassName'] = imageClassName
    return this
  }

  avatarText(avatarText: string) {
    this.json['avatarText'] = avatarText
    return this
  }

  avatarTextBackground(avatarTextBackground: string[]) {
    this.json['avatarTextBackground'] = avatarTextBackground
    return this
  }

  avatarTextClassName(avatarTextClassName: string) {
    this.json['avatarTextClassName'] = avatarTextClassName
    return this
  }

  highlight(highlight: boolean) {
    this.json['highlight'] = highlight
    return this
  }

  highlightClassName(highlightClassName: string) {
    this.json['highlightClassName'] = highlightClassName
    return this
  }

  href(href: string) {
    this.json['href'] = href
    return this
  }

  blank(blank: boolean) {
    this.json['blank'] = blank
    return this
  }
}
