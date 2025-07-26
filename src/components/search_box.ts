import Schema from './schema.js'

/**
 * SearchBox
 * @docs https://baidu.github.io/amis/zh-CN/components/search-box
 */
export default class SearchBox extends Schema<SearchBox> {
  protected json: Record<string, any> = { type: 'search-box' }

  mini(mini: boolean) {
    this.json['mini'] = mini
    return this
  }

  searchImediately(searchImediately: boolean) {
    this.json['searchImediately'] = searchImediately
    return this
  }

  clearAndSubmit(clearAndSubmit: boolean) {
    this.json['clearAndSubmit'] = clearAndSubmit
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  loading(loading: boolean) {
    this.json['loading'] = loading
    return this
  }
}
