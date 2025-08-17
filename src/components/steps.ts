import Api from './api.js'
import Schema from './schema.js'

/**
 * Steps
 * @docs https://baidu.github.io/amis/zh-CN/components/steps
 */
export default class Steps extends Schema<Steps> {
  protected json: Record<string, any> = { type: 'steps' }

  steps(steps: StepItem[]) {
    this.json['steps'] = steps
    return this
  }

  source(source: string | Record<string, any> | Api) {
    this.json['source'] = source
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  value(value: string | number) {
    this.json['value'] = value
    return this
  }

  status(status: 'wait' | 'process' | 'finish' | 'error' | object) {
    this.json['status'] = status
    return this
  }

  mode(mode: 'horizontal' | 'vertical' | 'simple') {
    this.json['mode'] = mode
    return this
  }

  labelPlacement(labelPlacement: 'horizontal' | 'vertical') {
    this.json['labelPlacement'] = labelPlacement
    return this
  }

  progressDot(progressDot: boolean) {
    this.json['progressDot'] = progressDot
    return this
  }
}

export class StepItem extends Schema<StepItem> {
  title(title: string) {
    this.json['title'] = title
    return this
  }

  subTitle(subTitle: string) {
    this.json['subTitle'] = subTitle
    return this
  }

  description(description: string) {
    this.json['description'] = description
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  value(value: string | number) {
    this.json['value'] = value
    return this
  }
}
