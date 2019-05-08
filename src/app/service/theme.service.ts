export class ThemeService {
  private _themeColor: string;
  
  constructor() {}

  set themeColor(color: string) {
    this._themeColor = color
  }

  get themeColor() {
    return this._themeColor 
  }
}