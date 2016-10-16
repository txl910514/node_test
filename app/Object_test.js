/**
 * Created by root on 15/10/16.
 */
/*var a = new Object;
var b = new Object;
var c = new Object;
c[a]=a;
c[b]=b;
console.log(c[a]===a);
console.log(a.toString());
console.log(b);
console.log(c);*/


/*var a = {};
var b = {};
var c = {};
c.a=a;
c.b=b;
console.log(c[a]===a);*/

/*var a = {};
var b = {};
var c = {
  a:a,
  b:b
};

console.log(c.a===a);*/

/*var a = {};
var b = {};
var c = {};
c["a"]=a;
c["b"]=b;
alert(c.a===a);*/

// 对象实例的属性和方法
// constructor属性

/**
 * constructor属性是保存当前对象的构造函数，前面的例子中，constructor保存的就是Object方法。
 * */

/*var obj1 = new Object();
obj1.id = "obj1";
var obj2 = {
  "id": "obj2"
};

console.log(obj1.constructor);//function Object(){}
console.log(obj2.constructor);//function Object(){}*/

// hasOwnProperty(propertyName)方法 判断对象是否拥有一个指定名称的实例属性(非继承)

/**
 * hasOwnProperty方法接收一个字符串参数，该参数表示属性名称，用来判断该属性是否在当前对象实例中，而不是在对象的原型链中。我们来看看下面这个例子：
 * 在这个例子中，首先通过定义了一个数组对象的实例arr，我们知道数组对象实际是通过原型链继承了Object对象，然后拥有自己的一些属性，我们通过
 * hasOwnProperty方法判断length是arr自己的属性，而hasOwnProperty是在原型链上的属性。hasOwnProperty方法可以和for..in结合起来获取对象自己的key。
 * */

/*var arr = [];
console.log(arr.hasOwnProperty("length"));//true
console.log(arr.hasOwnProperty("hasOwnProperty"));//false*/


/*// 1.Object对象
var o = new Object();
o.name = '自定义属性'; // 定义一个实例属性
console.log(o.hasOwnProperty('name')); // => true：name属性为实例o自己定义的，而非继承
console.log(o.hasOwnProperty('toString')); // => false：toString为继承属性

// 2.自定义对象
var Student = function (name) {
  this.name = name;
};
// 给Student的原型添加一个sayHello方法
Student.prototype.sayHello = function () {
  alert('Hello,' + this.name);
}
// 给Student的原型添加一个age属性
Student.prototype.age = '';

var st = new Student('张三'); // 初始化对象st
console.log(st.hasOwnProperty('name')); // => true ：调用构造函数时，通过this.name附加到实例对象上
console.log(st.hasOwnProperty('sayHello')); // => false ：sayHello方法为原型上的成员
console.log(st.hasOwnProperty('age')); // => false ：age属性为原型上的成员*/

// isPrototypeOf(Object)方法  判断某个原型是否出现在对象的原型链中

/**
 * isPrototype方法接收一个对象，用来判断当前对象是否在传入的参数对象的原型链上，说起来有点抽象，我们来看看代码。
 * 我们知道MyObject是继承自Object对象的，而在JS中，继承是通过prototype来实现的，所以Object的prototype必定在MyObject对象实例的原型链上。
 * */

/*
function MyObject() {}
var obj = new MyObject();
console.log(Object.prototype.isPrototypeOf(obj));*/


/*// 1.Obejct对象
var o = new Object();
console.log(Object.prototype.isPrototypeOf(o)); // => true ：o为Obejct一个对象

// 2.Array
var array = [1, 2, 3];
console.log(Array.prototype.isPrototypeOf(array)); // => true ：数组原型
console.log(Object.prototype.isPrototypeOf(array)); // => true ：Object是所有对象的基原型

// 3.自定义对象
var People = function () {
}
var Student = function () {
}
// 设置Student类的原型为People
Student.prototype = new People();
var st = new Student();
console.log(Student.prototype.isPrototypeOf(st)); // => true ：st为Student一个对象
console.log(People.prototype.isPrototypeOf(st)); // => true ：Student的原型为People
console.log(Object.prototype.isPrototypeOf(st)); // =>true ：Object是所有对象的基原型*/


