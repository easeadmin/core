import Api from './api.js'
import Schema from './schema.js'

/**
 * Chart
 * @docs https://baidu.github.io/amis/zh-CN/components/chart
 */
export default class Chart extends Schema<Chart> {
  protected json: Record<string, any> = { type: 'chart' }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  api(api: string | Record<string, any> | Api) {
    this.json['api'] = api
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  initFetch(initFetch: boolean) {
    this.json['initFetch'] = initFetch
    return this
  }

  interval(interval: number) {
    this.json['interval'] = interval
    return this
  }

  config(config: object | string) {
    this.json['config'] = config
    return this
  }

  style(style: object) {
    this.json['style'] = style
    return this
  }

  width(width: string) {
    this.json['width'] = width
    return this
  }

  height(height: string) {
    this.json['height'] = height
    return this
  }

  replaceChartOption(replaceChartOption: boolean) {
    this.json['replaceChartOption'] = replaceChartOption
    return this
  }

  trackExpression(trackExpression: string) {
    this.json['trackExpression'] = trackExpression
    return this
  }

  dataFilter(dataFilter: string) {
    this.json['dataFilter'] = dataFilter
    return this
  }

  mapURL(mapURL: any) {
    this.json['mapURL'] = mapURL
    return this
  }

  mapName(mapName: string) {
    this.json['mapName'] = mapName
    return this
  }

  loadBaiduMap(loadBaiduMap: boolean) {
    this.json['loadBaiduMap'] = loadBaiduMap
    return this
  }
}
