import Api from './api.js'
import Schema from './schema.js'
import Action from './action.js'
import Badge from './badge.js'

/**
 * Table
 * @docs https://baidu.github.io/amis/zh-CN/components/table
 */
export default class Table extends Schema<Table> {
  protected json: Record<string, any> = { type: 'table' }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  deferApi(deferApi: string | Record<string, any> | Api) {
    this.json['deferApi'] = deferApi
    return this
  }

  affixHeader(affixHeader: boolean) {
    this.json['affixHeader'] = affixHeader
    return this
  }

  affixFooter(affixFooter: boolean) {
    this.json['affixFooter'] = affixFooter
    return this
  }

  columnsTogglable(columnsTogglable: 'auto' | boolean) {
    this.json['columnsTogglable'] = columnsTogglable
    return this
  }

  showIndex(showIndex: boolean) {
    this.json['showIndex'] = showIndex
    return this
  }

  tableClassName(tableClassName: string) {
    this.json['tableClassName'] = tableClassName
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

  toolbarClassName(toolbarClassName: string) {
    this.json['toolbarClassName'] = toolbarClassName
    return this
  }

  columns(columns: TableColumnItem[] | object[]) {
    this.json['columns'] = columns
    return this
  }

  combineNum(combineNum: number) {
    this.json['combineNum'] = combineNum
    return this
  }

  itemActions(itemActions: Action[]) {
    this.json['itemActions'] = itemActions
    return this
  }

  itemCheckableOn(itemCheckableOn: string) {
    this.json['itemCheckableOn'] = itemCheckableOn
    return this
  }

  itemDraggableOn(itemDraggableOn: string) {
    this.json['itemDraggableOn'] = itemDraggableOn
    return this
  }

  checkOnItemClick(checkOnItemClick: boolean) {
    this.json['checkOnItemClick'] = checkOnItemClick
    return this
  }

  rowClassName(rowClassName: string) {
    this.json['rowClassName'] = rowClassName
    return this
  }

  rowClassNameExpr(rowClassNameExpr: string) {
    this.json['rowClassNameExpr'] = rowClassNameExpr
    return this
  }

  prefixRow(prefixRow: object[]) {
    this.json['prefixRow'] = prefixRow
    return this
  }

  affixRow(affixRow: object[]) {
    this.json['affixRow'] = affixRow
    return this
  }

  itemBadge(itemBadge: Badge) {
    this.json['itemBadge'] = itemBadge
    return this
  }

  autoFillHeight(autoFillHeight: boolean | { height: number } | { maxHeight: number }) {
    this.json['autoFillHeight'] = autoFillHeight
    return this
  }

  resizable(resizable: boolean) {
    this.json['resizable'] = resizable
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

  lazyRenderAfter(lazyRenderAfter: number) {
    this.json['lazyRenderAfter'] = lazyRenderAfter
    return this
  }

  tableLayout(tableLayout: 'auto' | 'fixed') {
    this.json['tableLayout'] = tableLayout
    return this
  }

  reUseRow(reUseRow: false | 'match') {
    this.json['reUseRow'] = reUseRow
    return this
  }

  persistKey(persistKey: string) {
    this.json['persistKey'] = persistKey
    return this
  }
}

export class TableColumnItem extends Schema<TableColumnItem> {
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
}
