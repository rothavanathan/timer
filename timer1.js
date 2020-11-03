// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
const process = require('process');

const alarm = (string, timer) => {
  setTimeout(() => process.stdout.write(string), timer);
}

const alarmClock = () => {
  const alarmInputs = process.argv.slice(2);
  
  //GIVEN EDGE CASES
  // No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
  if (alarmInputs.length === 0) {
    return;
  } else {
    for (const input of alarmInputs) {
      // An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
      // An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
      if (!isNaN(input) && input >= 0) {    
        //multiply by 1000 for ms
        alarm("\x07", input*1000);
        alarm(".", input*1000);
      }
    }
  }
  //add newline character after last alarm for formatting
  alarm("\n", ((Math.max(...alarmInputs)*1000) +1))
}

alarmClock();






// //test case
// node timer1.js 10 3 5 15 9 