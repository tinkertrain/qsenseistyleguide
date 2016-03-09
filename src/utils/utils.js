export function splitAndCapitalize(str) {
  let toArr = str.split('_');
  let capArray = toArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  return capArray.join(' ').trim();
}

export function capitalizePath(path) {
  let toArr = path.split('/');

  let processArr = toArr.map(splitAndCapitalize);

  return processArr.join(' ').trim();
}

export function debounce(fn, wait) {
  // Each call to the returned function will share this common timer.
  var timeout;

  // Calling debounce returns a new anonymous function
  return function() {
    // reference the context and args for the setTimeout function
    var args = arguments;

    // This is the basic debounce behaviour where you can call this
    //   function several times, but it will only execute once
    //   Each time the returned function is called, the timer starts over.
    clearTimeout(timeout);

    // Set the new timeout
    timeout = setTimeout(() => {
      // Inside the timeout function, clear the timeout variable
      timeout = null;

      // Call the original function with apply
      fn.apply(this, args);
    }, wait);
  };
}


export function throttle(fn, threshhold = 100) {
  // Each call to the returned function will share this common timer.
  var deferTimer;
  // Store when it was last called
  var last;

  return function() {
    var now = +(new Date);
    var args = arguments;

    // Check if it was called (last would have a value) and
    // if now is less than that time when it was called plus the threshhold
    // if it is, it means the set time (threshhold) has passed and we can call
    // the function again
    if (last && (now < last + threshhold)) {
      // Restart the timer
      clearTimeout(deferTimer);

      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, threshhold);
    }
    // Call the function for the first time
    else {
      last = now;
      fn.apply(this, args);
    }
  };
}
