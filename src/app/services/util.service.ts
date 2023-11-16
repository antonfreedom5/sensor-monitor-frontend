export class UtilService {
  public static createBasicAuthToken = (username: String, password: String): string =>  'Basic ' + window.btoa(username + ":" + password);
}
