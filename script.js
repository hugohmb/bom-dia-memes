const popup = document.getElementById('popup');
const startButton = document.getElementById('startButton');
const backgroundMusic = document.getElementById('backgroundMusic');
const mainContent = document.getElementById('mainContent');
const contentArea = document.getElementById('content');
const randomButton = document.getElementById('randomButton');

const mediaList = [
  { type: 'img', src: 'img/memes/01.jpg' },
  { type: 'img', src: 'img/memes/02.jpg' },
  { type: 'img', src: 'img/memes/03.jpg' },
  { type: 'img', src: 'img/memes/04.jpg' },
  { type: 'img', src: 'img/memes/05.jpg' },
  { type: 'img', src: 'img/memes/06.jpg' },
  { type: 'img', src: 'img/memes/07.jpg' },
  { type: 'img', src: 'img/memes/08.jpg' },
  { type: 'img', src: 'img/memes/09.jpg' },
  { type: 'img', src: 'img/memes/10.jpg' },
  { type: 'img', src: 'img/memes/11.jpg' },
  { type: 'img', src: 'img/memes/12.jpg' },
  { type: 'img', src: 'img/memes/13.jpg' },
  { type: 'img', src: 'img/memes/14.jpg' },
  { type: 'img', src: 'img/memes/15.jpg' },
  { type: 'img', src: 'img/memes/16.jpg' },
  { type: 'img', src: 'img/memes/17.jpg' },
  { type: 'img', src: 'img/memes/18.jpg' },
  { type: 'img', src: 'img/memes/19.jpg' },
  { type: 'img', src: 'img/memes/20.jpg' },
  { type: 'img', src: 'img/memes/21.jpg' },
  { type: 'img', src: 'img/memes/22.jpg' },
  { type: 'img', src: 'img/memes/23.jpg' },
  { type: 'img', src: 'img/memes/24.jpg' },
  { type: 'img', src: 'img/memes/25.jpg' },
  { type: 'img', src: 'img/memes/26.jpg' },
  { type: 'img', src: 'img/memes/27.jpg' },
  { type: 'img', src: 'img/memes/28.jpg' },
  { type: 'img', src: 'img/memes/29.jpg' },
  { type: 'img', src: 'img/memes/30.jpg' },
];

// Quando clicar no botão "Vamos!"
startButton.addEventListener('click', () => {
  popup.style.display = 'none'; // Esconde o popup
  mainContent.style.display = 'block'; // Mostra a página principal

  backgroundMusic.volume = 0.5; // Define o volume para 50%
  backgroundMusic.play(); // Começa a tocar a música
});

// Quando clicar no botão "Mostrar Mensagem de Bom Dia"
randomButton.addEventListener('click', () => {
  const randomMedia = mediaList[Math.floor(Math.random() * mediaList.length)];
  contentArea.innerHTML = '';

  if (randomMedia.type === 'img') {
    const img = document.createElement('img');
    img.src = randomMedia.src;
    contentArea.appendChild(img);
  } else if (randomMedia.type === 'video') {
    const video = document.createElement('video');
    video.src = randomMedia.src;
    video.controls = true;
    contentArea.appendChild(video);
  }
});
