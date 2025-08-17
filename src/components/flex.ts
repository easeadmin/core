import Schema from './schema.js'

/**
 * Flex
 * @docs https://baidu.github.io/amis/zh-CN/components/flex
 */
export default class Flex extends Schema<Flex> {
  protected json: Record<string, any> = { type: 'flex' }

  justify(
    justify:
      | 'start'
      | 'flex-start'
      | 'center'
      | 'end'
      | 'flex-end'
      | 'space-around'
      | 'space-between'
      | 'space-evenly'
  ) {
    this.json['justify'] = justify
    return this
  }

  alignItems(
    alignItems: 'stretch' | 'start' | 'flex-start' | 'flex-end' | 'end' | 'center' | 'baseline'
  ) {
    this.json['alignItems'] = alignItems
    return this
  }

  items(items: object[]) {
    this.json['items'] = items
    return this
  }
}
