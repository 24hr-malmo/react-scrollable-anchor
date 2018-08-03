export const debounce = (func, wait, immediate) => {
  let timeout
  return (...args) => {
    const context = this
    const later = () => {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
}

export const rateLimit = (func, wait) => {
  var lastHit = 0;
  return function (...args) {
    const now = Date.now();
    if ((now - wait) > lastHit) {
      new Promise(resolve => {
          func.apply(undefined, args);
        resolve();
      });
      lastHit = now;
    }
  }
}
