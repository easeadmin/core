import Api from './api.js'
import FormItem from './form_item.js'

/**
 * InputFile
 * @docs https://baidu.github.io/amis/zh-CN/components/form/input-file
 */
export default class InputFile extends FormItem {
  protected json: Record<string, any> = { type: 'input-file' }

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

  asBase64(asBase64: boolean) {
    this.json['asBase64'] = asBase64
    return this
  }

  asBlob(asBlob: boolean) {
    this.json['asBlob'] = asBlob
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

  drag(drag: boolean) {
    this.json['drag'] = drag
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

  stateTextMap(stateTextMap: object) {
    this.json['stateTextMap'] = stateTextMap
    return this
  }

  fileField(fileField: string) {
    this.json['fileField'] = fileField
    return this
  }

  nameField(nameField: string) {
    this.json['nameField'] = nameField
    return this
  }

  valueField(valueField: string) {
    this.json['valueField'] = valueField
    return this
  }

  urlField(urlField: string) {
    this.json['urlField'] = urlField
    return this
  }

  btnLabel(btnLabel: string) {
    this.json['btnLabel'] = btnLabel
    return this
  }

  downloadUrl(downloadUrl: string) {
    this.json['downloadUrl'] = downloadUrl
    return this
  }

  useChunk(useChunk: boolean) {
    this.json['useChunk'] = useChunk
    return this
  }

  chunkSize(chunkSize: number) {
    this.json['chunkSize'] = chunkSize
    return this
  }

  startChunkApi(startChunkApi: string | Record<string, any> | Api) {
    this.json['startChunkApi'] = startChunkApi
    return this
  }

  chunkApi(chunkApi: string | Record<string, any> | Api) {
    this.json['chunkApi'] = chunkApi
    return this
  }

  finishChunkApi(finishChunkApi: string | Record<string, any> | Api) {
    this.json['finishChunkApi'] = finishChunkApi
    return this
  }

  concurrency(concurrency: number) {
    this.json['concurrency'] = concurrency
    return this
  }

  documentation(documentation: string) {
    this.json['documentation'] = documentation
    return this
  }

  documentLink(documentLink: string) {
    this.json['documentLink'] = documentLink
    return this
  }

  initAutoFill(initAutoFill: boolean) {
    this.json['initAutoFill'] = initAutoFill
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
