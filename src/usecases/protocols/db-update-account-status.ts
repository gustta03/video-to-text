/* eslint-disable @typescript-eslint/no-namespace */
export interface IUpdateAccountStatus {
  update: (param: updateById.Param) => Promise<void>;
}

export namespace updateById {
  export type Param = {
    email: string;
    status: string;
    eventType: string;
  };

  export type Respose = {
    _id: string;
  };
}