// propertyIsEnumerable(prototypeName)方法  判断指定名称的属性是否为实例属性并且是可枚举的(可用for/in循环枚举)

/**
 * prototypeIsEnumerable用来判断给定的属性是否可以被for..in语句给枚举出来。看下面代码：
 * 执行这段代码输出字符串“name”，这就说明通过for…in语句可以得到obj的name这个属性，但是我们知道，obj的属性还有很多，比如constructor，
 * 比如hasOwnPrototype等等，但是它们没有被输出，说明这些属性不能被for…in给枚举出来，可以通过propertyIsEnumerable方法来得到。
 * */

/*var obj = {
  name: "objName"
}
for (var i in obj) {
  console.log(i);
}

console.log(obj.propertyIsEnumerable("constructor"));//false*/


/*// 1.Array对象
var array = [1, 2, 3];
array.name = 'Array';
console.log(array.propertyIsEnumerable('name')); // => true ：name属性为实例属性
console.log(array.propertyIsEnumerable('join')); // => false ：join方法继承自Array
console.log(array.propertyIsEnumerable('length')); // => false ：length属性继承自Array
console.log(array.propertyIsEnumerable('toString')); // => false ：toString方法继承自Object

// 2.自定义对象
var Student = function (name) {
  this.name = name;
}
// 定义一个原型方法
Student.prototype.sayHello = function () {
  alert('Hello' + this.name);
};
var a = new Student('tom');
console.log(a.propertyIsEnumerable('name')); // => true ：name为自身定义的实例属性
console.log(a.propertyIsEnumerable('age')); // => false ：age属性不存在，也返回false
console.log(a.propertyIsEnumerable('sayHello')); // => false ：sayHello属于原型方法*/

// toLocaleString()方法 返回当前对象的一个本地化的字符串表示

/**
 * toLocalString方法返回对象的字符串表示，和代码的执行环境有关。
 * */

/*var obj = {};
console.log(obj.toLocaleString());//[object Object]

var date = new Date();
console.log(date.toLocaleString());//2016/2/28 下午1:39:27*/

// toString()方法  返回当前对象的一个字符串表示形式

/*toString用来返回对象的字符串表示。*/

/*var obj = {};
console.log(obj.toString());//[object Object]

var date = new Date();
console.log(date.toString());//Sun Feb 28 2016 13:40:36 GMT+0800 (中国标准时间)*/


// valueOf()方法  返回当前对象的原始值

/*valueOf方法返回对象的原始值，可能是字符串、数值或bool值等，看具体的对象。*/

/*var obj = {
  name: "obj"
};
console.log(obj.valueOf());//Object {name: "obj"}

var arr = [1];
console.log(arr.valueOf());//[1]

var date = new Date();
console.log(date.valueOf());//1456638436303*/


// 属性的类型

/**
 * 在Javascript中，属性有两种类型，分别是数据属性和访问器属性，我们来看看这两种属性具体是什么东西。
 数据属性
 数据属性我们可以理解为我们平时定义对象时赋予的属性，它可以进行读和写。但是，ES5中定义了一些特性，这些特性是用来描述属性的各种特征，特性是内部值，
 不能直接访问到。特性通过用两对方括号表示，比如[[Enumerable]]。属性的特性会有一些默认值，要修改特性的默认值，
 必须使用ES5定义的新方法Object.defineProperty方法来修改。
 数据属性有4个描述其特征的特性，下面将依次说明每一个特性：
 * */

// （1）[[Configurable]]：该特性表示是否可以通过delete操作符来删除属性，默认值是true。

/*var obj = {};
obj.name = "myname";

delete obj.name;
console.log(obj.name);//undefined*/

/*
* 这段代码很明显，通过delete删除了obj的name属性后，我们再访问name属性就访问不到了。
 我们通过Object.defineProperty方法来修改[[Configurable]]特性。
 */

