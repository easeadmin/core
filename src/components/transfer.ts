import FormItem from './form_item.js'
import Pagination from './pagination.js'
import Api from './api.js'

/**
 * Transfer
 * @docs https://baidu.github.io/amis/zh-CN/components/form/transfer
 */
export default class Transfer extends FormItem {
  protected json: Record<string, any> = { type: 'transfer' }

  options(options: object[] | string[]) {
    this.json['options'] = options
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  delimeter(delimeter: string) {
    this.json['delimeter'] = delimeter
    return this
  }

  joinValues(joinValues: boolean) {
    this.json['joinValues'] = joinValues
    return this
  }

  extractValue(extractValue: boolean) {
    this.json['extractValue'] = extractValue
    return this
  }

  searchApi(searchApi: string | Record<string, any> | Api) {
    this.json['searchApi'] = searchApi
    return this
  }

  resultListModeFollowSelect(resultListModeFollowSelect: boolean) {
    this.json['resultListModeFollowSelect'] = resultListModeFollowSelect
    return this
  }

  statistics(statistics: boolean) {
    this.json['statistics'] = statistics
    return this
  }

  selectTitle(selectTitle: string) {
    this.json['selectTitle'] = selectTitle
    return this
  }

  resultTitle(resultTitle: string) {
    this.json['resultTitle'] = resultTitle
    return this
  }

  sortable(sortable: boolean) {
    this.json['sortable'] = sortable
    return this
  }

  selectMode(selectMode: string) {
    this.json['selectMode'] = selectMode
    return this
  }

  searchResultMode(searchResultMode: string) {
    this.json['searchResultMode'] = searchResultMode
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }

  searchPlaceholder(searchPlaceholder: string) {
    this.json['searchPlaceholder'] = searchPlaceholder
    return this
  }

  columns(columns: object[]) {
    this.json['columns'] = columns
    return this
  }

  leftOptions(leftOptions: object[]) {
    this.json['leftOptions'] = leftOptions
    return this
  }

  leftMode(leftMode: string) {
    this.json['leftMode'] = leftMode
    return this
  }

  rightMode(rightMode: string) {
    this.json['rightMode'] = rightMode
    return this
  }

  resultSearchable(resultSearchable: boolean) {
    this.json['resultSearchable'] = resultSearchable
    return this
  }

  resultSearchPlaceholder(resultSearchPlaceholder: string) {
    this.json['resultSearchPlaceholder'] = resultSearchPlaceholder
    return this
  }

  menuTpl(menuTpl: string | object) {
    this.json['menuTpl'] = menuTpl
    return this
  }

  valueTpl(valueTpl: string | object) {
    this.json['valueTpl'] = valueTpl
    return this
  }

  itemHeight(itemHeight: number) {
    this.json['itemHeight'] = itemHeight
    return this
  }

  virtualThreshold(virtualThreshold: number) {
    this.json['virtualThreshold'] = virtualThreshold
    return this
  }

  pagination(pagination: Pagination) {
    this.json['pagination'] = pagination
    return this
  }
}
