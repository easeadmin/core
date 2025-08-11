import Schema from './schema.js'
import Api from './api.js'

/**
 * Service
 * @docs https://baidu.github.io/amis/zh-CN/components/service
 */
export default class Service extends Schema<Service> {
  protected json: Record<string, any> = { type: 'service' }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  ws(ws: string) {
    this.json['ws'] = ws
    return this
  }

  api(api: string | Record<string, any> | Api) {
    this.json['api'] = api
    return this
  }

  data(data: object) {
    this.json['data'] = data
    return this
  }

  schemaApi(schemaApi: string | Record<string, any> | Api) {
    this.json['schemaApi'] = schemaApi
    return this
  }

  dataProvider(dataProvider: string | object) {
    this.json['dataProvider'] = dataProvider
    return this
  }

  initFetch(initFetch: boolean) {
    this.json['initFetch'] = initFetch
    return this
  }

  initFetchSchema(initFetchSchema: boolean) {
    this.json['initFetchSchema'] = initFetchSchema
    return this
  }

  messages(messages: { fetchSuccess: string; fetchFailed: string }) {
    this.json['messages'] = messages
    return this
  }

  interval(interval: number) {
    this.json['interval'] = interval
    return this
  }

  silentPolling(silentPolling: boolean) {
    this.json['silentPolling'] = silentPolling
    return this
  }

  stopAutoRefreshWhen(stopAutoRefreshWhen: string) {
    this.json['stopAutoRefreshWhen'] = stopAutoRefreshWhen
    return this
  }

  showErrorMsg(showErrorMsg: boolean) {
    this.json['showErrorMsg'] = showErrorMsg
    return this
  }
}
