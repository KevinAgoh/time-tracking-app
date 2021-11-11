const grid = document.querySelector('.activity-grid');

fetch('../data.json')
.then(response => response.json())
.then((data) => {
  const dailyGrid = `
    <div id="work" class="windowcontent daily"> 
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[0].title}</h5>
          <h1>${data[0].timeframes.daily.current}hrs</h1>
          <p>Last Week - ${data[0].timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
    <div id="play" class="windowcontent daily">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[1].title}</h5>
          <h1>${data[1].timeframes.daily.current}hrs</h1>
          <p>Last Week - ${data[1].timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
    <div id="study" class="windowcontent daily">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[2].title}</h5>
          <h1>${data[2].timeframes.daily.current}hrs</h1>
          <p>Last Week - ${data[2].timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
    <div id="exercice" class="windowcontent daily">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[3].title}</h5>
          <h1>${data[3].timeframes.daily.current}hrs</h1>
          <p>Last Week - ${data[3].timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
    <div id="social" class="windowcontent daily">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[4].title}</h5>
          <h1>${data[4].timeframes.daily.current}hrs</h1>
          <p>Last Week - ${data[4].timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
    <div id="care" class="windowcontent daily">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[5].title}</h5>
          <h1>${data[5].timeframes.daily.current}hrs</h1>
          <p>Last Week - ${data[5].timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
   
  `;

  const weeklyGrid = `
    <div id="work" class="windowcontent weekly"> 
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[0].title}</h5>
          <h1>${data[0].timeframes.weekly.current}hrs</h1>
          <p>Last Week - ${data[0].timeframes.weekly.previous}</p>
        </div>
      </div>
    </div>
    <div id="play" class="windowcontent weekly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[1].title}</h5>
          <h1>${data[1].timeframes.weekly.current}hrs</h1>
          <p>Last Week - ${data[1].timeframes.weekly.previous}</p>
        </div>
      </div>
    </div>
    <div id="study" class="windowcontent weekly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[2].title}</h5>
          <h1>${data[2].timeframes.weekly.current}hrs</h1>
          <p>Last Week - ${data[2].timeframes.weekly.previous}</p>
        </div>
      </div>
    </div>
    <div id="exercice" class="windowcontent weekly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[3].title}</h5>
          <h1>${data[3].timeframes.weekly.current}hrs</h1>
          <p>Last Week - ${data[3].timeframes.weekly.previous}</p>
        </div>
      </div>
    </div>
    <div id="social" class="windowcontent weekly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[4].title}</h5>
          <h1>${data[4].timeframes.weekly.current}hrs</h1>
          <p>Last Week - ${data[4].timeframes.weekly.previous}</p>
        </div>
      </div>
    </div>
    <div id="care" class="windowcontent weekly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[5].title}</h5>
          <h1>${data[5].timeframes.weekly.current}hrs</h1>
          <p>Last Week - ${data[5].timeframes.weekly.previous}</p>
        </div>
      </div>
    </div>
  `;

  const monthlyGrid = `
    <div id="work" class="windowcontent monthly"> 
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[0].title}</h5>
          <h1>${data[0].timeframes.monthly.current}hrs</h1>
          <p>Last Week - ${data[0].timeframes.monthly.previous}</p>
        </div>
      </div>
    </div>
    <div id="play" class="windowcontent monthly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[1].title}</h5>
          <h1>${data[1].timeframes.monthly.current}hrs</h1>
          <p>Last Week - ${data[1].timeframes.monthly.previous}</p>
        </div>
      </div>
    </div>
    <div id="study" class="windowcontent monthly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[2].title}</h5>
          <h1>${data[2].timeframes.monthly.current}hrs</h1>
          <p>Last Week - ${data[2].timeframes.monthly.previous}</p>
        </div>
      </div>
    </div>
    <div id="exercice" class="windowcontent monthly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[3].title}</h5>
          <h1>${data[3].timeframes.monthly.current}hrs</h1>
          <p>Last Week - ${data[3].timeframes.monthly.previous}</p>
        </div>
      </div>
    </div>
    <div id="social" class="windowcontent monthly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[4].title}</h5>
          <h1>${data[4].timeframes.monthly.current}hrs</h1>
          <p>Last Week - ${data[4].timeframes.monthly.previous}</p>
        </div>
      </div>
    </div>
    <div id="care" class="windowcontent monthly">
      <div class="overview-box">
        <div class="activity-overview">
          <h5>${data[5].title}</h5>
          <h1>${data[5].timeframes.monthly.current}hrs</h1>
          <p>Last Week - ${data[5].timeframes.monthly.previous}</p>
        </div>
      </div>
    </div>
  `;

  grid.insertAdjacentHTML('beforeend', dailyGrid);
  grid.insertAdjacentHTML('beforeend', weeklyGrid);
  grid.insertAdjacentHTML('beforeend', monthlyGrid);
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

