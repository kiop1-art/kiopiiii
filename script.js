const audioPlayer = document.getElementById('audioPlayer');
let currentTrackIndex = 0;
let hasInteracted = false;

const tracks = [
    'audio/track1.mp3',
    'audio/track2.mp3',
    'audio/track3.mp3',
    'audio/track4.mp3',
    'audio/track5.mp3',
    'audio/track6.mp3',
    'audio/track7.mp3',
    'audio/track8.mp3',
    'audio/track9.mp3',
    'audio/track10.mp3'
];

function initAudio() {
    if (!hasInteracted) {
        audioPlayer.src = tracks[currentTrackIndex];
        audioPlayer.play().catch(() => {});
        hasInteracted = true;
    }
}

function playPause() {
    if (hasInteracted) {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
        document.getElementById('_40_20_icons8-_____-50_1').style.opacity = audioPlayer.paused ? '1' : '0.5';
    } else {
        initAudio();
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audioPlayer.src = tracks[currentTrackIndex];
    if (hasInteracted) audioPlayer.play();
    document.getElementById('_40_21_icons8-_____-50_1').style.opacity = '0.5';
    setTimeout(() => {
        document.getElementById('_40_21_icons8-_____-50_1').style.opacity = '1';
    }, 100);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audioPlayer.src = tracks[currentTrackIndex];
    if (hasInteracted) audioPlayer.play();
    document.getElementById('_40_22_icons8-_____-50_2').style.opacity = '0.5';
    setTimeout(() => {
        document.getElementById('_40_22_icons8-_____-50_2').style.opacity = '1';
    }, 100);
}

audioPlayer.addEventListener('play', () => {
    document.getElementById('_40_20_icons8-_____-50_1').style.opacity = '0.5';
});

audioPlayer.addEventListener('pause', () => {
    document.getElementById('_40_20_icons8-_____-50_1').style.opacity = '1';
});

document.getElementById('_25_3_tg_1').addEventListener("click", () => {
    window.open("https://t.me/uidknowal_kiopi", '_blank');
});

document.getElementById('_38_14_tg_1').addEventListener("click", () => {
    window.open("https://t.me/kiopizxc", '_blank');
});

document.getElementById('_30_8_tg_1').addEventListener("click", () => {
    window.open("https://t.me/yenix_era", '_blank');
});

document.getElementById('_34_17_icons8-____________-_________-____________-2-50_1').addEventListener("click", () => {
    window.open("https://music.yandex.ru/users/kiopi/playlists/3", '_blank');
});

document.getElementById('_40_20_icons8-_____-50_1').addEventListener("click", playPause);
document.getElementById('_40_21_icons8-_____-50_1').addEventListener("click", () => {
    if (!hasInteracted) initAudio();
    nextTrack();
});
document.getElementById('_40_22_icons8-_____-50_2').addEventListener("click", () => {
    if (!hasInteracted) initAudio();
    prevTrack();
});

document.getElementById('startButton')?.addEventListener("click", function() {
    initAudio();
    this.style.display = 'none';
});
