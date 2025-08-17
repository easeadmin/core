import Schema from './schema.js'
import Api from './api.js'

/**
 * avatar
 * @docs https://baidu.github.io/amis/zh-CN/components/tasks
 */
export default class Tasks extends Schema<Tasks> {
  protected json: Record<string, any> = { type: 'tasks' }

  tableClassName(tableClassName: string) {
    this.json['tableClassName'] = tableClassName
    return this
  }

  items(items: TaskItem[]) {
    this.json['items'] = items
    return this
  }

  checkApi(checkApi: string | Record<string, any> | Api) {
    this.json['checkApi'] = checkApi
    return this
  }

  submitApi(submitApi: string | Record<string, any> | Api) {
    this.json['submitApi'] = submitApi
    return this
  }

  reSubmitApi(reSubmitApi: string | Record<string, any> | Api) {
    this.json['reSubmitApi'] = reSubmitApi
    return this
  }

  interval(interval: number) {
    this.json['interval'] = interval
    return this
  }

  taskNameLabel(taskNameLabel: string) {
    this.json['taskNameLabel'] = taskNameLabel
    return this
  }

  operationLabel(operationLabel: string) {
    this.json['operationLabel'] = operationLabel
    return this
  }

  statusLabel(statusLabel: string) {
    this.json['statusLabel'] = statusLabel
    return this
  }

  remarkLabel(remarkLabel: string) {
    this.json['remarkLabel'] = remarkLabel
    return this
  }

  btnText(btnText: string) {
    this.json['btnText'] = btnText
    return this
  }

  retryBtnText(retryBtnText: string) {
    this.json['retryBtnText'] = retryBtnText
    return this
  }

  btnClassName(btnClassName: string) {
    this.json['btnClassName'] = btnClassName
    return this
  }

  retryBtnClassName(retryBtnClassName: string) {
    this.json['retryBtnClassName'] = retryBtnClassName
    return this
  }

  statusLabelMap(statusLabelMap: string[]) {
    this.json['statusLabelMap'] = statusLabelMap
    return this
  }

  statusTextMap(statusTextMap: string[]) {
    this.json['statusTextMap'] = statusTextMap
    return this
  }
}

export class TaskItem extends Schema<TaskItem> {
  label(label: string) {
    this.json['label'] = label
    return this
  }

  key(key: string) {
    this.json['key'] = key
    return this
  }

  remark(remark: string) {
    this.json['remark'] = remark
    return this
  }

  status(status: string | number) {
    this.json['status'] = status
    return this
  }
}
