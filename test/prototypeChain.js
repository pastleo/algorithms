import './helper/setup.js';

import {
  ClassDefinedByFunction, ClassDefinedByClass,
  InheritedClassDefinedByFunction, InheritedClassDefinedByClass,
} from '../lib/prototypeChain.js';

describe('JS prototype chain: Object.prototype', () => {
  it('.__proto__ / [[Prototype]] to null', () => {
    chai.expect(Object.prototype.__proto__).to.equal(null);
    chai.expect(Object.getPrototypeOf(Object.prototype)).to.equal(null);
  });
});

describe('JS prototype chain: Function.prototype', () => {
  it('.__proto__ / [[Prototype]] to Object.prototype', () => {
    chai.expect(Function.prototype.__proto__).to.equal(Object.prototype);
    chai.expect(Object.getPrototypeOf(Function.prototype)).to.equal(Object.prototype);
  });

  it('.__proto__ / [[Prototype]] twice to null', () => {
    chai.expect(Function.prototype.__proto__.__proto__).to.equal(null);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf(Function.prototype))).to.equal(null);
  });
});

describe('JS prototype chain: Array', () => {
  it('[].__proto__ / [[Prototype]] to Object.prototype', () => {
    chai.expect([].__proto__).to.equal(Array.prototype);
    chai.expect(Object.getPrototypeOf([])).to.equal(Array.prototype);
  });

  it('[].__proto__ / [[Prototype]] twice to Object.prototype', () => {
    chai.expect([].__proto__.__proto__).to.equal(Object.prototype);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf([]))).to.equal(Object.prototype);
  });

  it('[].__proto__ / [[Prototype]] 3 times to null', () => {
    chai.expect([].__proto__.__proto__.__proto__).to.equal(null);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf([])))).to.equal(null);
  });
});

describe('JS prototype chain: ClassDefinedByFunction', () => {
  it('provide static property .a = 1, but not in instance', () => {
    chai.expect(ClassDefinedByFunction.a).to.equal(1);

    const instance = new ClassDefinedByFunction();
    chai.expect(instance.a).to.equal(undefined);
  });

  it('define .b = 2, assign .c = 3', () => {
    chai.expect(ClassDefinedByFunction.b).to.equal(undefined);

    const instance = new ClassDefinedByFunction();
    chai.expect(instance.b).to.equal(2);
    chai.expect(instance.c).to.equal(3);
  });

  it('define .method', () => {
    const instance = new ClassDefinedByFunction();
    chai.expect(instance.method()).to.deep.equal(['method', instance]);
  });

  it('can create instance that .__proto__ / [[Prototype]] to ClassDefinedByFunction.prototype for instance method', () => {
    const instance = new ClassDefinedByFunction();
    chai.expect(instance.__proto__).to.equal(ClassDefinedByFunction.prototype);
    chai.expect(Object.getPrototypeOf(instance)).to.equal(ClassDefinedByFunction.prototype);
  });

  it('can create instance that .__proto__ / [[Prototype]] twice to Object.prototype for inheriting instance method', () => {
    const instance = new ClassDefinedByFunction();
    chai.expect(instance.__proto__.__proto__).to.equal(Object.prototype);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf(instance))).to.equal(Object.prototype);
  });

  it('has .prototype and its .__proto__ / [[Prototype]] goes to Object.prototype for inheriting instance method', () => {
    chai.expect(ClassDefinedByFunction.prototype.__proto__).to.equal(Object.prototype);
    chai.expect(Object.getPrototypeOf(ClassDefinedByFunction.prototype)).to.equal(Object.prototype);
  });

  it('has .__proto__ / [[Prototype]] goes to Function.prototype for inheriting static method, because ClassDefinedByFunction', () => {
    chai.expect(ClassDefinedByFunction.__proto__).to.equal(Function.prototype);
    chai.expect(Object.getPrototypeOf(ClassDefinedByFunction)).to.equal(Function.prototype);
  });
});

