import Schema from './schema.js'

/**
 * Portlet
 * @docs https://baidu.github.io/amis/zh-CN/components/portlet
 */
export default class Portlet extends Schema<Portlet> {
  protected json: Record<string, any> = { type: 'portlet' }

  tabsClassName(name: string) {
    this.json['tabsClassName'] = name
    return this
  }

  contentClassName(name: string) {
    this.json['contentClassName'] = name
    return this
  }

  tabs(tabs: TabItem[]) {
    this.json['tabs'] = tabs
    return this
  }

  source(source: object) {
    this.json['source'] = source
    return this
  }

  toolbar(toolbar: object) {
    this.json['toolbar'] = toolbar
    return this
  }

  description(description: object) {
    this.json['description'] = description
    return this
  }

  hideHeader(hideHeader: boolean) {
    this.json['hideHeader'] = hideHeader
    return this
  }

  divider(divider: boolean) {
    this.json['divider'] = divider
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

  scrollable(scrollable: boolean) {
    this.json['scrollable'] = scrollable
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

  tab(tab: object | string) {
    this.json['tab'] = tab
    return this
  }

  toolbars(toolbars: object[]) {
    this.json['toolbars'] = toolbars
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
}