/*
var obj = {};
obj.name = "myname";
Object.defineProperty(obj, "name", {
  configurable: false
})

delete obj.name;
console.log(obj.name);//myname*/

/*（2）[[Enumerable]]：表示是否能够通过for…in语句来枚举出属性，默认是true*/

/*var obj = {
  name: "objName"
};
Object.defineProperty(obj, "constructor", {
  enumerable: true
});

for (var i in obj) {
  console.log(i);//name,constructor
}
console.log(obj.propertyIsEnumerable("constructor"));//true*/

/**
 * （3）[[Writable]]：表示属性值是否可以修改，默认为true
 如果[[Writable]]被设置成false，尝试修改时将没有效果，在严格模式下会报错
 （4）[[Value]]：表示属性的值，默认为undefined
 * */

/*
var obj = {
  name: "name"
};
console.log(obj.name);//name

Object.defineProperty(obj, "name", {
  value: "newValue",
  writable: false
})
console.log(obj.name);//newValue

obj.name = "oldValue";
console.log(obj.name);//newValue*/

/**
 * 我们首先定义了obj对象的name属性值为“name”，然后通过defineProperty方法来修改值，并且将其设置为不可修改的。接着我们再修改name属性的值，可以发现修改无效。
 如果我们通过defineProperty来修改name属性的值，是否可以修改呢？答案是可以的
 * */

/*Object.defineProperty(obj, "name", {
  value: "oldValue"
})
console.log(obj.name); //oldValue*/


// 访问器属性

/**
 * 访问器属性有点类似于C#中的属性，和数据属性的区别在于，它没有数据属性的[[Writable]]和[[Value]]两个特性，而是拥有一对getter和setter函数。
 [[Get]]：读取属性时调用的函数，默认是undefined
 [[Set]]：设置属性时调用的函数，默认是undefined
 getter和setter是一个很有用的东西，假设有两个属性，其中第二个属性值会随着第一个属性值的变化而变化。这种场景在我们平时的编码中起始是非常常见的。
 在之前的做法中，我们往往要去手动修改第二个属性的值，那现在我们就可以通过get和set函数来解决这个问题。看下面这个例子：
 * */

/*var person = {
  age: 10
}

Object.defineProperty(person, "type", {
  get: function () {
    if (person.age > 17) {
      return "成人";
    }
    return "小孩";
  }
})

console.log(person.type);//小孩

person.age = 18;
console.log(person.type);//成人*/


/*通过修改age的值，type的值也会相应的修改，这样我们就不用再手动的去修改type的值了。
 下面这种方式也是可以实现同样的效果：*/

/*var person = {
  _age: 10,
  type: "小孩"
};

Object.defineProperty(person, "age", {
  get: function () {
    return this._age;
  },
  set: function (newValue) {
    this._age = newValue;
    this.type = newValue > 17 ? "成人" : "小孩";
  }
});
console.log(person.type);

person.age = 18;
console.log(person.type);
console.log(person.age);*/


/**
 * 关于访问器属性，有几点要注意：
 1、严格模式下，必须同时设置get和set
 2、非严格模式下，可以只设置其中一个，如果只设置get，则属性是只读的，如果只设置set，属性则无法读取
 3、Object.defineProperty是ES5中的新方法，IE9（IE8部分实现，只有dom对象才支持）以下浏览器不支持，一些旧的浏览器可以通过非标准
 方法defineGetter()和defineSetter()来设置，这里就不说明了，有兴趣的同学可以查找相关资料。
 * */


// 特性操作的相关方法


// Object.defineProperty(obj, propertyName, propertyDescriptor) ：添加/修改对象指定属性的特性
/**
 * ES5提供了一些读取或操作属性特性的方法，前面用到的Object.defineProperty就是其中之一。我总结了一些比较常用的方法如下：
 （1）Object.defineProperty
 定义一个对象的属性，这个方法前面我们已经用到多次，简单说说其用法。
 * */

