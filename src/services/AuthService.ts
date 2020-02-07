import { AppConfig } from '@/config/AppConfig';
import { HttpClients } from '@/common/HttpClients';
import { LocalStorage } from '@/common/LocalStorage';

export const AuthService = {

  async login(userName: string, password: string) {
    const url = `${AppConfig.ServerUrl}/api/auth/login`;
    return HttpClients.post(url, { userName, password });
  },

  async logout() {
    LocalStorage.clear();

    const url = `${AppConfig.ServerUrl}/api/auth/logout`;
    return HttpClients.get(url);
  },

};
