import * as fs from 'ts-xlsx'
import { mold } from './type.utils'
console.log(fs)
export const mock = {
    readFile(path) {
      if (mold.getType(path) === 'string') path = [path]
      path.forEach(_path => {
        // const context = fs.(_path)
        // console.log(context)
      })
    }
}