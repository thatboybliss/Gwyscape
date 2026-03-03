
function analyze(text){
  return text.includes("understand") ? 0.8 : 0.3;
}
module.exports = { analyze };
