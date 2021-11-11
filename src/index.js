const grid = document.querySelector('.activity-grid');

fetch('../data.json')
.then(response => response.json())
.then((data) => {
  const dailyGrid = `
 
      <div id="work" class="windowcontent daily"> 
        <div class="overview-box">
          <div class="activity-overview">
            <p>${data[0].title}</p>
            <h1>${data[0].timeframes.daily.current}hrs</h1>
            <p>Last Week - ${data[0].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
      <div id="play" class="windowcontent daily">
        <div class="overview-box">
          <div class="activity-overview">
            <p>${data[1].title}</p>
            <h1>${data[1].timeframes.daily.current}hrs</h1>
            <p>Last Week - ${data[1].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
      <div id="study" class="windowcontent daily">
        <div class="overview-box">
          <div class="activity-overview">
            <p>${data[2].title}</p>
            <h1>${data[2].timeframes.daily.current}hrs</h1>
            <p>Last Week - ${data[2].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
      <div id="exercice" class="windowcontent daily">
        <div class="overview-box">
          <div class="activity-overview">
            <p>${data[3].title}</p>
            <h1>${data[3].timeframes.daily.current}hrs</h1>
            <p>Last Week - ${data[3].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
      <div id="social" class="windowcontent daily">
        <div class="overview-box">
          <div class="activity-overview">
            <p>${data[4].title}</p>
            <h1>${data[4].timeframes.daily.current}hrs</h1>
            <p>Last Week - ${data[4].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
      <div id="care" class="windowcontent daily">
        <div class="overview-box">
          <div class="activity-overview">
            <p>${data[5].title}</p>
            <h1>${data[5].timeframes.daily.current}hrs</h1>
            <p>Last Week - ${data[5].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
   
  `;

  grid.insertAdjacentHTML('beforeend', dailyGrid);
});

function openWindow(evt, windowName) {
  var i, windowContent, windowLinks;

  windowContent = document.getElementsByClassName('windowcontent');
  for (i = 0; i < windowContent.length; i++) {
    windowContent[i].style.display = 'none';
  }

  windowLinks = document.getElementsByClassName('windowlinks');
  for (i = 0; i < windowLinks.length; i++) {
    windowLinks[i].className = windowLinks[i].className.replace( ' active', '');
  }

  document.querySelectorAll(windowName).forEach((div) => {
    div.style.display = 'flex';
  })
  evt.currentTarget.className += ' active';
}

