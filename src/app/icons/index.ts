import { Injectable } from "@angular/core";

/* tslint:disable */
// tslint:disable-next-line
@Injectable()
class IconService {}

declare const require: any;
const requireAll = require.context('./svg', false, /\.svg$/)
/*
interface WebpackRequire {
  // (id: string): any;
  // (paths: string[], callback: (modules: any[]) => void): void;
  ensure(ids: string[], callback: (req: WebpackRequire) => void, chunkName?: string): void;
  context(directory: string, useSubDirectories?: boolean, regExp?: any): string;
}

interface WebpackContext extends WebpackRequire {
  keys(): string[];
}
*/
const iconMap = requireAll.keys().map(requireAll)
// tslint:disable-next-line

