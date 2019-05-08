import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'example',
  // 如果管道只和参数有关，与外界变量无任何关系，请将管道设置为纯管道
  pure: true
})

export class ExamplePipe implements PipeTransform {
  transform(value, args?: any) {
    switch (value) {
      case 1:
        return '是'
      case 0:
        return '是'
    }
  }  
} 