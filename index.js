

const myMonth = 12     
const myDay   = 13
const myYear = 2021
    
const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
  body: document.querySelector("body"),
  timerFace: document.getElementById("timer-1"),
};

refs.body.onload = addElement;
  function addElement() {
    let newDiv = document.createElement("div");
      newDiv.innerHTML = `<h2 class="h2">До дня народження лишилось:))</h2>`    
    refs.body.insertBefore(newDiv, refs.timerFace);
}




class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    const nowDate = Date.now();
    const time = this.targetDate - nowDate;
    this.updateClockface(time);
this.timeFinish(time);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  timeFinish(time) {
    if (time < 0) {
      clearInterval(this.setInt);
      refs.timerFace.textContent = "Finish";
    }
  }
};

 
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(`${myMonth} ${myDay}, ${myYear}`),
});

