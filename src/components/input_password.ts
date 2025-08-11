import InputText from './input_text.js'

/**
 * InputPassword
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-password
 */
export default class InputPassword extends InputText {
  protected json: Record<string, any> = { type: 'input-password' }

  revealPassword(revealPassword: boolean) {
    this.json['revealPassword'] = revealPassword
    return this
  }
}
