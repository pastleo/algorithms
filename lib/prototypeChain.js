/**
 * @class ClassDefinedByFunction
 * equals to ClassDefinedByClass
 */
export function ClassDefinedByFunction() {
  // const ClassDefinedByFunction = function() { ... } also works
  this.b = 2;
  this.c = 3;
};
ClassDefinedByFunction.a = 1;
ClassDefinedByFunction.prototype.method = function() {
  // 'this' will not be the instance if written in arrow function
  if (typeof testing === 'undefined') {
    console.log('this from method:', this);
  }
  return ['method', this];
}

/**
 * @class ClassDefinedByClass
 * equals to ClassDefinedByFunction
 */
export class ClassDefinedByClass {
  static a = 1;
  b = 2;
  constructor() {
    this.c = 3;
  }
  method() {
    if (typeof testing === 'undefined') {
      console.log('this from method:', this);
    }
    return ['method', this];
  }
}

/**
 * @class InheritedClassDefinedByFunction
 * @extends ClassDefinedByFunction
 * equals to InheritedClassDefinedByClass
 */
export function InheritedClassDefinedByFunction() {
  // ClassDefinedByClass.prototype.constructor.call(this);
  // class constructor ClassDefinedByClass cannot be invoked without 'new', thus it might be that class defined by function can not extend ClassDefinedByClass
  ClassDefinedByFunction.call(this);
  this.e = 5;
  this.f = 6;
}

Object.setPrototypeOf(InheritedClassDefinedByFunction, ClassDefinedByFunction); // is basically:
// InheritedClassDefinedByFunction.__proto__ = ClassDefinedByFunction;
// for static properties and methods

InheritedClassDefinedByFunction.prototype = Object.create(ClassDefinedByFunction.prototype); // is basically:
// InheritedClassDefinedByFunction.prototype.__proto__ = ClassDefinedByFunction.prototype;
// for instance methods

// because .__proto__ is actually not standard and should be hidden, usually noted as '[[Prototype]]'. Object.create(), Object.setPrototypeOf() and Object.getPrototypeOf provide standard way to work with prototype chain
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

InheritedClassDefinedByFunction.d = 4;
InheritedClassDefinedByFunction.prototype.method2 = function() {
  if (typeof testing === 'undefined') {
    console.log('this from method2:', this);
  }
  return ['method2', this];
}

/**
 * @class InheritedClassDefinedByClass
 * @extends ClassDefinedByFunction
 * equals to InheritedClassDefinedByFunction
 */
export class InheritedClassDefinedByClass extends ClassDefinedByFunction {
  static d = 4;
  e = 5;
  constructor() {
    super();
    this.f = 6;
  }
  method2() {
    if (typeof testing === 'undefined') {
      console.log('this from method2:', this);
    }
    return ['method2', this];
  }
}

if (typeof window !== 'undefined') {
  window.ClassDefinedByFunction = ClassDefinedByFunction;
  window.ClassDefinedByClass = ClassDefinedByClass;
  window.InheritedClassDefinedByFunction = InheritedClassDefinedByFunction;
  window.InheritedClassDefinedByClass = InheritedClassDefinedByClass;
}
