import FormItem from './form_item.js'

/**
 * Hidden
 * @docs https://baidu.github.io/amis/zh-CN/components/form/hidden
 */
export default class Hidden extends FormItem {
  protected json: Record<string, any> = { type: 'hidden' }
}