/*Object.defineProperty(obj,propName,descriptor);*/

/**
 * defineProperty有点类似于定于在Object上的静态方法，通过Object直接调用，它接收3个参数：
 obj：需要定义属性的对象
 propNane：需要被定义的属性名称
 defineProperty：属性描述符，包含一些属性的特性定义
 * */

/*
var obj = {};
Object.defineProperty(obj, "name", {
  value: "name",
  configurable: true,
  writable: true,
  enumerable: true
});

console.log(obj);*/

// Object.defineProperties(object, propertyDescriptor) ：添加/修改对象一个或多个属性的特性

/**
 * （2）Object.defineProperties
 和defineProperty类似，是用来定义对象属性的，不同的是它可以用来同时定义多个属性，我们通过命名也可以看出来，用法如下：
 * */

/*var obj = {};
Object.defineProperties(obj, {
  "name": {
    value: "name",
    configurable: true,
    writable: true,
    enumerable: true
  },
  "age": {
    value: 20
  }
});
console.log(obj.age);*/

//  Object.getOwnPropertyDescriptor(object, propertyName) ：返回对象属性的描述符
/**
 * （3）Object.getOwnPropertyDescriptor
 ES5中还提供了一个读取特性值的方法，该方法接收对象及其属性名作为两个参数，返回一个对象，根据属性类型的不同，返回对象会包含不同的值。
 * */

/*var person = {
  _age: 10,
  type: "小孩"
}
Object.defineProperty(person, "age", {
  get: function () {
    return this._age;
  },
  set: function (newValue) {
    this._age = newValue;
    this.type = newValue > 17 ? "成人" : "小孩";
  }
})

console.log(Object.getOwnPropertyDescriptor(person, "type"));//Object {value: "成人", writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(person, "age"));*/

//  Object.create(prototype, propertyDescriptor)：创建并返回一个指定原型和指定属性的对象
/**
 * Object的方法
 在ES5中，Object对象上新增了一批方法，这些方法可以直接通过Object进行访问，前面用到的defineProperty就是新增的方法之一。
 除此之外还有很多方法，我将其总结归纳如下：
 * */

/**
 * ES5提供的Object.create方法也是一个创建对象的方法，这个方法允许为创建的对象选择原型对象，不需要定义一个构造函数。用法如下：
 * */

/*var obj = Object.create(Object.prototype, {
  name: {
    value: "Jack"
  }
})
console.log(obj.name);//Jack*/

/**
 * 这个方法接收的第一个参数作为被创建对象的原型，第二个参数是对象的属性。注意：在这个例子中，name属性是无法被修改的，因为它没有设置writable特性，默认则为false。
 个人看法：Object.create这种创建对象的方式略显繁琐，除非是需要修改属性的特性，否则不建议使用这种方式创建对象。
 * */

// 属性获取型方法

/**
 * Object.keys是用来获取给定对象的所有可枚举的自身属性的属性名，它返回一个数组。
 * */

/*function Parent() {
  this.lastName = "Black"
}
function Child(firstName) {
  this.firstName = firstName;
}
Child.prototype = new Parent();

var son = new Child("Jack");
console.log(Object.keys(son));//["firstName"]*/

/**
 * 代码中返回了firstName，并没有返回从prototype继承而来的lastName和不可枚举的相关属性。
 在一些旧的浏览器中，我们可以使用hasOwnProperty和for…in来达到类似的效果。
 * */

/*Object.keys = Object.keys ||
  function (obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }*/


// Object.getOwnPropertyNames(object) ：返回一个数组，包含对象的所有实例属性和方法，不包含原型继承的属性和方法
/**
 * getOwnPropertyNames用来获取对象自身的所有属性，包括可枚举和不可枚举的所有属性，如下所示：
 * */

/*function Parent() {
  this.lastName = "Black"
}
function Child(firstName) {
  this.firstName = firstName;
}
Child.prototype = new Parent();

var son = new Child("Jack");
Object.defineProperty(son, "age", {
  enumerable: false
})
console.log(Object.keys(son));//["firstName"]
console.log(Object.getOwnPropertyNames(son));//["firstName", "age"]*/

