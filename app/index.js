import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";

function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = zeroPad(hours);
  }
  let mins = zeroPad(today.getMinutes());
  //myLabel.text = `${hours}:${mins}`;
}

import { Accelerometer } from "accelerometer";

if (Accelerometer) {
   console.log("This device has an Accelerometer!");
   const accelerometer = new Accelerometer({ frequency: 1 });
   accelerometer.addEventListener("reading", () => {
     console.log(`${accelerometer.x},${accelerometer.y},${accelerometer.z}`);
     //myLabel.text = `${accelerometer.x},${accelerometer.y},${accelerometer.z}`;
     myLabel.text = (`${accelerometer.x}`);
     //myLabel2.text = (`${accelerometer.y}`);
     //myLabel3.text = (`${accelerometer.z}`);
   });
   accelerometer.start();
} else {
   console.log("This device does NOT have an Accelerometer!");
}