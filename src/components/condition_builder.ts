import Api from './api.js'
import FormItem from './form_item.js'

/**
 * ConditionBuilder
 * @docs https://baidu.github.io/amis/zh-CN/components/form/condition-builder
 */
export default class ConditionBuilder extends FormItem {
  protected json: Record<string, any> = { type: 'condition-builder' }

  fieldClassName(fieldClassName: string) {
    this.json['fieldClassName'] = fieldClassName
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  embed(embed: boolean) {
    this.json['embed'] = embed
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  fields(fields: string[]) {
    this.json['fields'] = fields
    return this
  }

  showANDOR(showANDOR: boolean) {
    this.json['showANDOR'] = showANDOR
    return this
  }

  showNot(showNot: boolean) {
    this.json['showNot'] = showNot
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  searchable(searchable: boolean) {
    this.json['searchable'] = searchable
    return this
  }

  selectMode(selectMode: 'list' | 'tree' | 'chained') {
    this.json['selectMode'] = selectMode
    return this
  }

  addBtnVisibleOn(addBtnVisibleOn: string) {
    this.json['addBtnVisibleOn'] = addBtnVisibleOn
    return this
  }

  addGroupBtnVisibleOn(addGroupBtnVisibleOn: string) {
    this.json['addGroupBtnVisibleOn'] = addGroupBtnVisibleOn
    return this
  }

  inputSettings(inputSettings: object) {
    this.json['inputSettings'] = inputSettings
    return this
  }

  formula(formula: string) {
    this.json['formula'] = formula
    return this
  }

  showIf(showIf: boolean) {
    this.json['showIf'] = showIf
    return this
  }

  formulaForIf(formulaForIf: object) {
    this.json['formulaForIf'] = formulaForIf
    return this
  }
}