// 阻止对象扩展
/**
 * Object.preventExtensions()用来限制对象的扩展，设置之后，对象将无法添加新属性，用法如下：
 * */

// Object.preventExtensions(obj);

/**
 * 该方法接收一个要被设置成无法扩展的对象作为参数，需要注意两点：
 1、对象的属性不可用扩展，但是已存在的属性可以被删除
 2、无法添加新属性指的是无法在自身上添加属性，如果是在对象的原型上，还是可以添加属性的。
 * */

/*function Person(name) {
  this.name = name;
}
var person = new Person("Jack");
Object.preventExtensions(person);

delete person.name;
console.log(person.name);//undefined

Person.prototype.age = 15;
console.log(person.age);//15*/

// 检查对象是否可扩展 Object.isExtensible  判断是否可向对象添加新的属性
/**
 * Object.isExtensible方法用来判断一个对象是否可扩展，默认情况是true
 * */

/*console.log(Object.isExtensible(person));*/

// 将对象密封

/**
 * Object.seal可以密封一个对象并返回被密封的对象。
 密封对象无法添加或删除已有属性，也无法修改属性的enumerable，writable，configurable，但是可以修改属性值。
 * */

/*function Person(name) {
  this.name = name;
}
var person = new Person("Jack");
Object.seal(person);
delete person.name;
console.log(person.name);//Jack*/

/**
 * 将对象密封后，使用delete删除对象属性，还是可以访问得到属性。
 通过Object.isSealed可以用来判断一个对象是否被密封了。
 * */

// 检查对象是否密封 Object.isSealed

/*console.log(Object.isSealed(person))*/

// 冻结对象
//  Object.freeze(object) ：冻结对象，使其不能添加属性以及无法对现有的实例属性进行特性更改、值修改、属性删除等操作
/**
 * Object.freeze方法用来冻结一个对象，被冻结的对象将无法添加，修改，删除属性值，也无法修改属性的特性值，即这个对象无法被修改。
 * */

/*function Person(name) {
  this.name = name;
}
var person = new Person("Jack");
Object.freeze(person);

delete person.name;
console.log(person.name);//Jack

Person.prototype.age = 15;
console.log(person.age);//15*/

/**
 * 分析上面的代码我们可以发现，被冻结的对象无法删除自身的属性，但是通过其原型对象还是可以新增属性的。
 通过Object.isFrozen可以用来判断一个对象是否被冻结了。
 可以发现：这三个限制对象的方法的限制程度是依次上升的。
 * */

// 判断对象是否被冻结 Object.isFrozen
/*
console.log(Object.isFrozen(person));
*/


//  Object.getPrototypeOf(object) ：返回对象的上一级原型

/**
 * 参数：

 ①object {object} ：对象

 返回值：

 {object} 返回原型对象
 * */


/*// 1.对象直接量
var obj = {
  name: 'tom',
  age: 22,
  sayHello: function () {
    alert('Hello' + this.name);
  }
};
console.log(Object.getPrototypeOf(obj)); // => Object 对象：对象直接量的原型为Object

// 2.自定义对象
var People = function (name) {
  this.name = name;
};

var p = new People('tom');
var people = Object.getPrototypeOf(p);
console.log(people); // => People 对象：new 创建的对象使用构造函数的prototype属性作为他们的原型
console.log(Object.getPrototypeOf(people)); // => Object 对象：原型People的原型为Object*/


/**
 * 使用Object.prototype上的原生toString()方法判断数据类型，使用方法如下：
 Object.prototype.toString.call(value)
 1.判断基本类型：
 * */

/*Object.prototype.toString.call(null);//”[object Null]”
Object.prototype.toString.call(undefined);//”[object Undefined]”
Object.prototype.toString.call('abc');//”[object String]”
Object.prototype.toString.call(123);//”[object Number]”
Object.prototype.toString.call(true);//”[object Boolean]”*/

