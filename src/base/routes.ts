import router from '@adonisjs/core/services/router'
import HomeController from '#base/controllers/home_controller'
import UserController from '#base/controllers/user_controller'
import RoleController from '#base/controllers/role_controller'
import MenuController from '#base/controllers/menu_controller'
import LoginController from '#base/controllers/login_controller'
import PermissionController from '#base/controllers/permission_controller'

export default function routes(): Record<string, Function> {
  return {
    auth_home: () => router.resource('home', HomeController).as('auth_home'),
    auth_user: () => router.resource('auth/user', UserController).as('auth_user'),
    auth_role: () => router.resource('auth/role', RoleController).as('auth_role'),
    auth_menu: () => router.resource('auth/menu', MenuController).as('auth_menu'),
    auth_login: () => router.resource('auth/login', LoginController).as('auth_login'),
    auth_permission: () =>
      router.resource('auth/permission', PermissionController).as('auth_permission'),
  }
}
