import Api from './api.js'
import Form from './form.js'
import Schema from './schema.js'
import Table from './table.js'

/**
 * Crud
 * @docs https://baidu.github.io/amis/zh-CN/components/crud
 */
export default class Crud extends Table {
  protected json: Record<string, any> = { type: 'crud' }

  mode(mode: 'table' | 'cards' | 'list') {
    this.json['mode'] = mode
    return this
  }

  api(api: string | Record<string, any> | Api) {
    this.json['api'] = api
    return this
  }

  loadDataOnce(loadDataOnce: boolean) {
    this.json['loadDataOnce'] = loadDataOnce
    return this
  }

  loadDataOnceFetchOnFilter(loadDataOnceFetchOnFilter: boolean) {
    this.json['loadDataOnceFetchOnFilter'] = loadDataOnceFetchOnFilter
    return this
  }

  filter(filter: Form | object) {
    this.json['filter'] = filter
    return this
  }

  filterTogglable(filterTogglable: FilterToggleItem | boolean) {
    this.json['filterTogglable'] = filterTogglable
    return this
  }

  filterDefaultVisible(filterDefaultVisible: boolean) {
    this.json['filterDefaultVisible'] = filterDefaultVisible
    return this
  }

  initFetch(initFetch: boolean) {
    this.json['initFetch'] = initFetch
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

  stopAutoRefreshWhenModalIsOpen(stopAutoRefreshWhenModalIsOpen: boolean) {
    this.json['stopAutoRefreshWhenModalIsOpen'] = stopAutoRefreshWhenModalIsOpen
    return this
  }

  syncLocation(syncLocation: boolean) {
    this.json['syncLocation'] = syncLocation
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  saveOrderApi(saveOrderApi: string | Record<string, any> | Api) {
    this.json['saveOrderApi'] = saveOrderApi
    return this
  }

  bulkActions(bulkActions: object[]) {
    this.json['bulkActions'] = bulkActions
    return this
  }

  messages(messages: MessageItem) {
    this.json['messages'] = messages
    return this
  }

  primaryField(primaryField: string) {
    this.json['primaryField'] = primaryField
    return this
  }

  perPage(perPage: number) {
    this.json['perPage'] = perPage
    return this
  }

  orderBy(orderBy: string) {
    this.json['orderBy'] = orderBy
    return this
  }

  orderDir(orderDir: 'asc' | 'desc') {
    this.json['orderDir'] = orderDir
    return this
  }

  defaultParams(defaultParams: object) {
    this.json['defaultParams'] = defaultParams
    return this
  }

  pageField(pageField: string) {
    this.json['pageField'] = pageField
    return this
  }

  perPageField(perPageField: string) {
    this.json['perPageField'] = perPageField
    return this
  }

  totalField(totalField: string) {
    this.json['totalField'] = totalField
    return this
  }

  pageDirectionField(pageDirectionField: string) {
    this.json['pageDirectionField'] = pageDirectionField
    return this
  }

  perPageAvailable(perPageAvailable: number[]) {
    this.json['perPageAvailable'] = perPageAvailable
    return this
  }

  orderField(orderField: string) {
    this.json['orderField'] = orderField
    return this
  }

  hideQuickSaveBtn(hideQuickSaveBtn: boolean) {
    this.json['hideQuickSaveBtn'] = hideQuickSaveBtn
    return this
  }

  autoJumpToTopOnPagerChange(autoJumpToTopOnPagerChange: boolean) {
    this.json['autoJumpToTopOnPagerChange'] = autoJumpToTopOnPagerChange
    return this
  }

  syncResponse2Query(syncResponse2Query: boolean) {
    this.json['syncResponse2Query'] = syncResponse2Query
    return this
  }

  keepItemSelectionOnPageChange(keepItemSelectionOnPageChange: boolean) {
    this.json['keepItemSelectionOnPageChange'] = keepItemSelectionOnPageChange
    return this
  }

  labelTpl(labelTpl: string) {
    this.json['labelTpl'] = labelTpl
    return this
  }

  maxKeepItemSelectionLength(maxKeepItemSelectionLength: number) {
    this.json['maxKeepItemSelectionLength'] = maxKeepItemSelectionLength
    return this
  }

  maxItemSelectionLength(maxItemSelectionLength: number) {
    this.json['maxItemSelectionLength'] = maxItemSelectionLength
    return this
  }

  headerToolbar(headerToolbar: any[]) {
    this.json['headerToolbar'] = headerToolbar
    return this
  }

  footerToolbar(footerToolbar: any[]) {
    this.json['footerToolbar'] = footerToolbar
    return this
  }

  alwaysShowPagination(alwaysShowPagination: boolean) {
    this.json['alwaysShowPagination'] = alwaysShowPagination
    return this
  }

  autoGenerateFilter(autoGenerateFilter: object | boolean) {
    this.json['autoGenerateFilter'] = autoGenerateFilter
    return this
  }

  resetPageAfterAjaxItemAction(resetPageAfterAjaxItemAction: boolean) {
    this.json['resetPageAfterAjaxItemAction'] = resetPageAfterAjaxItemAction
    return this
  }

  canAccessSuperData(canAccessSuperData: boolean) {
    this.json['canAccessSuperData'] = canAccessSuperData
    return this
  }

  matchFunc(matchFunc: string) {
    this.json['matchFunc'] = matchFunc
    return this
  }

  parsePrimitiveQuery(parsePrimitiveQuery: boolean | object) {
    this.json['parsePrimitiveQuery'] = parsePrimitiveQuery
    return this
  }

  columns(columns: ColumnItem[] | object[]) {
    this.json['columns'] = columns
    return this
  }
}

export class MessageItem extends Schema<MessageItem> {
  fetchFailed(fetchFailed: string) {
    this.json['fetchFailed'] = fetchFailed
    return this
  }
  saveOrderFailed(saveOrderFailed: string) {
    this.json['saveOrderFailed'] = saveOrderFailed
    return this
  }
  saveOrderSuccess(saveOrderSuccess: string) {
    this.json['saveOrderSuccess'] = saveOrderSuccess
    return this
  }
  quickSaveFailed(quickSaveFailed: string) {
    this.json['quickSaveFailed'] = quickSaveFailed
    return this
  }
  quickSaveSuccess(quickSaveSuccess: string) {
    this.json['quickSaveSuccess'] = quickSaveSuccess
    return this
  }
}

export class FilterToggleItem extends Schema<FilterToggleItem> {
  label(label: string) {
    this.json['label'] = label
    return this
  }
  icon(icon: string) {
    this.json['icon'] = icon
    return this
  }
  activeLabel(activeLabel: string) {
    this.json['activeLabel'] = activeLabel
    return this
  }
  activeIcon(activeIcon: string) {
    this.json['activeIcon'] = activeIcon
    return this
  }
}

export class ColumnItem extends Schema<ColumnItem> {
  sortable(sortable: boolean) {
    this.json['sortable'] = sortable
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }

  filterable(filterable: boolean | QuickFilterConfig) {
    this.json['filterable'] = filterable
    return this
  }

  quickEdit(quickEdit: boolean | QuickEditConfig) {
    this.json['quickEdit'] = quickEdit
    return this
  }

  quickEditEnabledOn(quickEditEnabledOn: string) {
    this.json['quickEditEnabledOn'] = quickEditEnabledOn
    return this
  }

  label(label: string) {
    this.json['label'] = label
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  width(width: number | string) {
    this.json['width'] = width
    return this
  }

  remark(remark: object) {
    this.json['remark'] = remark
    return this
  }

  fixed(fixed: 'left' | 'right' | 'none') {
    this.json['fixed'] = fixed
    return this
  }

  popOver(popOver: object) {
    this.json['popOver'] = popOver
    return this
  }

  copyable(copyable: boolean | { icon: string; content: string }) {
    this.json['copyable'] = copyable
    return this
  }

  innerStyle(innerStyle: object) {
    this.json['innerStyle'] = innerStyle
    return this
  }

  align(align: 'left' | 'right' | 'center' | 'justify') {
    this.json['align'] = align
    return this
  }

  headerAlign(headerAlign: 'left' | 'right' | 'center' | 'justify') {
    this.json['headerAlign'] = headerAlign
    return this
  }

  vAlign(vAlign: 'top' | 'middle' | 'bottom') {
    this.json['vAlign'] = vAlign
    return this
  }

  textOverflow(textOverflow: string) {
    this.json['textOverflow'] = textOverflow
    return this
  }

  buttons(buttons: object[]) {
    this.json['buttons'] = buttons
    return this
  }
}

export class QuickFilterConfig extends Schema<QuickFilterConfig> {
  options(options: any[]) {
    this.json['options'] = options
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  refreshOnOpen(refreshOnOpen: boolean) {
    this.json['refreshOnOpen'] = refreshOnOpen
    return this
  }

  strictMode(strictMode: boolean) {
    this.json['strictMode'] = strictMode
    return this
  }
}

export class QuickEditConfig extends Schema<QuickEditConfig> {
  body(body: object) {
    this.json['body'] = body
    return this
  }

  mode(mode: 'popOver' | 'inline') {
    this.json['mode'] = mode
    return this
  }

  icon(icon: string) {
    this.json['icon'] = icon
    return this
  }

  saveImmediately(saveImmediately: boolean | object) {
    this.json['saveImmediately'] = saveImmediately
    return this
  }

  resetOnFailed(resetOnFailed: boolean | object) {
    this.json['resetOnFailed'] = resetOnFailed
    return this
  }
}
