
function moderate(text){
  return text.includes("hate") ? 0.9 : 0.1;
}
module.exports = { moderate };
