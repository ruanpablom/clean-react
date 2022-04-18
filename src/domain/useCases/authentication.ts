import { AccountModel } from '../models/account-model'

type AuthenticatioParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (params: AuthenticatioParams): Promise<AccountModel>
}
