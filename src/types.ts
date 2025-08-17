export enum QueryType {
  gt = '>',
  lt = '<',
  eq = '=',
  like = '%s%',
  llike = '%s',
  rlike = 's%',
  between = 'between',
  orderBy = 'orderBy',
}

export type AdminConfig = {
  auth: {
    guard: string[]
    excepts: string[]
    permission: boolean
  }
  upload: {
    driver: string
    maxsize: string
    extnames: string[]
  }
  database: {
    connection: string
    user_table: string
    role_table: string
    menu_table: string
    permission_table: string
    user_role_table: string
    role_menu_table: string
    role_permission_table: string
    user_remember_me_table: string
  }
  client: {
    debug: boolean
    theme: string
    darkness: boolean
    brand: string
    logo: string
    router_mode: 'hash' | 'history' | 'memory'
    login_side_align: 'left' | 'right' | 'center'
    login_side_image: string
    login_default_remember: boolean
  }
  languages: string[]
}
