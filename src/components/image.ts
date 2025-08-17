import Schema from './schema.js'

/**
 * image
 * @docs https://baidu.github.io/amis/zh-CN/components/image
 */
export default class Image extends Schema<Image> {
  protected json: Record<string, any> = { type: 'image' }

  type(type: 'image' | 'static-image') {
    this.json['type'] = type
    return this
  }

  innerClassName(name: string) {
    this.json['innerClassName'] = name
    return this
  }

  imageClassName(name: string) {
    this.json['imageClassName'] = name
    return this
  }

  thumbClassName(name: string) {
    this.json['thumbClassName'] = name
    return this
  }

  height(height: number) {
    this.json['height'] = height
    return this
  }

  width(width: number) {
    this.json['width'] = width
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  imageCaption(caption: string) {
    this.json['imageCaption'] = caption
    return this
  }

  placeholder(placeholder: string) {
    this.json['placeholder'] = placeholder
    return this
  }

  defaultImage(src: string) {
    this.json['defaultImage'] = src
    return this
  }

  src(src: string) {
    this.json['src'] = src
    return this
  }

  href(href: object) {
    this.json['href'] = href
    return this
  }

  originalSrc(src: string) {
    this.json['originalSrc'] = src
    return this
  }

  enlargeAble(enlargeAble: boolean) {
    this.json['enlargeAble'] = enlargeAble
    return this
  }

  enlargeTitle(title: string) {
    this.json['enlargeTitle'] = title
    return this
  }

  enlargeCaption(caption: string) {
    this.json['enlargeCaption'] = caption
    return this
  }

  enlargeWithGallary(withGallary: boolean) {
    this.json['enlargeWithGallary'] = withGallary
    return this
  }

  thumbMode(mode: 'w-full' | 'h-full' | 'contain' | 'cover') {
    this.json['thumbMode'] = mode
    return this
  }

  thumbRatio(ratio: '1:1' | '4:3' | '16:9') {
    this.json['thumbRatio'] = ratio
    return this
  }

  imageMode(mode: 'original' | 'thumb') {
    this.json['imageMode'] = mode
    return this
  }

  showToolbar(showToolbar: boolean) {
    this.json['showToolbar'] = showToolbar
    return this
  }

  toolbarActions(actions: ImageAction[]) {
    this.json['toolbarActions'] = actions
    return this
  }

  maxScale(scale: number) {
    this.json['maxScale'] = scale
    return this
  }

  minScale(scale: number) {
    this.json['minScale'] = scale
    return this
  }
}

export class ImageAction extends Schema<ImageAction> {
  key(key: 'rotateRight' | 'rotateLeft' | 'zoomIn' | 'zoomOut' | 'scaleOrigin') {
    this.json['key'] = key
    return this
  }

  label(label: string) {
    this.json['label'] = label
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  iconClassName(className: string) {
    this.json['iconClassName'] = className
    return this
  }

  disabled(disabled: boolean) {
    this.json['disabled'] = disabled
    return this
  }
}
