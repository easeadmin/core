import Schema from './schema.js'

/**
 * QRCode
 * @docs https://baidu.github.io/amis/zh-CN/components/qr-code
 */
export default class QRCode extends Schema<QRCode> {
  protected json: Record<string, any> = { type: 'qr-code' }

  mode(mode: string) {
    this.json['mode'] = mode
    return this
  }

  qrcodeClassName(qrcodeClassName: string) {
    this.json['qrcodeClassName'] = qrcodeClassName
    return this
  }

  codeSize(codeSize: number) {
    this.json['codeSize'] = codeSize
    return this
  }

  backgroundColor(backgroundColor: string) {
    this.json['backgroundColor'] = backgroundColor
    return this
  }

  foregroundColor(foregroundColor: string) {
    this.json['foregroundColor'] = foregroundColor
    return this
  }

  level(level: string) {
    this.json['level'] = level
    return this
  }

  value(value: string) {
    this.json['value'] = value
    return this
  }

  imageSettings(imageSettings: ImageSettings) {
    this.json['imageSettings'] = imageSettings
    return this
  }

  eyeType(eyeType: string) {
    this.json['eyeType'] = eyeType
    return this
  }

  eyeBorderColor(eyeBorderColor: string) {
    this.json['eyeBorderColor'] = eyeBorderColor
    return this
  }

  eyeBorderSize(eyeBorderSize: string) {
    this.json['eyeBorderSize'] = eyeBorderSize
    return this
  }

  eyeInnerColor(eyeInnerColor: string) {
    this.json['eyeInnerColor'] = eyeInnerColor
    return this
  }

  pointType(pointType: string) {
    this.json['pointType'] = pointType
    return this
  }

  pointSize(pointSize: string) {
    this.json['pointSize'] = pointSize
    return this
  }

  pointSizeRandom(pointSizeRandom: boolean) {
    this.json['pointSizeRandom'] = pointSizeRandom
    return this
  }
}

export class ImageSettings extends Schema<ImageSettings> {
  src(src: string) {
    this.json['src'] = src
    return this
  }

  width(width: number) {
    this.json['width'] = width
    return this
  }

  height(height: number) {
    this.json['height'] = height
    return this
  }

  x(x: number) {
    this.json['x'] = x
    return this
  }

  y(y: number) {
    this.json['y'] = y
    return this
  }
}
