import InputDate from './input_date.js'

/**
 * InputYear
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-year
 */
export default class InputYear extends InputDate {
  protected json: Record<string, any> = { type: 'input-year' }
}
