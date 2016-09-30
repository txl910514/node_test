/**
 * Created by root on 15/08/16.
 */
//数组方法
var array=[[],2,[],4];
//reduce
var data_test = array.reduce(function(data, val,key,list){
  data['index'+val]=val;
  return data;
},{});
/*console.log(data_test);*/

//indexOf
/*console.log("found:", array.indexOf("3") != -1);*/

//filter
var newArr = array.filter(function(val,key,list){
  console.log(val);
  return val>1;
});
console.log(newArr);

//forEach
array.forEach(function(val,key,list){
/*  console.log(val,key,list);*/
});

//map
var oldArr=[{first_name:"atr",last_name:"prop"},{first_name:"did",last_name:"done"}];
var map_arr = oldArr.map(function(val,key,list){
  val.full_name = [val.first_name,val.last_name].join(" ");
  return val;
});
/*console.log(map_arr);*/

//some 任意一项返回true,则为true;
var someArr = array.some(function(val,key,list){
  return val>1;
});
/*console.log(someArr);*/

//every 全部返回true,则为true;
var everyArr = array.every(function(val,key,list){
  return val>1;
});
console.log(everyArr);




var arr=[5,6,7,8,9];
//Object.assign
var assign_test=Object.assign(data_test,arr.reduce(function(data, array_list){
  data['index'+array_list]=array_list;
  return data;
},{}));
/*
console.log(assign_test);*/
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
/*console.log(obj);
console.log(o1);*/


//九种数组排序
/*1.插入排序*/
/*从小到大*/
function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    for (var i = 1; i < array.length; i++) {
      var key = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}

/*从大到小*/
function insertionSort_d(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    for (var i = 1; i < array.length; i++) {
      var key = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] < key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}

/*console.log(insertionSort_d([1,2,4,3,5]));*/

