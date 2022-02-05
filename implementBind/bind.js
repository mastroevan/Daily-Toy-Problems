/*
Implement Function.prototype.bind()

Example:
  const foo = function() {
    console.log(this.bar);
  }

  let baz = foo.bind({bar: 'hello'});

  baz(); //hello
*/


function bind(fn, context) {
  return function() {
    fn.apply(context);
  }
}