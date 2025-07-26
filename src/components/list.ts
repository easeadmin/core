import Schema from './schema.js'
import Action from './action.js'
import PopOver from './popover.js'

/**
 * List
 * @docs https://baidu.github.io/amis/zh-CN/components/list
 */
export default class List extends Schema<List> {
  protected json: Record<string, any> = { type: 'list' }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
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

  headerClassName(headerClassName: string) {
    this.json['headerClassName'] = headerClassName
    return this
  }

  footerClassName(footerClassName: string) {
    this.json['footerClassName'] = footerClassName
    return this
  }

  listItem(listItem: ListItem) {
    this.json['listItem'] = listItem
    return this
  }

  showIndexBar(showIndexBar: boolean) {
    this.json['showIndexBar'] = showIndexBar
    return this
  }

  indexField(indexField: string) {
    this.json['indexField'] = indexField
    return this
  }

  indexBarOffset(indexBarOffset: number) {
    this.json['indexBarOffset'] = indexBarOffset
    return this
  }
}

export class ListItem extends Schema<ListItem> {
  title(title: string) {
    this.json['title'] = title
    return this
  }

  titleClassName(titleClassName: string) {
    this.json['titleClassName'] = titleClassName
    return this
  }

  subTitle(subTitle: string) {
    this.json['subTitle'] = subTitle
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

  desc(desc: string) {
    this.json['desc'] = desc
    return this
  }

  body(body: any[]) {
    this.json['body'] = body
    return this
  }

  actions(actions: Action[]) {
    this.json['actions'] = actions
    return this
  }

  actionsPosition(actionsPosition: 'left' | 'right') {
    this.json['actionsPosition'] = actionsPosition
    return this
  }

  popOver(popOver: PopOver) {
    this.json['popOver'] = popOver
    return this
  }
}
