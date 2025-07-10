import Schema from './schema.js'

/**
 * Property
 * @docs
 */
export default class Property extends Schema<Property> {
  protected json: Record<string, any> = { type: 'property' }

  labelStyle(labelStyle: object) {
    this.json['labelStyle'] = labelStyle
    return this
  }

  contentStyle(contentStyle: object) {
    this.json['contentStyle'] = contentStyle
    return this
  }

  column(column: number) {
    this.json['column'] = column
    return this
  }

  mode(mode: string) {
    this.json['mode'] = mode
    return this
  }

  separator(separator: string) {
    this.json['separator'] = separator
    return this
  }

  title(title: string) {
    this.json['title'] = title
    return this
  }

  source(source: string) {
    this.json['source'] = source
    return this
  }

  items(items: PropertyItem[]) {
    this.json['items'] = items
    return this
  }
}

export class PropertyItem extends Schema<PropertyItem> {
  label(label: string) {
    this.json['label'] = label
    return this
  }

  content(content: string) {
    this.json['content'] = content
    return this
  }

  span(span: string) {
    this.json['span'] = span
    return this
  }

  visibleOn(visibleOn: string) {
    this.json['visibleOn'] = visibleOn
    return this
  }

  hiddenOn(hiddenOn: string) {
    this.json['hiddenOn'] = hiddenOn
    return this
  }
}
