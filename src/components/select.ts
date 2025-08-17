import FormItem from './form_item.js'
import Options from './options.js'
import Api from './api.js'

/**
 * Select
 * @docs https://baidu.github.io/amis/zh-CN/components/form/select
 */
export default class Select extends Options {
  protected json: Record<string, any> = { type: 'select' }

  autoComplete(autoComplete: string | Record<string, any> | Api) {
    this.json['autoComplete'] = autoComplete
    return this
  }

  checkAll(checkAll: boolean) {
    this.json['checkAll'] = checkAll
    return this
  }

  checkAllLabel(checkAllLabel: string) {
    this.json['checkAllLabel'] = checkAllLabel
    return this
  }

  checkAllBySearch(checkAllBySearch: boolean) {
    this.json['checkAllBySearch'] = checkAllBySearch
    return this
  }

  defaultCheckAll(defaultCheckAll: boolean) {
    this.json['defaultCheckAll'] = defaultCheckAll
    return this
  }

  creatable(creatable: boolean) {
    this.json['creatable'] = creatable
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }

  filterOption(filterOption: string) {
    this.json['filterOption'] = filterOption
    return this
  }

  createBtnLabel(createBtnLabel: string) {
    this.json['createBtnLabel'] = createBtnLabel
    return this
  }

  addControls(controls: FormItem[]) {
    this.json['addControls'] = controls
    return this
  }

  addApi(api: string | Record<string, any> | Api) {
    this.json['addApi'] = api
    return this
  }

  editable(editable: boolean) {
    this.json['editable'] = editable
    return this
  }

  editControls(controls: FormItem[]) {
    this.json['editControls'] = controls
    return this
  }

  editApi(api: string | Record<string, any> | Api) {
    this.json['editApi'] = api
    return this
  }

  removable(removable: boolean) {
    this.json['removable'] = removable
    return this
  }

  deleteApi(api: string | Record<string, any> | Api) {
    this.json['deleteApi'] = api
    return this
  }

  autoFill(autoFill: object) {
    this.json['autoFill'] = autoFill
    return this
  }

  menuTpl(menuTpl: string) {
    this.json['menuTpl'] = menuTpl
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  hideSelected(hideSelected: boolean) {
    this.json['hideSelected'] = hideSelected
    return this
  }

  mobileClassName(mobileClassName: string) {
    this.json['mobileClassName'] = mobileClassName
    return this
  }

  selectMode(selectMode: 'group' | 'table' | 'tree' | 'chained' | 'associated') {
    this.json['selectMode'] = selectMode
    return this
  }

  searchResultMode(searchResultMode: 'list' | 'table') {
    this.json['searchResultMode'] = searchResultMode
    return this
  }

  columns(columns: object[]) {
    this.json['columns'] = columns
    return this
  }

  leftOptions(options: object[]) {
    this.json['leftOptions'] = options
    return this
  }

  leftMode(mode: 'tree' | 'list') {
    this.json['leftMode'] = mode
    return this
  }

  rightMode(mode: 'tree' | 'list') {
    this.json['rightMode'] = mode
    return this
  }

  maxTagCount(maxTagCount: number) {
    this.json['maxTagCount'] = maxTagCount
    return this
  }

  overflowTagPopover(overflowTagPopover: boolean) {
    this.json['overflowTagPopover'] = overflowTagPopover
    return this
  }

  optionClassName(className: string) {
    this.json['optionClassName'] = className
    return this
  }

  popOverContainerSelector(selector: string) {
    this.json['popOverContainerSelector'] = selector
    return this
  }

  overlay(overlay: { width: number; align: string }) {
    this.json['overlay'] = overlay
    return this
  }

  showInvalidMatch(showInvalidMatch: boolean) {
    this.json['showInvalidMatch'] = showInvalidMatch
    return this
  }

  noResultsText(text: string) {
    this.json['noResultsText'] = text
    return this
  }
}
