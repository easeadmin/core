import Options from './options.js'
import Api from './api.js'

/**
 * InputText
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-text
 */
export default class InputText extends Options {
  protected json: Record<string, any> = { type: 'input-text' }

  autoComplete(autoComplete: string | Record<string, any> | Api) {
    this.json['autoComplete'] = autoComplete
    return this
  }

  addOn(addOn: object) {
    this.json['addOn'] = addOn
    return this
  }

  trimContents(trimContents: boolean) {
    this.json['trimContents'] = trimContents
    return this
  }

  clearValueOnEmpty(clearValueOnEmpty: boolean) {
    this.json['clearValueOnEmpty'] = clearValueOnEmpty
    return this
  }

  creatable(creatable: boolean) {
    this.json['creatable'] = creatable
    return this
  }

  resetValue(resetValue: string | number) {
    this.json['resetValue'] = resetValue
    return this
  }

  prefix(prefix: string) {
    this.json['prefix'] = prefix
    return this
  }

  suffix(suffix: string) {
    this.json['suffix'] = suffix
    return this
  }

  showCounter(showCounter: boolean) {
    this.json['showCounter'] = showCounter
    return this
  }

  minLength(minLength: number) {
    this.json['minLength'] = minLength
    return this
  }

  maxLength(maxLength: number) {
    this.json['maxLength'] = maxLength
    return this
  }

  transform(transform: object) {
    this.json['transform'] = transform
    return this
  }

  borderMode(borderMode: 'full' | 'half' | 'none') {
    this.json['borderMode'] = borderMode
    return this
  }

  inputControlClassName(inputControlClassName: string) {
    this.json['inputControlClassName'] = inputControlClassName
    return this
  }

  nativeInputClassName(nativeInputClassName: string) {
    this.json['nativeInputClassName'] = nativeInputClassName
    return this
  }

  nativeAutoComplete(nativeAutoComplete: string) {
    this.json['nativeAutoComplete'] = nativeAutoComplete
    return this
  }
}
