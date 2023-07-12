let analysedResults = [];
let homaIrIndex, homa1BIndex, homa2BIndex = null;
let insulinPeak = null;
let irResult0, irResult60, irResult120 = null;

const irLogic1 = (input) => {
  analysedResults = [];

  getInputSummary(input);
  checkInsulinResistance(input);
  getHomaIrIndex(input);
  // getHoma2BIndex(input);
  getHoma1BIndex(input);
  checkInsulinPeak(input);
  let result = {
    analysedResults: analysedResults,
    insulinPeak: insulinPeak,
    hypoglycemy: "",
    diabetes: "",
    homaIrIndex: homaIrIndex,
    homa1BIndex: homa1BIndex
    // homa2BIndex: homa2BIndex
  };

  return result;
}

const getInputSummary = (input) => {
  analysedResults.push(<span className="text-lg ">======= ВХОДНИ ДАННИ =======</span>);
  addInputSummaryIfNotZero("инсулин 0 min  : ", input.insulin0);
  addInputSummaryIfNotZero("инсулин 60 min : ", input.insulin60);
  addInputSummaryIfNotZero("инсулин 120 min: ", input.insulin120);
  addInputSummaryIfNotZero("глюкоза 0 min  : ", input.glucose0);
  addInputSummaryIfNotZero("глюкоза 60 min : ", input.glucose60);
  addInputSummaryIfNotZero("глюкоза 120 min: ", input.glucose120);
  analysedResults.push(" ");
  analysedResults.push(" ");
  analysedResults.push(<span className="text-lg">======== АНАЛИЗ ========</span>);
}

const addInputSummaryIfNotZero = (text, bloodValue) => {

  if (bloodValue !== null && bloodValue > 0.001) {
    console.log(bloodValue !== 0);
    analysedResults.push(text + bloodValue);
  }
}

const getHomaIrIndex = (input) => {
  if (input.insulin0 <= 0.5 || input.glucose0 <= 0.5) {
    return;
  }
  let result = "";
  try {
    homaIrIndex = Math.round((input.insulin0 * input.glucose0 / 22.5) * 100) / 100;
  } catch (error) {
    result = "HOMA1-IR индексът не може да бъде изчислен на база на дадените стойности;";
  }
  result = "HOMA1-IR индексът е: " + homaIrIndex + "; Стойности под 1.4 се считат за оптимални; Стойности над 1.9 показват ранна ИР; Стойности над 2.9 показват значима ИР;";
  analysedResults.push(result);
  analysedResults.push(" ");
}

// HOMA2-B = ((20 × insulin) / (glucose)) - (3.5 × disposition index)
//For HOMA1-%B, the cutoffs were >48.9% (normal), 48.9% to 25.0% (borderline), and <25.0% (NIDDM). 
//Cutoffs for HOMA2-%B were >54.2% (normal), 54.2% to 34.4% (borderline), and <34.4% (NIDDM).

const getHoma2BIndex = (input) => {

}

const getHoma1BIndex = (input) => {
  if (input.insulin0 <= 0.5 || input.glucose0 <= 0.5) {
    return;
  }
  let result = "HOMA1-%β индексът е: ";
  try {
    homa1BIndex = Math.round(100 * (20 * input.insulin0) / (input.glucose0 - 3.5)) / 100;
  } catch (e) {
    analysedResults.push("HOMA1-%β индексът не може да бъде изчислен на база на дадените стойности;");
    return;
  }

  if (homa1BIndex <= 25) {
    result = result + homa1BIndex + "; Счита се че, β-клетъчната функция на панкреаса е СИЛНО намалена; ";
  } else if (homa1BIndex <= 49) {
    result = result + homa1BIndex + "; Счита се че, β-клетъчната функция на панкреаса е намалена; ";
  } else if (homa1BIndex <= 100) {
    result = result + homa1BIndex + "; Счита се че, β-клетъчната функция на панкреаса НЕ е намалена; ";
  } else if (homa1BIndex > 100) {
    result = result + homa1BIndex + "; Счита се че, β-клетъчната функция на панкреаса може да бъде увредена, заради повишена секреция на инсулин; ";
  }

  analysedResults.push(result);
  analysedResults.push(" ");
}

const checkInsulinResistance = (input) => {

  checkInsulinResistance0min(input);
  checkInsulinResistance60min(input);
  checkInsulinResistance120min(input);
  if (irResult0 < 0 && irResult60 < 0 && irResult120 < 0) {
    analysedResults.push("Не може да се направи качествен анализ на ИР по дадените измервания;");
  } else {
    analysedResults.push(getSentence(irResult0, 0));
    analysedResults.push(getSentence(irResult60, 60));
    analysedResults.push(getSentence(irResult120, 120));
  }
  analysedResults.push(" ");
  return analysedResults;
}

const checkInsulinPeak = (input) => {
  let result = 0;
  if (input.insulin60 !== 0 && input.insulin60 <= input.insulin120 - 1) {
    result = 1;
    analysedResults.push("Инсулиновият пик е забавен след 60 минута от теста; Това e по-голяма склонност за развитие на диабет;");
  }
  insulinPeak = result;
}

const checkInsulinResistance0min = (input) => {
  let result;
  if (input.insulin0 <= 0.5) {
    result = -1;
  } else if (input.insulin0 < 7) {
    result = 0;
  } else if (input.insulin0 < 11) {
    result = 1;
  } else if (input.insulin0 < 15) {
    result = 2;
  } else if (input.insulin0 >= 15) {
    result = 3;
  }
  irResult0 = result;
}

const checkInsulinResistance60min = (input) => {
  let result;
  if (input.insulin60 <= 0.5) {
    result = -1;
  } else if (input.insulin60 < 40) {
    result = 0;
  } else if (input.insulin60 < 50) {
    result = 1;
  } else if (input.insulin60 < 60) {
    result = 2;
  } else if (input.insulin60 >= 70) {
    result = 3;
  }
  irResult60 = result;
}

const checkInsulinResistance120min = (input) => {
  let result;
  if (input.insulin120 <= 0.5) {
    result = -1;
  } else if (input.insulin120 < 9) {
    result = 0;
  } else if (input.insulin120 < 15) {
    result = 1;
  } else if (input.insulin120 < 30) {
    result = 2;
  } else if (input.insulin120 >= 30) {
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
  return "Има " + modifier + " инсулинова резистентност на " + minute + " минута от теста;";
}

export default irLogic1;