describe('JS prototype chain: ClassDefinedByClass', () => {
  it('provide static property .a = 1, but not in instance', () => {
    chai.expect(ClassDefinedByClass.a).to.equal(1);

    const instance = new ClassDefinedByClass();
    chai.expect(instance.a).to.equal(undefined);
  });

  it('define .b = 2, assign .c = 3', () => {
    chai.expect(ClassDefinedByClass.b).to.equal(undefined);

    const instance = new ClassDefinedByClass();
    chai.expect(instance.b).to.equal(2);
    chai.expect(instance.c).to.equal(3);
  });

  it('define .method', () => {
    const instance = new ClassDefinedByClass();
    chai.expect(instance.method()).to.deep.equal(['method', instance]);
  });

  it('can create instance that .__proto__ / [[Prototype]] to ClassDefinedByClass.prototype for instance method', () => {
    const instance = new ClassDefinedByClass();
    chai.expect(instance.__proto__).to.equal(ClassDefinedByClass.prototype);
    chai.expect(Object.getPrototypeOf(instance)).to.equal(ClassDefinedByClass.prototype);
  });

  it('can create instance that .__proto__ / [[Prototype]] twice to Object.prototype for inheriting instance method', () => {
    const instance = new ClassDefinedByClass();
    chai.expect(instance.__proto__.__proto__).to.equal(Object.prototype);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf(instance))).to.equal(Object.prototype);
  });

  it('has .prototype and its .__proto__ / [[Prototype]] goes to Object.prototype for inheriting instance method', () => {
    chai.expect(ClassDefinedByClass.prototype.__proto__).to.equal(Object.prototype);
    chai.expect(Object.getPrototypeOf(ClassDefinedByClass.prototype)).to.equal(Object.prototype);
  });

  it('has .__proto__ / [[Prototype]] goes to Function.prototype for inheriting static method, because ClassDefinedByClass is just a syntax sugar', () => {
    chai.expect(ClassDefinedByClass.__proto__).to.equal(Function.prototype);
    chai.expect(Object.getPrototypeOf(ClassDefinedByClass)).to.equal(Function.prototype);
  });
});

describe('JS prototype chain: InheritedClassDefinedByFunction', () => {
  it('inherit static property .a = 1, but not in instance', () => {
    chai.expect(InheritedClassDefinedByFunction.a).to.equal(1);

    const instance = new InheritedClassDefinedByFunction();
    chai.expect(instance.a).to.equal(undefined);
  });

  it('provide static property .d = 4, but not in instance', () => {
    chai.expect(InheritedClassDefinedByFunction.d).to.equal(4);

    const instance = new InheritedClassDefinedByFunction();
    chai.expect(instance.d).to.equal(undefined);
  });

  it('inherit and define .e = 5, assign .f = 6', () => {
    chai.expect(InheritedClassDefinedByFunction.b).to.equal(undefined);
    chai.expect(InheritedClassDefinedByFunction.e).to.equal(undefined);

    const instance = new InheritedClassDefinedByFunction();
    chai.expect(instance.b).to.equal(2);
    chai.expect(instance.c).to.equal(3);
    chai.expect(instance.e).to.equal(5);
    chai.expect(instance.f).to.equal(6);
  });

  it('inherit and define .method2', () => {
    const instance = new InheritedClassDefinedByFunction();
    chai.expect(instance.method()).to.deep.equal(['method', instance]);
    chai.expect(instance.method2()).to.deep.equal(['method2', instance]);
  });

  it('can create instance that .__proto__ / [[Prototype]] to InheritedClassDefinedByFunction.prototype for instance method', () => {
    const instance = new InheritedClassDefinedByFunction();
    chai.expect(instance.__proto__).to.equal(InheritedClassDefinedByFunction.prototype);
    chai.expect(Object.getPrototypeOf(instance)).to.equal(InheritedClassDefinedByFunction.prototype);
  });

  it('can create instance that .__proto__ / [[Prototype]] twice to ClassDefinedByFunction.prototype for inheriting instance method', () => {
    const instance = new InheritedClassDefinedByFunction();
    chai.expect(instance.__proto__.__proto__).to.equal(ClassDefinedByFunction.prototype);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf(instance))).to.equal(ClassDefinedByFunction.prototype);
  });

  it('can create instance that .__proto__ / [[Prototype]] 3 times to Object.prototype for inheriting instance method', () => {
    const instance = new InheritedClassDefinedByFunction();
    chai.expect(instance.__proto__.__proto__.__proto__).to.equal(Object.prototype);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance)))).to.equal(Object.prototype);
  });

  it('has .prototype and its .__proto__ / [[Prototype]] goes to ClassDefinedByFunction.prototype for inheriting instance method', () => {
    chai.expect(InheritedClassDefinedByFunction.prototype.__proto__).to.equal(ClassDefinedByFunction.prototype);
    chai.expect(Object.getPrototypeOf(InheritedClassDefinedByFunction.prototype)).to.equal(ClassDefinedByFunction.prototype);
  });

  it('has .__proto__ / [[Prototype]] goes to ClassDefinedByFunction for inheriting static method', () => {
    chai.expect(InheritedClassDefinedByFunction.__proto__).to.equal(ClassDefinedByFunction);
    chai.expect(Object.getPrototypeOf(InheritedClassDefinedByFunction)).to.equal(ClassDefinedByFunction);
  });
});

