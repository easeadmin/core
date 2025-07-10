import Transfer from './transfer.js'

/**
 * TransferPicker
 * @docs https://baidu.github.io/amis/zh-CN/components/form/transfer-picker
 */
export default class TransferPicker extends Transfer {
  protected json: Record<string, any> = { type: 'transfer-picker' }

  borderMode(borderMode: 'full' | 'half' | 'none') {
    this.json['borderMode'] = borderMode
    return this
  }

  pickerSize(pickerSize: string) {
    this.json['pickerSize'] = pickerSize
    return this
  }
}
