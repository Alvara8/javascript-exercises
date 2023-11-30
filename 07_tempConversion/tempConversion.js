const convertToCelsius = function(temp) {


temp=(temp-32) * (5/9);


//(32°F − 32) × 5/9 = 0°C

return Math.round(temp * 10) / 10

};

const convertToFahrenheit = function(temp) {

//(0°C × 9/5) + 32 = 32°F

temp=(temp*(9/5))+32;
return Math.round(temp * 10) / 10

};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
