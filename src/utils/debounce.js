let timer;
 
const debounce = (cb, timeout) => {
  window.clearTimeout(timer);
  timer = window.setTimeout(cb, timeout);
};

export default debounce;
