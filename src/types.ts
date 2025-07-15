export type AdminConfig = {
  brand: string
  logo: string
  auth: {
    guard: string[]
    excepts: string[]
    permission: boolean
  }
  client: {
    lang: string
    theme: string
    darkness: boolean
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
}

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

export type ApiResponse = {
  status: number
  data?: any
  msg: string
}
