/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as AV from 'leancloud-storage';

export class LeancloudSchema<T> {
  private _className: string;
  constructor(className: string) {
    this._className = className;
  }
  query(queryParams?: object) {
    return new AV.Query(this._className);
  }
}
