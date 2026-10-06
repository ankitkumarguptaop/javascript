
// 1. Debounce (Wait for the pause)
// Rule: “I will only execute this function once you have stopped triggering it for X milliseconds.”

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId); // Reset the timer on every new event
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// 1. The heavy function you want to protect
function fetchSearchResults(event) {
  const searchTerm = event.target.value;
  console.log(`Fetching results for: "${searchTerm}"`);
  // fetch(`https://api.example.com/search?q=${searchTerm}`)...
}

// 2. Create the debounced version (wait 500ms after they stop typing)
const debouncedSearch = debounce(fetchSearchResults, 500);


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

function logClick(event) {
  // If ...args wasn't used in the wrapper, 'event' would be undefined here
  console.log("Clicked at X:", event.clientX); 
}

const throttledClick = throttle(logClick, 1000);

// The browser passes the event object to throttledClick.
// ...args catches it, and apply() hands it perfectly to logClick.
document.addEventListener("click", throttledClick);
