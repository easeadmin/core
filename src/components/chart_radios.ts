import FormItem from './form_item.js'

/**
 * ChartRadios
 * @docs https://baidu.github.io/amis/zh-CN/components/form/chart-radios
 */
export default class ChartRadios extends FormItem {
  protected json: Record<string, any> = { type: 'chart-radios' }

  config(config: object) {
    this.json['config'] = config
    return this
  }

  showTooltipOnHighlight(showTooltipOnHighlight: boolean) {
    this.json['showTooltipOnHighlight'] = showTooltipOnHighlight
    return this
  }

  chartValueField(chartValueField: string) {
    this.json['chartValueField'] = chartValueField
    return this
  }
}
