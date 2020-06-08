import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,filterString:any): any {
    const resultArray = [];
    if(value.length === 0){
      return value;
    }
    if(!filterString) return value;

    filterString = filterString.toLowerCase();

    // return value.filter(data =>
    //   Object.keys(data).some(k => data[k].toLowerCase().includes(filterString.toLowerCase())));


    // for(const item of value){
    //   if(item['detectedstate'] === filterString){
    //     resultArray.push(item);
    //   }
    //   if(item['statecode'] === filterString){
    //     resultArray.push(item);
    //   }
    // }
    // return resultArray;

        // retrun the filtered array
        return value.filter(item => {
          if (item && item['detectedstate']) {
            return item['detectedstate'].toLowerCase().includes(filterString);
          }
          
        });

   
  }

}
