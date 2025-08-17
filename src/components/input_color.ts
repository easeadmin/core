import FormItem from './form_item.js'

/**
 * InputColor
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-color
 */
export default class InputColor extends FormItem {
  protected json: Record<string, any> = { type: 'input-color' }

  format(format: 'hex' | 'hexa' | 'hls' | 'rgb' | 'rgba') {
    this.json['format'] = format
    return this
  }

  presetColors(presetColors: string[]) {
    this.json['presetColors'] = presetColors
    return this
  }

  allowCustomColor(allowCustomColor: boolean) {
    this.json['allowCustomColor'] = allowCustomColor
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  resetValue(resetValue: string) {
    this.json['resetValue'] = resetValue
    return this
  }
}
