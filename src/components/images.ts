import Image from './image.js'

/**
 * Images
 * @docs https://baidu.github.io/amis/zh-CN/components/images
 */
export default class Images extends Image {
  protected json: Record<string, any> = { type: 'images' }

  value(value: string | any[]) {
    this.json['value'] = value
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  delimiter(delimiter: string) {
    this.json['delimiter'] = delimiter
    return this
  }

  sortType(
    sortType:
      | 'sm-ss-sss-m'
      | 'sss-ss-ms-m'
      | 'sms-ss-sms-m'
      | 'sm-ss-sss-ss'
      | 'ms-ss-sss-ss'
      | 'sss-ss-sm-ss'
      | 'mss-ss-ssm-ss'
      | 'sss-ss-mm-ss'
      | `even-${number}-${number}`
  ) {
    this.json['sortType'] = sortType
    return this
  }

  hoverMode(
    hoverMode:
      | 'hover-slide'
      | 'pull-top'
      | 'scale-center'
      | 'scale-top'
      | 'text-style-1'
      | 'text-style-2'
      | 'text-style-3'
      | 'text-style-4'
      | 'text-style-5'
      | 'text-style-6'
      | 'text-style-7'
  ) {
    this.json['hoverMode'] = hoverMode
    return this
  }

  fontStyle(fontStyle: { fontSize?: string; color?: string; fontFamily?: string }) {
    this.json['fontStyle'] = fontStyle
    return this
  }

  maskColor(maskColor: string) {
    this.json['maskColor'] = maskColor
    return this
  }

  displayMode(displayMode: 'thumb' | 'full') {
    this.json['displayMode'] = displayMode
    return this
  }

  fullThumbMode(fullThumbMode: 'cover' | 'contain') {
    this.json['fullThumbMode'] = fullThumbMode
    return this
  }
}
