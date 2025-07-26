import Schema from './schema.js'

/**
 * Tag
 * @docs https://baidu.github.io/amis/zh-CN/components/tag
 */
export default class Tag extends Schema<Tag> {
  protected json: Record<string, any> = { type: 'tag' }

  displayMode(displayMode: 'normal' | 'rounded' | 'status') {
    this.json['displayMode'] = displayMode
    return this
  }

  color(color: string | 'active' | 'inactive' | 'error' | 'success' | 'processing' | 'warning') {
    this.json['color'] = color
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

  closable(closable: boolean) {
    this.json['closable'] = closable
    return this
  }
}
