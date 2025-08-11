import Repository from 'easeadmin/repositories/repository'
import parser from 'easeadmin/builder/parser'
import amis from 'easeadmin/builder/amis'

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
