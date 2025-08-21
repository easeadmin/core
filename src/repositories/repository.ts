import { E_ADMIN_REPO_NOT_SUPPORT_METHOD } from '../errors.js'

export default abstract class Repository<T extends Repository<T>> {
  async paginate(_qs: Record<string, any>, _filters: Record<string, any>): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async export(_qs: Record<string, any>, _filters: Record<string, any>): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async options(_qs: Record<string, any>, _filters: Record<string, any>): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async edit(_id: any): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async show(_id: any): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async store(_data: Record<string, any>): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async update(_id: any, _data: Record<string, any>): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async delete(_id: any): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async forceDelete(_id: any): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }

  async restore(_id: any): Promise<any> {
    throw E_ADMIN_REPO_NOT_SUPPORT_METHOD
  }
}