/**
 * 2.判断原生引用类型：
 函数类型
 * */

/*function fn(){console.log('test');}
Object.prototype.toString.call(fn);//”[object Function]”*/

// 日期类型

/*var date = new Date();
Object.prototype.toString.call(date);//”[object Date]”*/


// 数组类型

/*var arr = [1,2,3];
Object.prototype.toString.call(arr);//”[object Array]”*/

// 正则表达式

/*var reg = /[hbc]at/gi;
Object.prototype.toString.call(arr);//”[object Array]”*/

// 自定义类型

/*function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("Rose", 18);
Object.prototype.toString.call(arr); //”[object Object]”*/

/**
 * 很明显这种方法不能准确判断person是Person类的实例，而只能用instanceof 操作符来进行判断，如下所示：
 * */

/*console.log(person instanceof Person);//输出结果为true*/

// 3.判断原生JSON对象：

/*var isNativeJSON = window.JSON && Object.prototype.toString.call(JSON);
console.log(isNativeJSON);//输出结果为”[object JSON]”说明JSON是原生的，否则不是；*/

//  __proto__ ：设置或返回对象的原型对象(IE中不支持此属性)

/**
 * 1) 赋值时，对象继承新原型的所有方法和属性，以及新原型的原型链中的所有方法和属性。

 2) 属性名称以两个下划线开始和结束。

 3) 对象的__proto__ == 对象类的prototype
 * */

// 1.自定义对象多层继承
/*function People(name) {
  this.name = name;
}

function Student(age) {
  this.age = age;
}
Student.prototype = new People(); // 设置Student的原型为People对象

var s = new Student(22);
console.log(s.__proto__); // => People 对象
console.log(Student.prototype); // => People 对象
console.log(s.__proto__ == Student.prototype); // => true*/

// 2.对象直接量
/*var p = {}; // 等于new Object()
console.log(p.__proto__ == Object.prototype); // => true*/

//  prototype ：设置或返回对象类的原型对象

/**
 * 1) prototype为对象类的属性。__proto__是对象的属性。

 2)  Js内置对象(Array、Date等对象)都有一个只读的prototype属性。 可将属性和方法添加到原型中，但不能为内置对象分配其他原型。

 3) 自定义对象的prototype属性可进行读写操作。
 * */

/*var Student = function (name) {
  this.name = name;
};
// 给Student的原型添加一个sayHello方法
Student.prototype.sayHello = function () {
  console.log('Hello,' + this.name);
}
var st = new Student('张三'); // 初始化对象st
console.log(st.name); // => 张三
st.sayHello(); // 弹出：Hello,张三*/

// constructor ：表示创建此对象的构造函数

/**
 * 1) 设置或返回创建此对象的构造函数。

 2) 若一个对象有多层继承，将返回最先调用的构造函数。

 3) obj.constructor.prototype 可表示对象的原型。
 * */


/*// 1.内置对象
var str = 'abc';
console.log(str.constructor); // => function String 构造函数
var o = {};
console.log(o.constructor); // => function Object 构造函数

// 2.自定义对象多层继承 ：constructor返回最先调用的构造函数
function People(name) {
  this.name = name; // s对象初始化时，先调用People构造函数，再调用Student构造函数
  console.log('People调用');
}
function Student(age) {
  this.age = age;
  console.log('Student调用');
}
Student.prototype = new People(); // 设置Student的原型为People对象

var s = new Student(22);
console.log(s.constructor); // => function People 构造函数*/

// 总结：__proto__、prototype、constructor 的关系

/**
 * 1) 对象的__proto__ 等于 类的prototype

 2) 对象的constructor 等于 类，所以obj.constructor.prototype 可表示对象的原型。
 * */

/*var o = {};
console.log(o.__proto__ === Object.prototype); // true ：对象的__proto__等于类的prototype
console.log(o.constructor === Object); // true ：对象的constructor 等于 类
console.log(o.constructor.prototype === Object.prototype); // true ：o.constructor.prototype 可表示对象的原型。*/

