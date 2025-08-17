import FormItem from './form_item.js'

/**
 * Group
 * @docs https://baidu.github.io/amis/zh-CN/components/form/group
 */
export default class Group extends FormItem {
  protected json: Record<string, any> = { type: 'group' }

  body(body: FormItem[]) {
    this.json['body'] = body
    return this
  }

  mode(mode: 'horizontal' | 'inline' | 'normal') {
    this.json['mode'] = mode
    return this
  }

  gap(gap: string) {
    this.json['gap'] = gap
    return this
  }

  direction(direction: string) {
    this.json['direction'] = direction
    return this
  }
}
