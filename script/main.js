'use strict';


const getAngle = function (h, m) {
  if (h === 12) {
    h = 0;
  }
  if (m === 60) {
    m = 0;
  }
  let hourAngle = 0.5 * (h * 60 + m);
  let minuteAngle = 6 * m;
  let angle = Math.abs(hourAngle - minuteAngle);
  angle = Math.min(360 - angle, angle);
  return console.log(angle + '%');
};
getAngle(3, 0);