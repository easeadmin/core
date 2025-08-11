import Schema from './schema.js'
import Api from './api.js'

/**
 * App
 * @docs https://baidu.github.io/amis/zh-CN/components/app
 */
export default class App extends Schema<App> {
  protected json: Record<string, any> = { type: 'app' }

  api(api: string | Record<string, any> | Api) {
    this.json['api'] = api
    return this
  }

  brandName(name: string) {
    this.json['brandName'] = name
    return this
  }

  logo(logo: string) {
    this.json['logo'] = logo
    return this
  }

  header(header: object) {
    this.json['header'] = header
    return this
  }

  asideBefore(header: object) {
    this.json['asideBefore'] = header
    return this
  }

  asideAfter(header: object) {
    this.json['asideAfter'] = header
    return this
  }

  footer(footer: object) {
    this.json['footer'] = footer
    return this
  }

  pages(pages: AppItem[] | object[]) {
    this.json['pages'] = pages
    return this
  }
}

export class AppItem extends Schema<AppItem> {
  label(label: string) {
    this.json['label'] = label
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  url(url: string) {
    this.json['url'] = url
    return this
  }

  schema(schema: object) {
    this.json['schema'] = schema
    return this
  }

  schemaApi(schemaApi: string | Record<string, any> | Api) {
    this.json['schemaApi'] = schemaApi
    return this
  }

  link(link: string) {
    this.json['link'] = link
    return this
  }

  redirect(redirect: string) {
    this.json['redirect'] = redirect
    return this
  }

  rewrite(rewrite: boolean) {
    this.json['rewrite'] = rewrite
    return this
  }

  isDefaultPage(isDefaultPage: boolean) {
    this.json['isDefaultPage'] = isDefaultPage
    return this
  }

  children(children: AppItem[]) {
    this.json['children'] = children
    return this
  }

  visible(visible: boolean) {
    this.json['visible'] = visible
    return this
  }
}
