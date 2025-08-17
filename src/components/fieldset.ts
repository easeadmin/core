import FormItem from './form_item.js'
import Schema from './schema.js'
/**
 * FieldSet
 * @docs https://baidu.github.io/amis/zh-CN/components/form/fieldset
 */
export default class FieldSet extends FormItem {
  protected json: Record<string, any> = { type: 'fieldSet' }

  headingClassName(headingClassName: string) {
    this.json['headingClassName'] = headingClassName
    return this
  }

  bodyClassName(bodyClassName: string) {
    this.json['bodyClassName'] = bodyClassName
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  body(body: FormItem[]) {
    this.json['body'] = body
    return this
  }

  mode(mode: 'horizontal' | 'inline' | 'normal') {
    this.json['mode'] = mode
    return this
  }

  collapsable(collapsable: boolean) {
    this.json['collapsable'] = collapsable
    return this
  }

  collapsed(collapsed: boolean) {
    this.json['collapsed'] = collapsed
    return this
  }

  collapseTitle(collapseTitle: Schema<any>) {
    this.json['collapseTitle'] = collapseTitle
    return this
  }

  size(size: 'xs' | 'sm' | 'md' | 'lg' | 'base') {
    this.json['size'] = size
    return this
  }
}
