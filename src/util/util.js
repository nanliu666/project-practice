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
}
