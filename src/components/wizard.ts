import Api from './api.js'
import Schema from './schema.js'
import Action from './action.js'

/**
 * avatar
 * @docs https://baidu.github.io/amis/zh-CN/components/tasks
 */
export default class Wizard extends Schema<Wizard> {
  protected json: Record<string, any> = { type: 'wizard' }

  mode(mode: 'horizontal' | 'vertical') {
    this.json['mode'] = mode
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

  initFetch(initFetch: boolean) {
    this.json['initFetch'] = initFetch
    return this
  }

  initFetchOn(initFetchOn: string) {
    this.json['initFetchOn'] = initFetchOn
    return this
  }

  actionPrevLabel(label: string) {
    this.json['actionPrevLabel'] = label
    return this
  }

  actionNextLabel(label: string) {
    this.json['actionNextLabel'] = label
    return this
  }

  actionNextSaveLabel(label: string) {
    this.json['actionNextSaveLabel'] = label
    return this
  }

  actionFinishLabel(label: string) {
    this.json['actionFinishLabel'] = label
    return this
  }

  actionClassName(className: string) {
    this.json['actionClassName'] = className
    return this
  }

  reload(reload: string) {
    this.json['reload'] = reload
    return this
  }

  redirect(redirect: string) {
    this.json['redirect'] = redirect
    return this
  }

  target(target: string) {
    this.json['target'] = target
    return this
  }

  steps(steps: StepItem[]) {
    this.json['steps'] = steps
    return this
  }

  startStep(startStep: string) {
    this.json['startStep'] = startStep
    return this
  }
}

export class StepItem extends Schema<StepItem> {
  title(title: string) {
    this.json['title'] = title
    return this
  }

  mode(mode: 'normal' | 'horizontal' | 'inline') {
    this.json['mode'] = mode
    return this
  }

  horizontal(horizontal: { label?: string; right?: number; offset?: number }) {
    this.json['horizontal'] = horizontal
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

  initFetch(initFetch: boolean) {
    this.json['initFetch'] = initFetch
    return this
  }

  initFetchOn(initFetchOn: string) {
    this.json['initFetchOn'] = initFetchOn
    return this
  }

  closeDialogOnSubmit(closeDialogOnSubmit: boolean) {
    this.json['closeDialogOnSubmit'] = closeDialogOnSubmit
    return this
  }

  jumpableOn(jumpableOn: string) {
    this.json['jumpableOn'] = jumpableOn
    return this
  }

  actions(actions: Action[]) {
    this.json['actions'] = actions
    return this
  }

  body(body: object[]) {
    this.json['body'] = body
    return this
  }
}
