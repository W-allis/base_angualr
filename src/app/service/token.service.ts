import { Injectable } from '@angular/core';

const TokenKey = 'token'

@Injectable()
export class TokenService {
  
  constructor() {
  }

  getToken(): string|undefined {
    return localStorage.getItem(TokenKey)
  }

  setToken(value: string): void {
    localStorage.setItem(TokenKey, value)
  }

  removeToken(): void {
    localStorage.removeItem(TokenKey)
  }

}