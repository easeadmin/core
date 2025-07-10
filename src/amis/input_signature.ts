import FormItem from './form_item.js'
import Api from './api.js'

/**
 * InputSignature
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-signature
 */
export default class InputSignature extends FormItem {
  protected json: Record<string, any> = { type: 'input-signature' }

  width(width: number) {
    this.json['width'] = width
    return this
  }

  height(height: number) {
    this.json['height'] = height
    return this
  }

  color(color: string) {
    this.json['color'] = color
    return this
  }

  bgColor(bgColor: string) {
    this.json['bgColor'] = bgColor
    return this
  }

  clearBtnLabel(clearBtnLabel: string) {
    this.json['clearBtnLabel'] = clearBtnLabel
    return this
  }

  undoBtnLabel(undoBtnLabel: string) {
    this.json['undoBtnLabel'] = undoBtnLabel
    return this
  }

  confirmBtnLabel(confirmBtnLabel: string) {
    this.json['confirmBtnLabel'] = confirmBtnLabel
    return this
  }

  embed(embed: boolean) {
    this.json['embed'] = embed
    return this
  }

  embedConfirmLabel(embedConfirmLabel: string) {
    this.json['embedConfirmLabel'] = embedConfirmLabel
    return this
  }

  ebmedCancelLabel(ebmedCancelLabel: string) {
    this.json['ebmedCancelLabel'] = ebmedCancelLabel
    return this
  }

  embedBtnIcon(embedBtnIcon: string) {
    this.json['embedBtnIcon'] = embedBtnIcon
    return this
  }

  embedBtnLabel(embedBtnLabel: string) {
    this.json['embedBtnLabel'] = embedBtnLabel
    return this
  }

  uploadApi(uploadApi: string | Record<string, any> | Api) {
    this.json['uploadApi'] = uploadApi
    return this
  }
}
