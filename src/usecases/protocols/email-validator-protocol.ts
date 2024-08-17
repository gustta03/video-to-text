/* eslint-disable @typescript-eslint/no-namespace */
export interface EmailValidator {
  isValid: (email: AddAccont.Param) => AddAccont.Response
}

export namespace AddAccont {
  export type Param = string
  export type Response = Boolean
}
