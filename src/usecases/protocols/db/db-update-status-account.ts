/* eslint-disable @typescript-eslint/no-namespace */
export interface UpdateAccountStatusRepo {
  updateById: (param: UpdateById.Param) => Promise<any>;
}

export namespace UpdateById {
  export type Param = {
    userId: string;
    status: string;
  };

  export type Respose = {
    _id: string;
    userId: string;
    videoTitle: string;
    thumb: string;
    dateViewed: Date;
  };
}
