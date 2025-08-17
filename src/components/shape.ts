import Schema from './schema.js'

/**
 * Shape
 * @docs https://baidu.github.io/amis/zh-CN/components/shape
 */
export default class Shape extends Schema<Shape> {
  protected json: Record<string, any> = { type: 'shape' }

  shapeType(shapeType: ShapeType) {
    this.json['shapeType'] = shapeType
    return this
  }

  color(color: string) {
    this.json['color'] = color
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

  radius(radius: number) {
    this.json['radius'] = radius
    return this
  }
}

export enum ShapeType {
  'square' = 'square',
  'triangle' = 'triangle',
  'right-triangle' = 'right-triangle',
  'rectangle' = 'rectangle',
  'convex-arc-rectangle' = 'convex-arc-rectangle',
  'concave-arc-rectangle' = 'concave-arc-rectangle',
  'double-convex-arc-rectangle' = 'double-convex-arc-rectangle',
  'double-concave-arc-rectangle' = 'double-concave-arc-rectangle',
  '	barrel-rectangle' = '	barrel-rectangle',
  'rhombus' = 'rhombus',
  'parallelogram' = 'parallelogram',
  'rectangle-1' = 'rectangle-1',
  'rectangle-2' = 'rectangle-2',
  'rectangle-3' = 'rectangle-3',
  'heart' = 'heart',
  'pentagon' = 'pentagon',
  'hexagon' = 'hexagon',
  'octagon' = 'octagon',
  'star' = 'star',
  'hexagon-star' = 'hexagon-star',
  'circle' = 'circle',
  'arrow' = 'arrow',
}
