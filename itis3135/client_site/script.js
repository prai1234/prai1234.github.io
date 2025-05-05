let current = 0;
let interval;
let players = [];

function show(index) {
  const frames = document.querySelectorAll('.video-frame');
  frames.forEach((frame, i) => {
    frame.classList.toggle('video-frame-active', i === index);
  });
  current = index;
}

function next() {
  const frames = document.querySelectorAll('.video-frame');
  current = (current + 1) % frames.length;
  show(current);
}

function prev() {
  const frames = document.querySelectorAll('.video-frame');
  current = (current - 1 + frames.length) % frames.length;
  show(current);
}

function startSlideshow() {
  interval = setInterval(next, 8000);
}

function pauseSlideshow() {
  clearInterval(interval);
}

function onYouTubeIframeAPIReady() {
  document.querySelectorAll('.video-frame iframe').forEach((iframe) => {
    const player = new YT.Player(iframe, {
      events: {
        onStateChange(event) {
          if (event.data === YT.PlayerState.PLAYING) {
            pauseSlideshow();
          } else if (event.data === YT.PlayerState.ENDED) {
            startSlideshow();
          }
        }
      }
    });
    players.push(player);
  });
}
const albums = {
  1: {
    image: 'Album1.jpg',
    tracks: [
      {
        title: '00 HIMALKO KAAKH',
        audio: '16 HIMALKO KAAKH.mp3',
        lyrics: `Lyrics for Album 1...`
      }
    ]
  },
  2: {
    image: 'Album2.jpg',
    tracks: [
      {
        title: '01 BAHANA LEY',
        audio: '01 BAHANA LEY.mp3',
        lyrics: `Verse 1
Bahana ley ta timi tadha bhayau
...`
      },
      /* other track objects */
    ]
  },
  3: {
    image: 'Album3.jpg',
    tracks: [
      { title: '01 MANGSIR', audio: '08 MANGSIR.mp3', lyrics: 'Lyrics for Album 3...' }
    ]
  },
  4: {
    image: 'album4.jpg',
    tracks: [
      { title: '00 INTRO', audio: '14 INTRO.mp3', lyrics: 'Lyrics for Album 4...' }
    ]
  }
};

let currentAlbum = null;
const slide    = document.getElementById('albumSlide');
const slideImg = document.getElementById('slideImage');
const selector = document.getElementById('trackSelector');
const srcTag   = document.getElementById('audioSource');
const player   = document.getElementById('audioPlayer');
const lyricsEl = document.getElementById('lyrics');

function changeTrack(idx) {
  const t = currentAlbum.tracks[idx];
  srcTag.src        = t.audio;
  player.load();
  lyricsEl.textContent = t.lyrics;
}

function openSlide(id) {
  currentAlbum = albums[id];
  slideImg.src = currentAlbum.image;
  selector.innerHTML = '';
  currentAlbum.tracks.forEach((t, i) => {
    const opt = document.createElement('option');
    opt.value   = i;
    opt.textContent = t.title;
    selector.append(opt);
  });
  changeTrack(0);
  slide.style.display = 'flex';
}

function closeSlide() {
  slide.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
  // Video controls
  document.getElementById('nextBtn').addEventListener('click', () => {
    pauseSlideshow();
    next();
  });
  document.getElementById('prevBtn').addEventListener('click', () => {
    pauseSlideshow();
    prev();
  });
  document.getElementById('pauseBtn').addEventListener('click', pauseSlideshow);

  show(current);
  startSlideshow();

  // Album slide-out
  document.querySelectorAll('.album').forEach((el) => {
    // assumes each .album has a data-album attribute matching its key
    el.addEventListener('click', () => openSlide(el.dataset.album));
  });
  document.querySelector('.close').addEventListener('click', closeSlide);
  selector.addEventListener('change', () => changeTrack(selector.value));
});