describe('JS prototype chain: InheritedClassDefinedByClass', () => {
  it('inherit static property .a = 1, but not in instance', () => {
    chai.expect(InheritedClassDefinedByClass.a).to.equal(1);

    const instance = new InheritedClassDefinedByClass();
    chai.expect(instance.a).to.equal(undefined);
  });

  it('provide static property .d = 4, but not in instance', () => {
    chai.expect(InheritedClassDefinedByClass.d).to.equal(4);

    const instance = new InheritedClassDefinedByClass();
    chai.expect(instance.d).to.equal(undefined);
  });

  it('inherit and define .e = 5, assign .f = 6', () => {
    chai.expect(InheritedClassDefinedByClass.b).to.equal(undefined);
    chai.expect(InheritedClassDefinedByClass.e).to.equal(undefined);

    const instance = new InheritedClassDefinedByClass();
    chai.expect(instance.b).to.equal(2);
    chai.expect(instance.c).to.equal(3);
    chai.expect(instance.e).to.equal(5);
    chai.expect(instance.f).to.equal(6);
  });

  it('inherit and define .method2', () => {
    const instance = new InheritedClassDefinedByClass();
    chai.expect(instance.method()).to.deep.equal(['method', instance]);
    chai.expect(instance.method2()).to.deep.equal(['method2', instance]);
  });

  it('can create instance that .__proto__ / [[Prototype]] to InheritedClassDefinedByClass.prototype for instance method', () => {
    const instance = new InheritedClassDefinedByClass();
    chai.expect(instance.__proto__).to.equal(InheritedClassDefinedByClass.prototype);
    chai.expect(Object.getPrototypeOf(instance)).to.equal(InheritedClassDefinedByClass.prototype);
  });

  it('can create instance that .__proto__ / [[Prototype]] twice to ClassDefinedByFunction.prototype for inheriting instance method', () => {
    const instance = new InheritedClassDefinedByClass();
    chai.expect(instance.__proto__.__proto__).to.equal(ClassDefinedByFunction.prototype);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf(instance))).to.equal(ClassDefinedByFunction.prototype);
  });

  it('can create instance that .__proto__ / [[Prototype]] 3 times to Object.prototype for inheriting instance method', () => {
    const instance = new InheritedClassDefinedByClass();
    chai.expect(instance.__proto__.__proto__.__proto__).to.equal(Object.prototype);
    chai.expect(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(instance)))).to.equal(Object.prototype);
  });

  it('has .prototype and its .__proto__ / [[Prototype]] goes to ClassDefinedByFunction.prototype for inheriting instance method', () => {
    chai.expect(InheritedClassDefinedByClass.prototype.__proto__).to.equal(ClassDefinedByFunction.prototype);
    chai.expect(Object.getPrototypeOf(InheritedClassDefinedByClass.prototype)).to.equal(ClassDefinedByFunction.prototype);
  });

  it('has .__proto__ / [[Prototype]] goes to ClassDefinedByFunction for inheriting static method', () => {
    chai.expect(InheritedClassDefinedByClass.__proto__).to.equal(ClassDefinedByFunction);
    chai.expect(Object.getPrototypeOf(InheritedClassDefinedByClass)).to.equal(ClassDefinedByFunction);
  });
});