/*2.二分插入排序*/
/*从小到大*/
function binaryInsertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    for (var i = 1; i < array.length; i++) {
      var key = array[i], left = 0, right = i - 1;
      while (left <= right) {
        var middle = parseInt((left + right) / 2);
        if (key < array[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j];
      }
      array[left] = key;
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}

function binaryInsertionSort_d(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    for (var i = 1; i < array.length; i++) {
      var key = array[i], left = 0, right = i - 1;
      while (left <= right) {
        var middle = parseInt((left + right) / 2);
        if (key > array[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j];
      }
      array[left] = key;
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}

/*console.log(binaryInsertionSort([5,1,2,2,1]));*/

/*3.选择排序*/
function selectionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    var len = array.length, temp;
    for (var i = 0; i < len - 1; i++) {
      var min = array[i];
      for (var j = i + 1; j < len; j++) {
        if (array[j] < min) {
          temp = min;
          min = array[j];
          array[j] = temp;
        }
      }
      array[i] = min;
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}

function selectionSort_d(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    var len = array.length, temp;
    for (var i = 0; i < len - 1; i++) {
      var max = array[i];
      for (var j = i + 1; j < len; j++) {
        if (array[j] > max) {
          temp = max;
          max = array[j];
          array[j] = temp;
        }
      }
      array[i] = max;
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}

/*console.log(selectionSort_d([5,1,4,2,13]));*/

/*冒泡排序*/
function bubbleSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    var len = array.length, temp;
    for (var i = 0; i < len - 1; i++) {
      for (var j = len - 1; j >= i; j--) {
        if (array[j] < array[j - 1]) {
          temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
        }
      }
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}

function bubbleSort_d(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    var len = array.length, temp;
    for (var i = 0; i < len - 1; i++) {
      for (var j = len - 1; j >= i; j--) {
        if (array[j] > array[j - 1]) {
          temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
        }
      }
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}

/*console.log(bubbleSort_d([5,1,4,2,13]));*/

/*快速排序*/
/*方法一*/
function quickSort(array, left, right) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
    if (left < right) {
      var x = array[right], i = left - 1, temp;
      for (var j = left; j <= right; j++) {
        if (array[j] <= x) {
          i++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      quickSort(array, left, i - 1);
      quickSort(array, i + 1, right);
    };
  } else {
    return 'array is not an Array or left or right is not a number!';
  }
}

function quickSort_d(array, left, right) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
    if (left < right) {
      var x = array[right], i = left - 1, temp;
      for (var j = left; j <= right; j++) {
        if (array[j] >= x) {
          i++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      quickSort_d(array, left, i - 1);
      quickSort_d(array, i + 1, right);
    };
  } else {
    return 'array is not an Array or left or right is not a number!';
  }
}

var aaa = [3, 5, 2, 9, 1];
quickSort(aaa, 0, aaa.length - 1);
/*console.log(aaa);*/

var bbb = [3, 5, 2, 9, 1];
quickSort_d(bbb, 0, bbb.length - 1);
/*console.log(bbb);*/

/*堆排序*/

/*方法说明：堆排序
 @param  array 待排序数组*/
function heapSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    //建堆
    var heapSize = array.length, temp;
    for (var i = Math.floor(heapSize / 2); i >= 0; i--) {
      heapify(array, i, heapSize);
    }

    //堆排序
    for (var j = heapSize - 1; j >= 1; j--) {
      temp = array[0];
      array[0] = array[j];
      array[j] = temp;
      heapify(array, 0, --heapSize);
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}


/*方法说明：维护堆的性质
 @param  arr 数组
 @param  x   数组下标
 @param  len 堆大小*/
function heapify(arr, x, len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
    var l = 2 * x, r = 2 * x + 1, largest = x, temp;
    console.log(x,l,r,largest);
    if (l < len && arr[l] > arr[largest]) {
      largest = l;
      console.log("left", arr[l]);
    }
    if (r < len && arr[r] > arr[largest]) {
      largest = r;
      console.log("right", arr[r]);
    }
    if (largest != x) {
      temp = arr[x];
      arr[x] = arr[largest];
      arr[largest] = temp;
      heapify(arr, largest, len);
    }
  } else {
    return 'arr is not an Array or x is not a number!';
  }
}

/*console.log(heapSort(["c", "b", "z", "f", "h"]));*/

/*从大到小*/
/*方法说明：堆排序
 @param  array 待排序数组*/
function heapSort_d(array) {
  if(array.length === 1){
    return array;
  }
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    //建堆
    var heapSize = array.length, temp;
    for (var i = Math.floor(heapSize / 2); i >= 0; i--) {
      heapify_d(array, i, heapSize);
    }

    //堆排序
    for (var j = heapSize - 1; j >= 1; j--) {
      temp = array[0];
      array[0] = array[j];
      array[j] = temp;
      heapify_d(array, 0, --heapSize);
    }
    return array;
  } else {
    return 'array is not an Array!';
  }
}


/*方法说明：维护堆的性质
 @param  arr 数组
 @param  x   数组下标
 @param  len 堆大小*/
function heapify_d(arr, x, len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
    var l = 2 * x, r = 2 * x + 1, largest = x, temp;
    if (l < len && arr[l] < arr[largest]) {
      largest = l;
    }
    if (r < len && arr[r] < arr[largest]) {
      largest = r;
    }
    if (largest != x) {
      temp = arr[x];
      arr[x] = arr[largest];
      arr[largest] = temp;
      heapify_d(arr, largest, len);
    }
  } else {
    return 'arr is not an Array or x is not a number!';
  }
}

/*console.log(heapSort_d([3]));*/

/*归并排序*/
function merge(left, right) {
  var re = [];
  console.log(left);
  console.log(right);
  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]) {
      re.push(left.shift());
    } else {
      re.push(right.shift());
    }
  }
  /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
  return re.concat(left).concat(right);
}

function mergeSort(array) {
  if(array.length == 1) return array;
  /* 首先将无序数组划分为两个数组 */
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  /* 递归分别对左右两部分数组进行排序合并 */
  return merge(mergeSort(left), mergeSort(right));
}
var a = [32, 24 ,18 ,15];
/*console.log(mergeSort(a));*/


/*从大到小*/
function merge_d(left, right) {
  var re = [];
  while(left.length > 0 && right.length > 0) {
    if(left[0] > right[0]) {
      re.push(left.shift());
    } else {
      re.push(right.shift());
    }
  }
  /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
  return re.concat(left).concat(right);
}

function mergeSort_d(array) {
  if(array.length == 1) return array;
  /* 首先将无序数组划分为两个数组 */
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  /* 递归分别对左右两部分数组进行排序合并 */
  return merge_d(mergeSort_d(left), mergeSort_d(right));
}
var b = [32, 24 ,18 ,15];
/*console.log(mergeSort_d(b));*/

/*桶排序*/

/*计数排序*/

function countingSort(array) {
  var max,len = array.length, B = [], C = [], min = max = array[0];
  for (var i = 0; i < len; i++) {
    min = min <= array[i] ? min : array[i];
    max = max >= array[i] ? max : array[i];
    C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
  }
  for (var j = min; j < max; j++) {
    C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }
  for (var k = len - 1; k >=0; k--) {
    B[C[array[k]] - 1] = array[k];
    C[array[k]]--;
  }
  return B;
}
console.log(countingSort(b));

