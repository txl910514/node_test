/**
 * Created by root on 14/09/16.
 */
var array=[1,4,5,2,8];


/*插入法*/
function insertionSort(array){
  if(Object.prototype.toString.call(array).slice(8,-1) === "Array"){
    for(var i=1;i<array.length;i++){
      var j=i-1;
      var key=array[  i];
      while(j>=0&& array[j]>key){
        array[j+1]=array[j];
        j--;
      }
      array[j+1]=key;
    }
    return array;
  }
  else{
    return "no array";
  }

}

console.log(insertionSort(array));
/*二分插入排序*/

/*选择排序*/

/*冒泡排序*/