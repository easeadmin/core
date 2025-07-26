import Api from './api.js'
import FormItem from './form_item.js'
import Schema from './schema.js'

/**
 * InputImage
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-image
 */
export default class InputImage extends FormItem {
  protected json: Record<string, any> = { type: 'input-image' }

  receiver(receiver: string | Record<string, any> | Api) {
    this.json['receiver'] = receiver
    return this
  }

  accept(accept: string) {
    this.json['accept'] = accept
    return this
  }
  capture(capture: string) {
    this.json['capture'] = capture
    return this
  }

  maxSize(maxSize: number) {
    this.json['maxSize'] = maxSize
    return this
  }

  maxLength(maxLength: number) {
    this.json['maxLength'] = maxLength
    return this
  }
  multiple(multiple: boolean) {
    this.json['multiple'] = multiple
    return this
  }
  joinValues(joinValues: boolean) {
    this.json['joinValues'] = joinValues
    return this
  }

  extractValue(extractValue: boolean) {
    this.json['extractValue'] = extractValue
    return this
  }

  delimiter(delimiter: string) {
    this.json['delimiter'] = delimiter
    return this
  }

  autoUpload(autoUpload: boolean) {
    this.json['autoUpload'] = autoUpload
    return this
  }

  hideUploadButton(hideUploadButton: boolean) {
    this.json['hideUploadButton'] = hideUploadButton
    return this
  }

  fileField(fileField: string) {
    this.json['fileField'] = fileField
    return this
  }

  crop(crop: boolean | object) {
    this.json['crop'] = crop
    return this
  }

  cropFormat(cropFormat: string) {
    this.json['cropFormat'] = cropFormat
    return this
  }

  cropQuality(cropQuality: number) {
    this.json['cropQuality'] = cropQuality
    return this
  }

  limit(limit: Limit) {
    this.json['limit'] = limit
    return this
  }

  frameImage(frameImage: string) {
    this.json['frameImage'] = frameImage
    return this
  }

  fixedSize(fixedSize: boolean) {
    this.json['fixedSize'] = fixedSize
    return this
  }

  fixedSizeClassName(fixedSizeClassName: string) {
    this.json['fixedSizeClassName'] = fixedSizeClassName
    return this
  }

  initAutoFill(initAutoFill: boolean) {
    this.json['initAutoFill'] = initAutoFill
    return this
  }

  uploadBtnText(uploadBtnText: string) {
    this.json['uploadBtnText'] = uploadBtnText
    return this
  }

  dropCrop(dropCrop: boolean) {
    this.json['dropCrop'] = dropCrop
    return this
  }

  initCrop(initCrop: boolean) {
    this.json['initCrop'] = initCrop
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  draggableTip(draggableTip: string) {
    this.json['draggableTip'] = draggableTip
    return this
  }

  showErrorModal(showErrorModal: boolean) {
    this.json['showErrorModal'] = showErrorModal
    return this
  }

  invalidTypeMessage(invalidTypeMessage: string) {
    this.json['invalidTypeMessage'] = invalidTypeMessage
    return this
  }

  invalidSizeMessage(invalidSizeMessage: string) {
    this.json['invalidSizeMessage'] = invalidSizeMessage
    return this
  }
}

export class Limit extends Schema<Limit> {
  width(width: number) {
    this.json['width'] = width
    return this
  }

  height(height: number) {
    this.json['height'] = height
    return this
  }

  minWidth(minWidth: number) {
    this.json['minWidth'] = minWidth
    return this
  }

  minHeight(minHeight: number) {
    this.json['minHeight'] = minHeight
    return this
  }

  maxWidth(maxWidth: number) {
    this.json['maxWidth'] = maxWidth
    return this
  }

  maxHeight(maxHeight: number) {
    this.json['maxHeight'] = maxHeight
    return this
  }

  aspectRatio(aspectRatio: number) {
    this.json['aspectRatio'] = aspectRatio
    return this
  }
}
