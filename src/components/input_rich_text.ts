import FormItem from './form_item.js'

/**
 * InputRichText
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-rich-text
 */
export default class InputRichText extends FormItem {
  protected json: Record<string, any> = { type: 'input-rich-text' }

  saveAsUbb(saveAsUbb: boolean) {
    this.json['saveAsUbb'] = saveAsUbb
    return this
  }

  receiver(receiver: object) {
    this.json['receiver'] = receiver
    return this
  }

  videoReceiver(videoReceiver: object) {
    this.json['videoReceiver'] = videoReceiver
    return this
  }

  fileField(fileField: string) {
    this.json['fileField'] = fileField
    return this
  }

  size(size: string) {
    this.json['size'] = size
    return this
  }

  options(options: object) {
    this.json['options'] = options
    return this
  }

  buttons(buttons: string[]) {
    this.json['buttons'] = buttons
    return this
  }
}
