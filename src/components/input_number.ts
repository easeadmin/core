import InputText from './input_text.js'

/**
 * InputNumber
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-number
 */
export default class InputNumber extends InputText {
  protected json: Record<string, any> = { type: 'input-number' }

  min(min: number) {
    this.json['min'] = min
    return this
  }

  max(max: number) {
    this.json['max'] = max
    return this
  }

  step(step: number) {
    this.json['step'] = step
    return this
  }

  precision(precision: number) {
    this.json['precision'] = precision
    return this
  }

  showSteps(showSteps: boolean) {
    this.json['showSteps'] = showSteps
    return this
  }

  readOnly(readOnly: boolean) {
    this.json['readOnly'] = readOnly
    return this
  }

  unitOptions(unitOptions: string[]) {
    this.json['unitOptions'] = unitOptions
    return this
  }

  kilobitSeparator(kilobitSeparator: string) {
    this.json['kilobitSeparator'] = kilobitSeparator
    return this
  }

  keyboard(keyboard: boolean) {
    this.json['keyboard'] = keyboard
    return this
  }

  big(big: boolean) {
    this.json['big'] = big
    return this
  }

  displayMode(displayMode: 'base' | 'enhance') {
    this.json['displayMode'] = displayMode
    return this
  }
}
