import Schema from './schema.js'
import Api from './api.js'

/**
 * Form
 * @docs https://baidu.github.io/amis/zh-CN/components/form/index
 */
export default class Form extends Schema<Form> {
  protected json: Record<string, any> = { type: 'form' }

  data(data: Record<string, any>) {
    this.json['data'] = data
    return this
  }

  name(name: string) {
    this.json['name'] = name
    return this
  }

  mode(mode: 'horizontal' | 'inline' | 'normal') {
    this.json['mode'] = mode
    return this
  }

  horizontal(horizontal: object) {
    this.json['horizontal'] = horizontal
    return this
  }

  labelAlign(labelAlign: 'left' | 'right') {
    this.json['labelAlign'] = labelAlign
    return this
  }

  labelWidth(labelWidth: string | number) {
    this.json['labelWidth'] = labelWidth
    return this
  }

  title(title: object | string) {
    this.json['title'] = title
    return this
  }

  submitText(submitText: string) {
    this.json['submitText'] = submitText
    return this
  }

  body(body: object) {
    this.json['body'] = body
    return this
  }

  actions(actions: Schema<any>[]) {
    this.json['actions'] = actions
    return this
  }

  messages(messages: {
    fetchSuccess: string
    fetchFailed: string
    saveSuccess: string
    saveFailed: string
  }) {
    this.json['messages'] = messages
    return this
  }

  wrapWithPanel(wrapWithPanel: boolean) {
    this.json['wrapWithPanel'] = wrapWithPanel
    return this
  }

  panelClassName(panelClassName: string) {
    this.json['panelClassName'] = panelClassName
    return this
  }

  api(api: string | Record<string, any> | Api) {
    this.json['api'] = api
    return this
  }

  initApi(initApi: string | Record<string, any> | Api) {
    this.json['initApi'] = initApi
    return this
  }

  rules(rules: object) {
    this.json['rules'] = rules
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

  initAsyncApi(initAsyncApi: string | Record<string, any> | Api) {
    this.json['initAsyncApi'] = initAsyncApi
    return this
  }

  initFetch(initFetch: boolean) {
    this.json['initFetch'] = initFetch
    return this
  }

  initFetchOn(initFetchOn: string) {
    this.json['initFetchOn'] = initFetchOn
    return this
  }

  initFinishedField(initFinishedField: string) {
    this.json['initFinishedField'] = initFinishedField
    return this
  }

  initCheckInterval(initCheckInterval: number) {
    this.json['initCheckInterval'] = initCheckInterval
    return this
  }

  asyncApi(asyncApi: string | Record<string, any> | Api) {
    this.json['asyncApi'] = asyncApi
    return this
  }

  checkInterval(checkInterval: number) {
    this.json['checkInterval'] = checkInterval
    return this
  }

  finishedField(finishedField: string) {
    this.json['finishedField'] = finishedField
    return this
  }

  submitOnChange(submitOnChange: boolean) {
    this.json['submitOnChange'] = submitOnChange
    return this
  }

  submitOnInit(submitOnInit: boolean) {
    this.json['submitOnInit'] = submitOnInit
    return this
  }

  resetAfterSubmit(resetAfterSubmit: boolean) {
    this.json['resetAfterSubmit'] = resetAfterSubmit
    return this
  }

  primaryField(primaryField: string) {
    this.json['primaryField'] = primaryField
    return this
  }

  target(target: string) {
    this.json['target'] = target
    return this
  }

  redirect(redirect: string) {
    this.json['redirect'] = redirect
    return this
  }

  reload(reload: string) {
    this.json['reload'] = reload
    return this
  }

  autoFocus(autoFocus: boolean) {
    this.json['autoFocus'] = autoFocus
    return this
  }

  canAccessSuperData(canAccessSuperData: boolean) {
    this.json['canAccessSuperData'] = canAccessSuperData
    return this
  }

  persistData(persistData: boolean) {
    this.json['persistData'] = persistData
    return this
  }

  persistDataKeys(persistDataKeys: string[]) {
    this.json['persistDataKeys'] = persistDataKeys
    return this
  }

  clearPersistDataAfterSubmit(clearPersistDataAfterSubmit: boolean) {
    this.json['clearPersistDataAfterSubmit'] = clearPersistDataAfterSubmit
    return this
  }

  preventEnterSubmit(preventEnterSubmit: boolean) {
    this.json['preventEnterSubmit'] = preventEnterSubmit
    return this
  }

  trimValues(trimValues: boolean) {
    this.json['trimValues'] = trimValues
    return this
  }

  promptPageLeave(promptPageLeave: boolean) {
    this.json['promptPageLeave'] = promptPageLeave
    return this
  }

  columnCount(columnCount: number) {
    this.json['columnCount'] = columnCount
    return this
  }

  inheritData(inheritData: boolean) {
    this.json['inheritData'] = inheritData
    return this
  }

  static(stat: boolean) {
    this.json['static'] = stat
    return this
  }

  staticClassName(className: string) {
    this.json['staticClassName'] = className
    return this
  }

  closeDialogOnSubmit(closeDialogOnSubmit: boolean) {
    this.json['closeDialogOnSubmit'] = closeDialogOnSubmit
    return this
  }
}
