import Schema from './schema.js'

/**
 * Tabs
 * @docs https://baidu.github.io/amis/zh-CN/components/tabs
 */
export default class Tabs extends Schema<Tabs> {
  protected json: Record<string, any> = { type: 'tabs' }

  defaultKey(defaultKey: string) {
    this.json['defaultKey'] = defaultKey
    return this
  }

  activeKey(activeKey: string) {
    this.json['activeKey'] = activeKey
    return this
  }

  className(name: string) {
    this.json['className'] = name
    return this
  }

  linksClassName(name: string) {
    this.json['linksClassName'] = name
    return this
  }

  contentClassName(name: string) {
    this.json['contentClassName'] = name
    return this
  }

  tabsMode(
    mode:
      | 'line'
      | 'card'
      | 'radio'
      | 'vertical'
      | 'chrome'
      | 'simple'
      | 'strong'
      | 'tiled'
      | 'sidebar'
  ) {
    this.json['tabsMode'] = mode
    return this
  }

  tabs(tabs: TabItem[]) {
    this.json['tabs'] = tabs
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  toolbar(toolbar: object) {
    this.json['toolbar'] = toolbar
    return this
  }

  toolbarClassName(name: string) {
    this.json['toolbarClassName'] = name
    return this
  }

  mountOnEnter(mountOnEnter: boolean) {
    this.json['mountOnEnter'] = mountOnEnter
    return this
  }

  unmountOnExit(unmountOnExit: boolean) {
    this.json['unmountOnExit'] = unmountOnExit
    return this
  }

  addable(addable: boolean) {
    this.json['addable'] = addable
    return this
  }

  addBtnText(text: string) {
    this.json['addBtnText'] = text
    return this
  }

  closable(closable: boolean) {
    this.json['closable'] = closable
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  showTips(showTips: boolean) {
    this.json['showTips'] = showTips
    return this
  }

  showTipClassName(name: string) {
    this.json['showTipClassName'] = name
    return this
  }

  editable(editable: boolean) {
    this.json['editable'] = editable
    return this
  }

  scrollable(scrollable: boolean) {
    this.json['scrollable'] = scrollable
    return this
  }

  sidePosition(position: 'left' | 'right') {
    this.json['sidePosition'] = position
    return this
  }

  collapseOnExceed(collapseOnExceed: number) {
    this.json['collapseOnExceed'] = collapseOnExceed
    return this
  }

  collapseBtnLabel(label: string) {
    this.json['collapseBtnLabel'] = label
    return this
  }

  swipeable(swipeable: boolean) {
    this.json['swipeable'] = swipeable
    return this
  }
}

export class TabItem extends Schema<TabItem> {
  title(title: object | string) {
    this.json['title'] = title
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  iconPosition(position: 'left' | 'right') {
    this.json['iconPosition'] = position
    return this
  }

  tab(tab: object | string) {
    this.json['tab'] = tab
    return this
  }

  hash(hash: string) {
    this.json['hash'] = hash
    return this
  }

  reload(reload: boolean) {
    this.json['reload'] = reload
    return this
  }

  unmountOnExit(unmountOnExit: boolean) {
    this.json['unmountOnExit'] = unmountOnExit
    return this
  }

  tip(tip: string) {
    this.json['tip'] = tip
    return this
  }

  closable(closable: boolean) {
    this.json['closable'] = closable
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }
}
