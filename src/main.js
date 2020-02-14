import { traits } from 'traits-decorator'
class TFoo{
	foo(){console.log('foo')}
}
const TBar = {
	bar(){console.log('bar')}
}

@traits(TFoo, TBar)
class MyClass{}

var c = new MyClass();
c.foo()
c.bar()