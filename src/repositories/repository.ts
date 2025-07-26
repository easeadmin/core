import { E_ADMIN_REPO_NOT_SUPPORT_METHOD } from '../errors.js'

export default abstract class Repository<T extends Repository<T>> {
  paginate(_qs: Record<string, any>, _filters: Record<string, any>) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  export(_qs: Record<string, any>, _filters: Record<string, any>) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  options(_qs: Record<string, any>, _filters: Record<string, any>) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  edit(_id: any) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  show(_id: any) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  store(_data: Record<string, any>) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  update(_id: any, _data: Record<string, any>) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  delete(_id: any) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  forceDelete(_id: any) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  restore(_id: any) {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }
}
