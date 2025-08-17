/**
 * event
 * @docs https://baidu.github.io/amis/zh-CN/docs/concepts/event-action
 */
export default class Event {
  protected json: Record<string, any> = {}

  static make<Event>(this: new () => Event): Event {
    return new this()
  }

  actionType(actionType: string | ActionType) {
    this.json['actionType'] = actionType
    return this
  }

  action(name: string, schema: any) {
    this.json[name] = schema
    return this
  }

  attr(name: string, schema: any) {
    this.json[name] = schema
    return this
  }

  data(data: object) {
    this.json['data'] = data
    return this
  }

  args(args: object) {
    this.json['args'] = args
    return this
  }

  dataMergeMode(dataMergeMode: 'merge' | 'override') {
    this.json['dataMergeMode'] = dataMergeMode
    return this
  }

  preventDefault(preventDefault: boolean) {
    this.json['preventDefault'] = preventDefault
    return this
  }

  stopPropagation(stopPropagation: boolean) {
    this.json['stopPropagation'] = stopPropagation
    return this
  }

  expression(expression: string) {
    this.json['expression'] = expression
    return this
  }

  outputVar(outputVar: string) {
    this.json['outputVar'] = outputVar
    return this
  }

  ignoreError(ignoreError: boolean) {
    this.json['ignoreError'] = ignoreError
    return this
  }

  toJSON(): Record<string, any> {
    return this.json
  }
}

export type ActionType = {
  ajax: 'ajax'
  dialog: 'dialog'
  closeDialog: 'closeDialog'
  drawer: 'drawer'
  closeDrawer: 'closeDrawer'
  confirmDialog: 'confirmDialog'
  alert: 'alert'
  toast: 'toast'
  url: 'url'
  link: 'link'
  goBack: 'goBack'
  goPage: 'goPage'
  refresh: 'refresh'
  copy: 'copy'
  print: 'print'
  email: 'email'
  setEventData: 'setEventData'
  wait: 'wait'
  custom: 'custom'
  setValue: 'setValue'
  reload: 'reload'
  show: 'show'
  hidden: 'hidden'
  enabled: 'enabled'
  disabled: 'disabled'
  static: 'static'
  nonstatic: 'nonstatic'
  broadcast: 'broadcast'
  loop: 'loop'
  break: 'break'
  continue: 'continue'
  switch: 'switch'
  parallel: 'parallel'
  preventDefault: 'preventDefault'
  stopPropagation: 'stopPropagation'
}
