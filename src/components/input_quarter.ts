import InputDate from './input_date.js'

/**
 * InputQuarter
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-quarter
 */
export default class InputQuarter extends InputDate {
  protected json: Record<string, any> = { type: 'input-quarter' }
}
