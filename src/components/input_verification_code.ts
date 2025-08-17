import FormItem from './form_item.js'

/**
 * InputVerificationCode
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-verification-code
 */
export default class InputVerificationCode extends FormItem {
  protected json: Record<string, any> = { type: 'input-verification-code' }

  length(length: number) {
    this.json['length'] = length
    return this
  }

  masked(masked: boolean) {
    this.json['masked'] = masked
    return this
  }

  separator(separator: string) {
    this.json['separator'] = separator
    return this
  }
}
