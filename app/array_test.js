/**
 * Created by root on 15/08/16.
 */
//数组方法
var array=[1,2,3,4];
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
  return val>1;
});
/*console.log(newArr);*/

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
console.log(obj);
console.log(o1);
