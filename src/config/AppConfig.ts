import { HttpClients } from '@/common/HttpClients';

export class AppConfig {

  public static readonly ServerUrl = 'http://localhost:8000';

  private static _token : string;
  public static get Token() : string {
    return this._token;
  }
  public static set Token(v : string) {
    this._token = v;
  }

  public static init() {
    HttpClients.registRequestInterceptor(() => {
      return {
        headers: {
          'access-token': this.Token,
        },
      };
    });
  }

}

AppConfig.init();
