import FormItem from './form_item.js'

/**
 * InputRating
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-rating
 */
export default class InputRating extends FormItem {
  protected json: Record<string, any> = { type: 'input-rating' }

  half(half: boolean) {
    this.json['half'] = half
    return this
  }

  count(count: number) {
    this.json['count'] = count
    return this
  }

  readOnly(readOnly: boolean) {
    this.json['readOnly'] = readOnly
    return this
  }

  allowClear(allowClear: boolean) {
    this.json['allowClear'] = allowClear
    return this
  }

  colors(colors: string | object) {
    this.json['colors'] = colors
    return this
  }

  inactiveColor(inactiveColor: string) {
    this.json['inactiveColor'] = inactiveColor
    return this
  }

  texts(texts: object) {
    this.json['texts'] = texts
    return this
  }

  textPosition(textPosition: 'right' | 'left') {
    this.json['textPosition'] = textPosition
    return this
  }

  char(char: string) {
    this.json['char'] = char
    return this
  }

  charClassName(charClassName: string) {
    this.json['charClassName'] = charClassName
    return this
  }

  textClassName(textClassName: string) {
    this.json['textClassName'] = textClassName
    return this
  }
}
