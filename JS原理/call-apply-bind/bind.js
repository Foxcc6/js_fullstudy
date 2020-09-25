Function.prototype.mybind = function(context) {
    if (typeof this !== 'function') {
      throw new TypeError('Bind must be called on a function')
    }
    let _this = this
    let args = [...arguments].slice(1)
    return function F() {
      // 如果函数用了new
      if (this instanceof F) {
        console.log(this);
        return new _this(...args, ...arguments)
      } else {
        return _this.apply(context, args.concat(...arguments))
      }
    }
  }
