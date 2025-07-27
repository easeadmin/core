import router from '@adonisjs/core/services/router'
import AdminController from './controllers/admin_controller.js'
import UserController from './controllers/user_controller.js'
import RoleController from './controllers/role_controller.js'
import MenuController from './controllers/menu_controller.js'
import LoginController from './controllers/login_controller.js'
import PermissionController from './controllers/permission_controller.js'

export default function routes(): Record<string, Function> {
  return {
    auth_home: () => router.resource('auth/home', AdminController).as('auth_home'),
    auth_user: () => router.resource('auth/user', UserController).as('auth_user'),
    auth_role: () => router.resource('auth/role', RoleController).as('auth_role'),
    auth_menu: () => router.resource('auth/menu', MenuController).as('auth_menu'),
    auth_login: () =>
      router
        .resource('auth/login', LoginController)
        .as('auth_login')
        .only(['index', 'show', 'store']),
    auth_permission: () =>
      router.resource('auth/permission', PermissionController).as('auth_permission'),
  }
}
