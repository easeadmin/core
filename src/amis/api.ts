/**
 * Api
 * @docs https://baidu.github.io/amis/zh-CN/docs/types/api
 */
export default class Api {
  protected json: Record<string, any> = {}

  constructor(json?: Record<string, any>) {
    if (json) this.json = JSON.parse(JSON.stringify(json))
  }

  static make<Api>(this: new () => Api): Api {
    return new this()
  }

  csrf(csrfToken: string) {
    return this.headers({ 'x-csrf-token': csrfToken })
  }

  method(method: string) {
    this.json['method'] = method
    return this
  }

  url(url: string) {
    this.json['url'] = url
    return this
  }

  data(data: object | string) {
    this.json['data'] = data
    return this
  }

  dataType(dataType: 'json' | 'form' | 'form-data') {
    this.json['dataType'] = dataType
    return this
  }

  qsOptions(qsOptions: object | string) {
    this.json['qsOptions'] = qsOptions
    return this
  }

  headers(headers: Record<string, string>) {
    if (!this.json['headers']) {
      this.json['headers'] = {}
    }
    this.json['headers'] = Object.assign(this.json['headers'], headers)
    return this
  }

  sendOn(sendOn: string) {
    this.json['sendOn'] = sendOn
    return this
  }

  cache(cache: number) {
    this.json['cache'] = cache
    return this
  }

  requestAdaptor(adaptor: string) {
    this.json['requestAdaptor'] = adaptor
    return this
  }

  adaptor(adaptor: string) {
    this.json['adaptor'] = adaptor
    return this
  }

  replaceData(replaceData: boolean) {
    this.json['replaceData'] = replaceData
    return this
  }

  responseType(responseType: 'json' | 'text' | 'blob') {
    this.json['responseType'] = responseType
    return this
  }

  autoRefresh(autoRefresh: boolean) {
    this.json['autoRefresh'] = autoRefresh
    return this
  }

  responseData(responseData: object) {
    this.json['responseData'] = responseData
    return this
  }

  trackExpression(trackExpression: string) {
    this.json['trackExpression'] = trackExpression
    return this
  }

  messages(messages: object) {
    this.json['messages'] = messages
    return this
  }

  toJSON() {
    if (!this.json['method']) {
      this.json['method'] = 'GET'
    }
    return this.json
  }
}
