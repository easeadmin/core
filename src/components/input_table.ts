import FormItem from './form_item.js'
import Api from './api.js'

/**
 * InputTable
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-table
 */
export default class InputTable extends FormItem {
  protected json: Record<string, any> = { type: 'input-table' }

  addable(addable: boolean) {
    this.json['addable'] = addable
    return this
  }

  copyable(copyable: boolean) {
    this.json['copyable'] = copyable
    return this
  }

  copyData(copyData: object) {
    this.json['copyData'] = copyData
    return this
  }

  childrenAddable(childrenAddable: boolean) {
    this.json['childrenAddable'] = childrenAddable
    return this
  }

  editable(editable: boolean) {
    this.json['editable'] = editable
    return this
  }

  removable(removable: boolean) {
    this.json['removable'] = removable
    return this
  }

  showTableAddBtn(showTableAddBtn: boolean) {
    this.json['showTableAddBtn'] = showTableAddBtn
    return this
  }

  showFooterAddBtn(showFooterAddBtn: boolean) {
    this.json['showFooterAddBtn'] = showFooterAddBtn
    return this
  }

  addApi(addApi: string | Record<string, any> | Api) {
    this.json['addApi'] = addApi
    return this
  }

  footerAddBtn(footerAddBtn: object) {
    this.json['footerAddBtn'] = footerAddBtn
    return this
  }

  updateApi(updateApi: string | Record<string, any> | Api) {
    this.json['updateApi'] = updateApi
    return this
  }

  deleteApi(deleteApi: string | Record<string, any> | Api) {
    this.json['deleteApi'] = deleteApi
    return this
  }

  addBtnLabel(addBtnLabel: string) {
    this.json['addBtnLabel'] = addBtnLabel
    return this
  }

  addBtnIcon(addBtnIcon: string) {
    this.json['addBtnIcon'] = addBtnIcon
    return this
  }

  subAddBtnLabel(subAddBtnLabel: string) {
    this.json['subAddBtnLabel'] = subAddBtnLabel
    return this
  }

  subAddBtnIcon(subAddBtnIcon: string) {
    this.json['subAddBtnIcon'] = subAddBtnIcon
    return this
  }

  copyBtnLabel(copyBtnLabel: string) {
    this.json['copyBtnLabel'] = copyBtnLabel
    return this
  }

  copyBtnIcon(copyBtnIcon: string) {
    this.json['copyBtnIcon'] = copyBtnIcon
    return this
  }

  editBtnLabel(editBtnLabel: string) {
    this.json['editBtnLabel'] = editBtnLabel
    return this
  }

  editBtnIcon(editBtnIcon: string) {
    this.json['editBtnIcon'] = editBtnIcon
    return this
  }

  deleteBtnLabel(deleteBtnLabel: string) {
    this.json['deleteBtnLabel'] = deleteBtnLabel
    return this
  }

  deleteBtnIcon(deleteBtnIcon: string) {
    this.json['deleteBtnIcon'] = deleteBtnIcon
    return this
  }

  confirmBtnLabel(confirmBtnLabel: string) {
    this.json['confirmBtnLabel'] = confirmBtnLabel
    return this
  }

  confirmBtnIcon(confirmBtnIcon: string) {
    this.json['confirmBtnIcon'] = confirmBtnIcon
    return this
  }

  cancelBtnLabel(cancelBtnLabel: string) {
    this.json['cancelBtnLabel'] = cancelBtnLabel
    return this
  }

  cancelBtnIcon(cancelBtnIcon: string) {
    this.json['cancelBtnIcon'] = cancelBtnIcon
    return this
  }

  needConfirm(needConfirm: boolean) {
    this.json['needConfirm'] = needConfirm
    return this
  }

  canAccessSuperData(canAccessSuperData: boolean) {
    this.json['canAccessSuperData'] = canAccessSuperData
    return this
  }

  strictMode(strictMode: boolean) {
    this.json['strictMode'] = strictMode
    return this
  }

  minLength(minLength: number) {
    this.json['minLength'] = minLength
    return this
  }

  maxLength(maxLength: number) {
    this.json['maxLength'] = maxLength
    return this
  }

  perPage(perPage: number) {
    this.json['perPage'] = perPage
    return this
  }

  columns(columns: object[]) {
    this.json['columns'] = columns
    return this
  }
}
