
// 1. Debounce (Wait for the pause)
// Rule: “I will only execute this function once you have stopped triggering it for X milliseconds.”

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId); // Reset the timer on every new event
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}


// 2. Throttle (Keep a steady pace)
// Rule: “I will execute this function immediately, but then I will ignore all subsequent triggers for X milliseconds. Once that time passes, I will allow the next trigger.”
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args); // Execute immediately
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit); // Lock out further executions until limit passes
    }
  };
}
