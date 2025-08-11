import Event from './event.js'

/**
 * schema base
 * @docs https://baidu.github.io/amis/zh-CN/docs/types/schemanode
 */
export default class Schema<T extends Schema<T>> {
  protected json: Record<string, any> = {}
  protected render: boolean = true

  static make<T extends Schema<T>>(this: new () => T): T {
    return new this()
  }

  id(id: string) {
    this.json['id'] = id
    return this
  }

  type(type: string) {
    this.json['type'] = type
    return this
  }

  style(style: Record<string, string>) {
    this.json['style'] = style
    return this
  }

  debug(debug: boolean) {
    this.json['debug'] = debug
    return this
  }

  className(name: string | Record<string, boolean>) {
    this.json['className'] = name
    return this
  }

  definitions(definitions: Record<string, object>) {
    this.json['definitions'] = definitions
    return this
  }

  onEvent(event: string, actions: Event[]) {
    if (!this.json['onEvent']) {
      this.json['onEvent'] = {}
    }
    if (!this.json['onEvent'][event]) {
      this.json['onEvent'][event] = {}
    }
    this.json['onEvent'][event]['actions'] = actions
    return this
  }

  toJSON(force: boolean = false): any {
    if (force) {
      return this.json
    }
    return this.render ? removePermission(this.json) : undefined
  }

  get(key: string) {
    let item = Object.assign(this.json, {})
    let keys = key.split('.')
    for (let i of keys) {
      item = item[i]
    }
    return item
  }

  find(id: string): any {
    return finder(this.json, id)
  }

  attr(type: string, value: any, mode: 'push' | 'unshift' | 'merge' | 'replace' = 'replace') {
    if (mode === 'push') {
      if (!this.json[type]) {
        this.json[type] = []
      }
      if (Array.isArray(value)) {
        this.json[type] = this.json[type].concat(value)
      } else {
        this.json[type].push(value)
      }
    } else if (mode === 'unshift') {
      if (!this.json[type]) {
        this.json[type] = []
      }
      if (Array.isArray(value)) {
        this.json[type] = value.concat(this.json[type])
      } else {
        this.json[type].unshift(value)
      }
    } else if (mode === 'merge') {
      if (!this.json[type]) {
        this.json[type] = {}
      }
      this.json[type] = Object.assign(this.json[type], value)
    } else {
      this.json[type] = value
    }
    return this
  }

  permission(render: boolean = true) {
    this.render = render
    return this
  }

  remove(key?: string) {
    key ? delete this.json[key] : (this.render = false)
    return this
  }
}

function removePermission(obj: Record<string, any>): Record<string, any> {
  for (let key in obj) {
    if (obj[key] instanceof Schema && obj[key].toJSON() === undefined) {
      delete obj[key]
    } else if (Array.isArray(obj[key])) {
      let removed: any[] = []
      obj[key].map((item) => {
        if (item instanceof Schema) {
          if (item.toJSON()) {
            removed.push(item)
          }
        } else {
          removed.push(item)
        }
      })
      obj[key] = removed
    }
  }
  return obj
}

function finder(obj: Record<string, any>, id: string): Schema<any> | any {
  for (let key in obj) {
    if (obj[key] instanceof Schema) {
      let json = obj[key].toJSON()
      if (json.id === id) {
        return obj[key]
      } else {
        let result = finder(json, id)
        if (result) {
          return result
        }
      }
    } else if (Array.isArray(obj[key])) {
      for (let item of obj[key]) {
        if (item instanceof Schema) {
          let json = item.toJSON()
          if (json.id === id) {
            return item
          } else {
            let result = finder(json, id)
            if (result) {
              return result
            }
          }
        }
      }
    }
  }
}
