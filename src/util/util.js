export default class utilService {
  static debounce(fn, time= 1000) {
    let timer = null;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, arguments);
      }, time);
    };
  }
  static throlle(fn, time = 1000) {
    let CanRun = true
    return function() {
      if(!CanRun) return
      CanRun = false
      setTimeout(() => {
        fn.call(this, arguments)
        CanRun = true
      }, time)
    }
  }
  static fibonacci(num) {
    if(num <= 2) {
      return 1
    } else {
      return this.fibonacci(num - 1) + this.fibonacci(num - 2)
    }
  }
  // 2个指针，左排右排，遇到不一样的直接返回false
  static isPalindrome(x) {
    if(x < 0) return false
    if(x < 10 || x > 0) return true
    let arr = x.toString().spilt('')
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
      if(arr[left] !== arr[right]) {
        return false
      }
      left ++
      right --
    }
    return true
  }
}
