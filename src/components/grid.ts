import Schema from './schema.js'

/**
 * Grid
 * @docs https://baidu.github.io/amis/zh-CN/components/grid
 */
export default class Grid extends Schema<Grid> {
  protected json: Record<string, any> = { type: 'grid' }

  gap(gap: 'xs' | 'sm' | 'base' | 'none' | 'md' | 'lg') {
    this.json['gap'] = gap
    return this
  }

  valign(valign: 'top' | 'middle' | 'bottom' | 'between') {
    this.json['valign'] = valign
    return this
  }

  align(align: 'left' | 'right' | 'between' | 'center') {
    this.json['align'] = align
    return this
  }

  columns(columns: object[]) {
    this.json['columns'] = columns
    return this
  }
}

export class GridItem extends Schema<GridItem> {
  protected json: Record<string, any> = {}
  xs(xs: number | 'auto') {
    this.json['xs'] = xs
    return this
  }

  sm(sm: number | 'auto') {
    this.json['sm'] = sm
    return this
  }

  md(md: number | 'auto') {
    this.json['md'] = md
    return this
  }

  lg(lg: number | 'auto') {
    this.json['lg'] = lg
    return this
  }

  valign(valign: 'top' | 'middle' | 'bottom' | 'between') {
    this.json['valign'] = valign
    return this
  }

  columnClassName(className: string) {
    this.json['columnClassName'] = className
    return this
  }

  body(body: any) {
    this.json['body'] = body
    return this
  }
}
