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

export function debounce(func, wait, immediate) {
  let timeout;

  return function() {
    let context = this, args = arguments;

    var later = function() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
