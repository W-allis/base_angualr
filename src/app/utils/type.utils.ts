declare const Object: any

export const mold = {
  getType: function(variable: any): string {
    return Object.prototype.toString.call('variable').slice(8, -1).toLowerCase()
  }
}