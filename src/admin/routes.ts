import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import AdminController from '#core/src/admin/controllers/admin_controller'
import UserController from '#core/src/admin/controllers/user_controller'
import RoleController from '#core/src/admin/controllers/role_controller'
import MenuController from '#core/src/admin/controllers/menu_controller'
import LoginController from '#core/src/admin/controllers/login_controller'
import BuilderController from '#core/src/admin/controllers/builder_controller'
import PermissionController from '#core/src/admin/controllers/permission_controller'

export default function routes(): Record<string, Function> {
  const system: Record<string, Function> = {
    auth_home: () => router.resource('auth/home', AdminController).as('auth_home'),
    auth_user: () => router.resource('auth/user', UserController).as('auth_user'),
    auth_role: () => router.resource('auth/role', RoleController).as('auth_role'),
    auth_menu: () => router.resource('auth/menu', MenuController).as('auth_menu'),
    auth_login: () => router.resource('auth/login', LoginController).as('auth_login'),
    auth_permission: () =>
      router.resource('auth/permission', PermissionController).as('auth_permission'),
  }

  if (app.inDev) {
    system['auth_builder'] = () =>
      router.resource('auth/builder', BuilderController).as('auth_builder')
  }

  return system
}
