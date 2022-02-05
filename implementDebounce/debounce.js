const debounce = (fn, time) => {
  let setTimeoutID;
  return function() {
    if (setTimeoutID) {
      clearTimeout(setTimeoutID);
    }

    setTimeoutID = setTimeout(() => {
      fn.apply(this, arguments);
      setTimeoutID = null;
    }, time)
  }
}