import Repository from '#core/src/repositories/repository'
import parser from '#core/src/builder/parser'
import amis from '#core/src/builder/amis'

export default class BuilderRepository extends Repository<BuilderRepository> {
  code(data: Record<string, any>) {
    return parser(JSON.parse(data.json))
  }

  json(data: Record<string, any>) {
    if (typeof amis === 'function') {
      try {
        /* eslint-disable no-eval */
        let code = eval(data.code)
        return JSON.stringify(code.toJSON())
      } catch (e) {
        return e.toString()
      }
    }
  }
}
