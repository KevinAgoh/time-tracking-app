const work = document.getElementById('work');
const play = document.getElementById('play');
const study = document.getElementById('study');
const exercice = document.getElementById('exercice');
const social = document.getElementById('social');
const care = document.getElementById('care');

fetch('../data.json')
.then(response => response.json())
.then((data) => {
  const workContent = `
    <div class="activity-overview">
      <p>${data[0].title}</p>
      <h1>${data[0].timeframes.daily.current}</h1>
      <p>Last Week - ${data[0].timeframes.daily.previous}</p>
    </div>
    <div class="button">
      <button>. . .</button>
    </div>
  `;

  const playContent = `
    <div class="activity-overview">
      <p>${data[1].title}</p>
      <h1>${data[1].timeframes.daily.current}</h1>
      <p>Last Week - ${data[1].timeframes.daily.previous}</p>
    </div>
    <div class="button">
      <button>. . .</button>
    </div>
  `;

  const studyContent = `
    <div class="activity-overview">
      <p>${data[2].title}</p>
      <h1>${data[2].timeframes.daily.current}</h1>
      <p>Last Week - ${data[2].timeframes.daily.previous}</p>
    </div>
    <div class="button">
      <button>. . .</button>
    </div>
  `;

  const exerciceContent = `
    <div class="activity-overview">
      <p>${data[3].title}</p>
      <h1>${data[3].timeframes.daily.current}</h1>
      <p>Last Week - ${data[3].timeframes.daily.previous}</p>
    </div>
    <div class="button">
      <button>. . .</button>
    </div>
  `;
  const socialContent = `
    <div class="activity-overview">
      <p>${data[4].title}</p>
      <h1>${data[4].timeframes.daily.current}</h1>
      <p>Last Week - ${data[4].timeframes.daily.previous}</p>
    </div>
    <div class="button">
      <button>. . .</button>
    </div>
  `;
  const careContent = `
    <div class="activity-overview">
      <p>${data[5].title}</p>
      <h1>${data[5].timeframes.daily.current}</h1>
      <p>Last Week - ${data[5].timeframes.daily.previous}</p>
    </div>
    <div class="button">
      <button>. . .</button>
    </div>
  `;
  
  work.insertAdjacentHTML('beforeend', workContent);
  play.insertAdjacentHTML('beforeend', playContent);
  study.insertAdjacentHTML('beforeend', studyContent);
  exercice.insertAdjacentHTML('beforeend', exerciceContent);
  social.insertAdjacentHTML('beforeend', socialContent);
  care.insertAdjacentHTML('beforeend', careContent);
});