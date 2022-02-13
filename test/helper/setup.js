if (typeof window === 'undefined') {
  // in nodejs
  global.chai = require('chai');
  global.testing = true;
} else {
  // in browser
  window.testing = true;
}
