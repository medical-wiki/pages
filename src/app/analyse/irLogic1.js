let analysedResults = [];
let homaIndex = null;
let insulinPeak = null;
let irResult0, irResult60, irResult120 = null;

const irLogic1 = (input) => {
  analysedResults = [];

  checkInsulineResistance(input);
  getHomaIndex(input);
  checkInsulinPeak(input);
  let result = {
    analysedResults: analysedResults,
    insulinPeak: insulinPeak,
    hypoglycemy: "",
    diabetes: "",
    homaIndex: homaIndex
  };

   return result;
}

const getHomaIndex = (input) => {
  if (!input.insuline0 || !input.glucose0) {
    return;
  }
  let result = "";
  try {
    homaIndex = Math.round((input.insuline0 * input.glucose0 / 22.5) * 100) / 100;
  } catch (error) {
    result = "HOMA IR индексът не може да бъде изчислен на база на дадените стойности;";
  }
  result = "HOMA IR индексът е: " + homaIndex + "; Повечето здрави хора имат стойности по-ниски от 2.50;";
  analysedResults.push(result);
}

const checkInsulineResistance = (input) => {
  checkInsulineResistance0min(input);
  checkInsulineResistance60min(input);
  checkInsulineResistance120min(input);
  if (!irResult0 && !irResult60 && !irResult120 ) {
    analysedResults.push("Не може да се направи качествен анализ на ИР по дадените измервания;");
  } else {
    analysedResults.push(getSentence(irResult0, 0));
    analysedResults.push(getSentence(irResult60, 60));
    analysedResults.push(getSentence(irResult120, 120));
  }
  return analysedResults;
}

const checkInsulinPeak = (input) => {
  let result = 0;
  if (input.insuline60 !== 0 && input.insuline60 <= input.insuline120 ) {
    result = 1;
    analysedResults.push("Инсулиновият пик е забавен, случва се след 60 минута от теста; Това се счита за по-голяма склонност за развитие на диабет;");
  }
  insulinPeak = result;
}

const checkInsulineResistance0min = (input) => {
  let result;
  if ( input.insuline0 <= 0) {
    result = -1;
  } else if (input.insuline0 < 7) {
    result = 0;
  } else if (input.insuline0 < 11) {
    result = 1;
  } else if (input.insuline0 < 15) {
    result = 2;
  } else if (input.insuline0 >= 15) {
    result = 3;
  }
  irResult0 = result;
}
 
const checkInsulineResistance60min = (input) => {
  let result;
  if (input.insuline60 <= 0) {
    result = -1;
  } else if (input.insuline60 < 40) {
    result = 0;
  } else if (input.insuline60 < 50) {
    result = 1;
  } else if (input.insuline60 < 60) {
    result = 2;
  } else if (input.insuline60 >= 70) {
    result = 3;
  }
  irResult60 = result;
}

const checkInsulineResistance120min = (input) => {
  let result;
  if ( input.insuline120 <= 0) {
    result = -1;
  } else if (input.insuline120 < 9) {
    result = 0;
  } else if (input.insuline120 < 15) {
    result = 1;
  } else if (input.insuline120 < 30) {
    result = 2;
  } else if (input.insuline120 >= 30) {
    result = 3;
  }
  irResult120 = result;
}

const getSentence = (momentaryIrStrength, minute) => {
  if (momentaryIrStrength === -1) return null;
  if (momentaryIrStrength === 0) return "Нe се открива инсулинова резистентност на " + minute + " минута от теста;";
  let modifier = "";
  if (momentaryIrStrength === 1) modifier = "СЛАБА";
  if (momentaryIrStrength === 2) modifier = "УМЕРЕНА";
  if (momentaryIrStrength === 3) modifier = "СИЛНА";
  return "Открива се " + modifier + " инсулинова резистентност на " + minute + " минута от теста;";
}

export default irLogic1;