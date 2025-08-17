import Schema from './schema.js'

/**
 * Container
 * @docs https://baidu.github.io/amis/zh-CN/components/container
 */
export default class Container extends Schema<Container> {
  protected json: Record<string, any> = { type: 'container' }

  bodyClassName(name: string) {
    this.json['bodyClassName'] = name
    return this
  }

  wrapperComponent(component: string) {
    this.json['wrapperComponent'] = component
    return this
  }
  style(style: object) {
    this.json['style'] = style
    return this
  }

  body(body: object | string) {
    this.json['body'] = body
    return this
  }
}
