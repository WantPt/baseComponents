const component = require('component');
const sum = function(a, b) {
   return a + b;
}
module.exports = {
   sum,
   ...component
};