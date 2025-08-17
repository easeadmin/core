import Schema from './schema.js'
import Badge from './badge.js'

/**
 * Avatar
 * @docs https://baidu.github.io/amis/zh-CN/components/avatar
 */
export default class Avatar extends Schema<Avatar> {
  protected json: Record<string, any> = { type: 'avatar' }

  badge(badge: Badge) {
    this.json['badge'] = badge
    return this
  }

  fit(fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down') {
    this.json['fit'] = fit
    return this
  }

  src(src: string) {
    this.json['src'] = src
    return this
  }

  defaultAvatar(defaultAvatar: string) {
    this.json['defaultAvatar'] = defaultAvatar
    return this
  }

  text(text: string) {
    this.json['text'] = text
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  shape(shape: 'circle' | 'square' | 'rounded') {
    this.json['shape'] = shape
    return this
  }

  size(size: number | 'default' | 'normal' | 'small') {
    this.json['size'] = size
    return this
  }

  gap(gap: number) {
    this.json['gap'] = gap
    return this
  }

  alt(alt: string) {
    this.json['alt'] = alt
    return this
  }

  draggable(draggable: boolean) {
    this.json['draggable'] = draggable
    return this
  }

  crossOrigin(crossOrigin: string) {
    this.json['crossOrigin'] = crossOrigin
    return this
  }

  onError(actions: string) {
    this.json['onError'] = actions
    return this
  }
}
