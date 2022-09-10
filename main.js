const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const cpbr14Day = new Date("Nov 11, 2022 12:00:00").getTime();
const loveDay = new Date("Nov 04, 2022 21:15:00").getTime();

const easterEgg = document.getElementById('easter-egg');
const cpbr14 = document.getElementById('cpbr14');
const loveday = document.getElementById('loveday');
const title = document.getElementById('title');

setInterval(updateCountdown, 1000);

easterEgg.addEventListener('click', changeCountdown);

function updateCountdown() {
  const remainingCpbr14 = countDays(cpbr14Day)
  const remainingLoveDay = countDays(loveDay)

  setCountdown('cpbr14', remainingCpbr14);
  setCountdown('loveday', remainingLoveDay);
}

function setCountdown(key, { daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining }) {
  document.getElementById(`${key}-days`).innerText = daysRemaining;
  document.getElementById(`${key}-hours`).innerText = hoursRemaining;
  document.getElementById(`${key}-minutes`).innerText = minutesRemaining;
  document.getElementById(`${key}-seconds`).innerText = secondsRemaining;
}

function countDays(targetDay) {
  const now = new Date().getTime();
  const diff = targetDay - now;

  const daysRemaining = Math.floor(diff / day);
  const hoursRemaining = Math.floor((diff % day) / hour);
  const minutesRemaining = Math.floor((diff % hour) / minute);
  const secondsRemaining = Math.floor((diff % minute) / second);

  return { daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining };
}

function changeCountdown() {
  if (cpbr14.classList.contains('hidden')) {
    cpbr14.classList.remove('hidden');
    loveday.classList.add('hidden');
    title.innerText = "Contagem para a Campus Party SP 14"
    return
  }

  cpbr14.classList.add('hidden');
  loveday.classList.remove('hidden');
  title.innerText = 'Contagem para The Easter Egg Day'
  return

}
