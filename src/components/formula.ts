import FormItem from './form_item.js'

/**
 * Formula
 * @docs https://baidu.github.io/amis/zh-CN/components/form/formula
 */
export default class Formula extends FormItem {
  protected json: Record<string, any> = { type: 'formula' }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  formula(formula: string) {
    this.json['formula'] = formula
    return this
  }

  condition(condition: string) {
    this.json['condition'] = condition
    return this
  }

  initSet(initSet: boolean) {
    this.json['initSet'] = initSet
    return this
  }

  autoSet(autoSet: boolean) {
    this.json['autoSet'] = autoSet
    return this
  }
}
