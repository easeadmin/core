import FormItem from './form_item.js'

/**
 * InputArray
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-array
 */
export default class InputArray extends FormItem {
  protected json: Record<string, any> = { type: 'input-array' }

  items(items: object) {
    this.json['items'] = items
    return this
  }

  addable(addable: boolean) {
    this.json['addable'] = addable
    return this
  }

  removable(removable: boolean) {
    this.json['removable'] = removable
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  draggableTip(draggableTip: string) {
    this.json['draggableTip'] = draggableTip
    return this
  }

  addButtonText(addButtonText: string) {
    this.json['addButtonText'] = addButtonText
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

  scaffold(scaffold: any) {
    this.json['scaffold'] = scaffold
    return this
  }
}
