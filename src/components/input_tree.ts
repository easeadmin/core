import FormItem from './form_item.js'
import Api from './api.js'

/**
 * InputTree
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-tree
 */
export default class InputTree extends FormItem {
  protected json: Record<string, any> = { type: 'input-tree' }

  options(options: object[] | string[]) {
    this.json['options'] = options
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  autoComplete(autoComplete: string | Record<string, any> | Api) {
    this.json['autoComplete'] = autoComplete
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  delimiter(delimiter: string) {
    this.json['delimiter'] = delimiter
    return this
  }

  labelField(labelField: string) {
    this.json['labelField'] = labelField
    return this
  }

  valueField(valueField: string) {
    this.json['valueField'] = valueField
    return this
  }

  iconField(iconField: string) {
    this.json['iconField'] = iconField
    return this
  }

  deferField(deferField: string) {
    this.json['deferField'] = deferField
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

  creatable(creatable: boolean) {
    this.json['creatable'] = creatable
    return this
  }

  addControls(addControls: FormItem[]) {
    this.json['addControls'] = addControls
    return this
  }

  addApi(addApi: string | Record<string, any> | Api) {
    this.json['addApi'] = addApi
    return this
  }

  editable(editable: boolean) {
    this.json['editable'] = editable
    return this
  }

  editControls(editControls: FormItem[]) {
    this.json['editControls'] = editControls
    return this
  }

  editApi(editApi: string | Record<string, any> | Api) {
    this.json['editApi'] = editApi
    return this
  }

  removable(removable: boolean) {
    this.json['removable'] = removable
    return this
  }

  deleteApi(deleteApi: string | Record<string, any> | Api) {
    this.json['deleteApi'] = deleteApi
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }

  hideRoot(hideRoot: boolean) {
    this.json['hideRoot'] = hideRoot
    return this
  }

  rootLabel(rootLabel: boolean) {
    this.json['rootLabel'] = rootLabel
    return this
  }

  showIcon(showIcon: boolean) {
    this.json['showIcon'] = showIcon
    return this
  }

  showRadio(showRadio: boolean) {
    this.json['showRadio'] = showRadio
    return this
  }

  showOutline(showOutline: boolean) {
    this.json['showOutline'] = showOutline
    return this
  }

  initiallyOpen(initiallyOpen: boolean) {
    this.json['initiallyOpen'] = initiallyOpen
    return this
  }

  unfoldedLevel(unfoldedLevel: number) {
    this.json['unfoldedLevel'] = unfoldedLevel
    return this
  }

  autoCheckChildren(autoCheckChildren: boolean) {
    this.json['autoCheckChildren'] = autoCheckChildren
    return this
  }

  cascade(cascade: boolean) {
    this.json['cascade'] = cascade
    return this
  }

  withChildren(withChildren: boolean) {
    this.json['withChildren'] = withChildren
    return this
  }

  onlyChildren(onlyChildren: boolean) {
    this.json['onlyChildren'] = onlyChildren
    return this
  }

  onlyLeaf(onlyLeaf: boolean) {
    this.json['onlyLeaf'] = onlyLeaf
    return this
  }

  rootCreatable(rootCreatable: boolean) {
    this.json['rootCreatable'] = rootCreatable
    return this
  }

  rootCreateTip(rootCreateTip: string) {
    this.json['rootCreateTip'] = rootCreateTip
    return this
  }

  minLength(minLength: number) {
    this.json['minLength'] = minLength
    return this
  }

  maxLength(maxLength: number) {
    this.json['maxLength'] = maxLength
    return this
  }

  treeContainerClassName(treeContainerClassName: string) {
    this.json['treeContainerClassName'] = treeContainerClassName
    return this
  }

  enableNodePath(enableNodePath: boolean) {
    this.json['enableNodePath'] = enableNodePath
    return this
  }

  pathSeparator(pathSeparator: string) {
    this.json['pathSeparator'] = pathSeparator
    return this
  }

  highlightTxt(highlightTxt: string) {
    this.json['highlightTxt'] = highlightTxt
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

  menuTpl(menuTpl: string) {
    this.json['menuTpl'] = menuTpl
    return this
  }

  enableDefaultIcon(enableDefaultIcon: boolean) {
    this.json['enableDefaultIcon'] = enableDefaultIcon
    return this
  }

  heightAuto(heightAuto: boolean) {
    this.json['heightAuto'] = heightAuto
    return this
  }

  nodeBehavior(nodeBehavior: ['unfold' | 'check', '']) {
    this.json['nodeBehavior'] = nodeBehavior
    return this
  }

  autoCancelParent(autoCancelParent: boolean) {
    this.json['autoCancelParent'] = autoCancelParent
    return this
  }

  toolbar(toolbar: object) {
    this.json['toolbar'] = toolbar
    return this
  }

  toolbarClassName(toolbarClassName: string) {
    this.json['toolbarClassName'] = toolbarClassName
    return this
  }

  itemActions(itemActions: object) {
    this.json['itemActions'] = itemActions
    return this
  }
}
