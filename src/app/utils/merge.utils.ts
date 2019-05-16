import { mold } from './type.utils'

interface Tree {
  key: string,
  value?: boolean|RegExp|string|number|Function|any[]|null|undefined
  child?: Tree[]
  type: string
}

const gt = mold.getType

function complier(obj: { [key: string]: any }): Tree[] {
  return Object.keys(obj).map((_key: string): Tree => gt(obj[_key]) === 'object' ? 
    { key: _key, child: complier(obj[_key]), type: gt(obj[_key]) } :
    { key: _key, value: obj[_key], type: gt(obj[_key]) })
}

function generate(oldValue: Tree[], newValue: Tree[]): Tree[] {
  const subs: Tree[] = []

  oldValue.concat(newValue).forEach((item: Tree) => {
    const index = subs.findIndex(sub => sub.key === item.key)
    
    if (index === -1) 
      subs.push(item)	
    
    if (index > -1 && subs[index].type === 'array' && item.type === 'array') 
      (<any[]>(subs[index].value)).push.apply(subs[index].value, item.value)
    
    if (index > -1 && subs[index].type === 'object' && item.type === 'object') 
      subs[index].child = generate(subs[index].child, item.child)
    
    if (index > -1) 
      subs.splice(index, 1, item)
  })
  
  return subs
}

function analyze<T>(arr: Tree[]): T {
  let output: {} = { }
  
  arr.forEach(item => {
    output[item.key] = item.type === 'object' ? analyze<T>(item.child) : item.value})

  return <T>output
}

export const merge = {
  assign: function <T, U>(resource: T, target: U): T & U {
		return analyze<T & U>(generate(complier(resource), complier(target)))
  }
}
