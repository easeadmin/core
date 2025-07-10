import Schema from './schema.js'

/**
 * Breadcrumb
 * @docs https://baidu.github.io/amis/zh-CN/components/breadcrumb
 */
export default class Breadcrumb extends Schema<Breadcrumb> {
  protected json: Record<string, any> = { type: 'breadcrumb' }

  itemClassName(itemClassName: string) {
    this.json['itemClassName'] = itemClassName
    return this
  }

  separatorClassName(separatorClassName: string) {
    this.json['separatorClassName'] = separatorClassName
    return this
  }

  dropdownClassName(dropdownClassName: string) {
    this.json['dropdownClassName'] = dropdownClassName
    return this
  }

  dropdownItemClassName(dropdownItemClassName: string) {
    this.json['dropdownItemClassName'] = dropdownItemClassName
    return this
  }

  separator(separator: string) {
    this.json['separator'] = separator
    return this
  }

  labelMaxLength(maxLength: number) {
    this.json['labelMaxLength'] = maxLength
    return this
  }

  tooltipPosition(position: 'top' | 'bottom' | 'left' | 'right') {
    this.json['tooltipPosition'] = position
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  items(items: BreadcrumbItem[]) {
    this.json['items'] = items
    return this
  }
}

export class BreadcrumbItem extends Schema<BreadcrumbItem> {
  label(label: string) {
    this.json['label'] = label
    return this
  }

  href(href: string) {
    this.json['href'] = href
    return this
  }

  icon(icon: string, prefix = 'fa fa-') {
    this.json['icon'] = prefix + icon
    return this
  }

  dropdown(dropdown: BreadcrumbItem[]) {
    this.json['dropdown'] = dropdown
    return this
  }
}
