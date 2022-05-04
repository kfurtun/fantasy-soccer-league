const charConverter = (word) => {
  let returnString = word.toLowerCase();

  returnString = returnString.replace(/o/g, "ö");
  returnString = returnString.replace(/c/g, "ç");
  returnString = returnString.replace(/s/g, "ş");
  returnString = returnString.replace(/i/g, "ı");
  returnString = returnString.replace(/g/g, "ğ");
  returnString = returnString.replace(/u/g, "ü");

  return returnString;
};

module.exports = charConverter;
