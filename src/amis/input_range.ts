import FormItem from './form_item.js'

/**
 * InputRange
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-range
 */
export default class InputRange extends FormItem {
  protected json: Record<string, any> = { type: 'input-range' }

  value(value: number | string | object) {
    this.json['value'] = value
    return this
  }

  min(min: number | string) {
    this.json['min'] = min
    return this
  }

  max(max: number | string) {
    this.json['max'] = max
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }

  step(step: number | string) {
    this.json['step'] = step
    return this
  }

  showSteps(showSteps: boolean) {
    this.json['showSteps'] = showSteps
    return this
  }

  parts(parts: number | number[]) {
    this.json['parts'] = parts
    return this
  }

  marks(marks: any) {
    this.json['marks'] = marks
    return this
  }

  tooltipVisible(tooltipVisible: boolean) {
    this.json['tooltipVisible'] = tooltipVisible
    return this
  }

  tooltipPlacement(tooltipPlacement: 'auto' | 'bottom' | 'left' | 'right' | 'top') {
    this.json['tooltipPlacement'] = tooltipPlacement
    return this
  }

  tipFormatter(tipFormatter: Function) {
    this.json['tipFormatter'] = tipFormatter
    return this
  }

  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }

  joinValues(joinValues: boolean) {
    this.json['joinValues'] = joinValues
    return this
  }

  delimiter(delimiter: string) {
    this.json['delimiter'] = delimiter
    return this
  }

  unit(unit: string) {
    this.json['unit'] = unit
    return this
  }

  clearable(clearable: boolean) {
    this.json['clearable'] = clearable
    return this
  }

  showInput(showInput: boolean) {
    this.json['showInput'] = showInput
    return this
  }

  showInputUnit(showInputUnit: boolean) {
    this.json['showInputUnit'] = showInputUnit
    return this
  }

  onChange(onChange: Function) {
    this.json['onChange'] = onChange
    return this
  }

  onAfterChange(onAfterChange: Function) {
    this.json['onAfterChange'] = onAfterChange
    return this
  }
}
