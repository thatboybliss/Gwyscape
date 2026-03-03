
const { moderate } = require("../../ai/moderation");
const { analyze } = require("../../ai/sentiment");

exports.processContent = (text)=>{
  const toxicity = moderate(text);
  const sentiment = analyze(text);
  return { toxicity, sentiment };
};
