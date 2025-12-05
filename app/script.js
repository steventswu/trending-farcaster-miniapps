import FarcasterSDK from 'https://esm.sh/@farcaster/miniapp-sdk';

document.addEventListener('DOMContentLoaded', () => {
  const sdk = new FarcasterSDK();
  sdk.actions.ready();

  const leaderboardList = document.getElementById('leaderboard-list');
  const detailView = document.getElementById('detail-view');
  const detailContent = document.getElementById('detail-content');
  const castButton = document.getElementById('cast-button');

  // Mock data for trending mini apps
  const trendingApps = [
    {
      name: 'Cool App 1',
      summary: 'This is a very cool app.',
      details: 'This is a detailed summary of Cool App 1. It does amazing things.',
      castText: 'I just discovered Cool App 1 on the Trending Mini Apps Leaderboard! #farcaster #miniapps'
    },
    {
      name: 'Awesome App 2',
      summary: 'Another awesome app.',
      details: 'Awesome App 2 is even more awesome. You should definitely check it out.',
      castText: 'Awesome App 2 is trending! Check it out. #farcaster #miniapps'
    },
    {
      name: 'Fantastic App 3',
      summary: 'A fantastic app for you.',
      details: 'Fantastic App 3 will blow your mind. It is the future of mini apps.',
      castText: 'I love Fantastic App 3! #farcaster #miniapps'
    }
  ];

  function renderLeaderboard() {
    leaderboardList.innerHTML = '';
    trendingApps.forEach((app, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'fc-list-item';
      listItem.innerHTML = `
        <div class="fc-list-item-title">${app.name}</div>
        <div class="fc-list-item-summary">${app.summary}</div>
      `;
      listItem.addEventListener('click', () => showDetailView(app));
      leaderboardList.appendChild(listItem);
    });
  }

  function showDetailView(app) {
    leaderboardList.style.display = 'none';
    detailView.style.display = 'block';
    detailContent.innerHTML = `
      <h2>${app.name}</h2>
      <p>${app.details}</p>
    `;
    castButton.onclick = () => {
      sdk.actions.composeCast({
        text: app.castText
      });
    };
  }

  renderLeaderboard();
});
