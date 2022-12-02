//-----instanceof----
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }//constructor构造方法

  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // expected output: true
  
  console.log(auto instanceof Object);
  // expected output: true
  
  //======================------------obj,function,arr------------===============
  console.log("---------------obj,function,arr-------------");
  
let a1={
    a2: [123,"abc",console.log()],
    a3: function(){
        return function(){
            return 'a3 fun fun return';
        }
    }
};

console.log(a1 instanceof Object, a1 instanceof Array);//true false
console.log(a1.a2 instanceof Array, a1.a2 instanceof Object);// true true
console.log(a1.a3 instanceof Function, a1.a3 instanceof Object);// true true
//typeof 不能判断---> null & object  ||  array & object
console.log(typeof a1.a2, "array return");//a2 is array,but typeof return is object
console.log(typeof a1.a2[2] === 'function');//true

console.log(a1.a3()());//a3 fun fun return

// null 
var a 
console.log(a);//undefined 定义未赋值
var a = null; //定义并赋值，值为null
a = [123,"abc"]//确定对象赋值
console.log(a[1]);
a = null;//最后，让a指向的对象成为垃圾对象（被回收)
console.log(a);