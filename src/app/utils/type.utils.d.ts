export interface Mold {
  getType<T, U>(resouce: T, target: U): T & U
}