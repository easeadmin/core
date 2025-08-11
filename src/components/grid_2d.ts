import Schema from './schema.js'

/**
 * Grid2d
 * @docs https://baidu.github.io/amis/zh-CN/components/grid-2d
 */
export default class Grid2d extends Schema<Grid2d> {
  protected json: Record<string, any> = { type: 'grid-2d' }

  gridClassName(gridClassName: string) {
    this.json['gridClassName'] = gridClassName
    return this
  }

  gap(gap: number | string) {
    this.json['gap'] = gap
    return this
  }

  cols(cols: number) {
    this.json['cols'] = cols
    return this
  }

  rowHeight(rowHeight: number) {
    this.json['rowHeight'] = rowHeight
    return this
  }

  rowGap(rowGap: number | string) {
    this.json['rowGap'] = rowGap
    return this
  }

  grids(grids: object[]) {
    this.json['grids'] = grids
    return this
  }
}
