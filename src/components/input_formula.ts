import FormItem from './form_item.js'

/**
 * InputFormula
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-formula
 */
export default class InputFormula extends FormItem {
  protected json: Record<string, any> = { type: 'input-formula' }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  header(header: string) {
    this.json['header'] = header
    return this
  }

  evalMode(evalMode: boolean) {
    this.json['evalMode'] = evalMode
    return this
  }

  variables(variables: { label: string; value: string; children?: any[]; tag?: string[] }) {
    this.json['variables'] = variables
    return this
  }

  variableMode(variableMode: 'tabs' | 'tree') {
    this.json['variableMode'] = variableMode
    return this
  }

  functions(functions: object) {
    this.json['functions'] = functions
    return this
  }

  inputMode(inputMode: 'button' | 'input-button' | 'input-group') {
    this.json['inputMode'] = inputMode
    return this
  }

  icon(icon: string) {
    this.json['icon'] = icon
    return this
  }

  btnLabel(btnLabel: string) {
    this.json['btnLabel'] = btnLabel
    return this
  }

  level(level: 'info' | 'success' | 'warning' | 'danger' | 'link' | 'primary' | 'dark' | 'light') {
    this.json['level'] = level
    return this
  }

  allowInput(allowInput: boolean) {
    this.json['allowInput'] = allowInput
    return this
  }

  btnSize(btnSize: 'xs' | 'sm' | 'md' | 'lg') {
    this.json['btnSize'] = btnSize
    return this
  }

  borderMode(borderMode: 'full' | 'half' | 'none') {
    this.json['borderMode'] = borderMode
    return this
  }

  variableClassName(className: string) {
    this.json['variableClassName'] = className
    return this
  }

  functionClassName(className: string) {
    this.json['functionClassName'] = className
    return this
  }
}
