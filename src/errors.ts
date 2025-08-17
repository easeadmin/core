import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'

export class AdminException extends Exception {
  static status = 500
  static code = 'E_ADMIN_RUNTIME_EXCEPTION'
  async handle(error: this, ctx: HttpContext) {
    const status = error.status ?? 500
    const code = error.code ?? 'E_ADMIN_RUNTIME_EXCEPTION'
    const message = error.message ?? 'adin runtime exception'
    let respond = { status: status, code: code, msg: ctx.admin.t(code, error, message) }
    return ctx.response.json(respond)
  }
}

export function createAdminException(message: string, code: string, status: number = 500) {
  return new AdminException(message, { code, status })
}

export const E_ADMIN_PERMISSION_DENIED = createAdminException(
  'permission denied',
  'E_ADMIN_PERMISSION_DENIED'
)

export const E_ADMIN_HTTP_NOT_SUPPORT_METHOD = createAdminException(
  'not support method',
  'E_ADMIN_HTTP_NOT_SUPPORT_METHOD'
)

export const E_ADMIN_REPO_NOT_SUPPORT_METHOD = createAdminException(
  'not support method',
  'E_ADMIN_REPO_NOT_SUPPORT_METHOD'
)

export const E_ADMIN_INVALID_USER = createAdminException(
  'Update of this user is not allowed',
  'E_ADMIN_INVALID_USER'
)

export const E_ADMIN_INVALID_PASSWORD = createAdminException(
  'invlaid password',
  'E_ADMIN_INVALID_PASSWORD'
)

export const E_ADMIN_INVALID_UPLOAD_FILE = createAdminException(
  'invlaid upload file',
  'E_ADMIN_INVALID_UPLOAD_FILE'
)

export const E_ADMIN_INVALID_CAPTCHA = createAdminException(
  'invalid captcha',
  'E_ADMIN_INVALID_CAPTCHA'
)

export const E_ADMIN_LOGIN_FAILED = createAdminException(
  'username or password is incorrect',
  'E_ADMIN_LOGIN_FAILED'
)
