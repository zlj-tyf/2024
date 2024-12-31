const yearElem = document.getElementById('year')
const daysElem = document.getElementById('days')
const hoursElem = document.getElementById('hours')
const minutesElem = document.getElementById('minutes')
const secondsElem = document.getElementById('seconds')

//functions
function timeToString(time) {
  const diffInDays = time / (1000 * 60 * 60 * 24)
  const dd = Math.floor(diffInDays)
  
  const diffInHours = (diffInDays - dd) * 24
  const hh = Math.floor(diffInHours)
  
  const diffInMinutes = (diffInHours - hh) * 60
  const mm = Math.floor(diffInMinutes)
  
  const diffInSeconds = (diffInMinutes - mm) * 60
  const ss = Math.floor(diffInSeconds)
  
  const formattedDD = dd.toString().padStart(2, '0')
  const formattedHH = hh.toString().padStart(2, '0')
  const formattedMM = mm.toString().padStart(2, '0')
  const formattedSS = ss.toString().padStart(2, '0')
  
  return {formattedDD, formattedHH, formattedMM, formattedSS}
}


function startCountDown() {
  const startTime = Date.now()
  const newYearTime = `January 1 ${new Date().getFullYear() + 1} 00:00:00`;
  const endTime = Date.parse(newYearTime)
  const remainingTime = Number(endTime) - Number(startTime)
  const formattedRemaingTime = timeToString(remainingTime)
  updateUI(formattedRemaingTime)
  setInterval(startCountDown, 1000)
 }
startCountDown();
window.addEventListener('load', startCountDown)

function updateUI({formattedDD, formattedHH, formattedMM, formattedSS}) {
  yearElem.innerText = new Date().getFullYear() + 1;
  daysElem.innerText = formattedDD
  hoursElem.innerText = formattedHH
  minutesElem.innerText = formattedMM
  secondsElem.innerText = formattedSS
}