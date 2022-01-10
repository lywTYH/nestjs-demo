/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as AV from 'leancloud-storage';
export class LeanCloudModule {
  constructor() {
    AV.init({
      appId: process.env.LEANCLOUD_APP_ID!,
      appKey: process.env.LEANCLOUD_APP_KEY!,
      masterKey: process.env.LEANCLOUD_APP_MASTER_KEY,
      serverURL: process.env.LEANCLOUD_API_HOST,
    });
    AV.setProduction(process.env.NODE_ENV === 'production');
  }
}
