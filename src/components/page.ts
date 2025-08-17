import Schema from './schema.js'
import Remark from './remark.js'
import Api from './api.js'

/**
 * Page
 * @docs https://baidu.github.io/amis/zh-CN/components/page
 */
export default class Page extends Schema<Page> {
  protected json: Record<string, any> = { type: 'page' }

  title(title: object) {
    this.json['title'] = title
    return this
  }

  subTitle(subTitle: object) {
    this.json['subTitle'] = subTitle
    return this
  }

  remark(remark: Remark) {
    this.json['remark'] = remark
    return this
  }

  aside(aside: object) {
    this.json['aside'] = aside
    return this
  }

  asideResizor(asideResizor: boolean) {
    this.json['asideResizor'] = asideResizor
    return this
  }

  asideMinWidth(asideMinWidth: number) {
    this.json['asideMinWidth'] = asideMinWidth
    return this
  }

  asideMaxWidth(asideMaxWidth: number) {
    this.json['asideMaxWidth'] = asideMaxWidth
    return this
  }

  asideSticky(asideSticky: boolean) {
    this.json['asideSticky'] = asideSticky
    return this
  }

  asidePosition(asidePosition: 'left' | 'right') {
    this.json['asidePosition'] = asidePosition
    return this
  }

  toolbar(toolbar: object) {
    this.json['toolbar'] = toolbar
    return this
  }

  body(body: object | string) {
    this.json['body'] = body
    return this
  }

  cssVars(vars: Record<string, string>) {
    this.json['cssVars'] = vars
    return this
  }

  toolbarClassName(name: string) {
    this.json['toolbarClassName'] = name
    return this
  }

  bodyClassName(name: string) {
    this.json['bodyClassName'] = name
    return this
  }

  asideClassName(name: string) {
    this.json['asideClassName'] = name
    return this
  }

  headerClassName(name: string) {
    this.json['headerClassName'] = name
    return this
  }

  initApi(api: string | Record<string, any> | Api) {
    this.json['initApi'] = api
    return this
  }

  initFetch(fetch: boolean) {
    this.json['initFetch'] = fetch
    return this
  }

  initFetchOn(fetchOn: string) {
    this.json['initFetchOn'] = fetchOn
    return this
  }

  interval(interval: number) {
    this.json['interval'] = interval
    return this
  }

  silentPolling(silentPolling: boolean) {
    this.json['silentPolling'] = silentPolling
    return this
  }

  stopAutoRefreshWhen(stopAutoRefreshWhen: string) {
    this.json['stopAutoRefreshWhen'] = stopAutoRefreshWhen
    return this
  }

  pullRefresh(pullRefresh: boolean) {
    this.json['pullRefresh'] = { disabled: !pullRefresh }
    return this
  }

  css(style: Record<string, object>) {
    this.json['css'] = style
    return this
  }

  mobileCSS(style: Record<string, object>) {
    this.json['css'] = style
    return this
  }

  data(data: Record<string, any>) {
    this.json['data'] = data
    return this
  }
}
