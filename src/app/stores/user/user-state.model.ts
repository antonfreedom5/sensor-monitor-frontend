import { UserModel } from "../../pages/public/login/models/user.model";

export const USER_STATE_NAME = 'user';

export interface UserStateModel {
  userInfo: UserModel;
  basicAuthToken: string;
}
