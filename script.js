const audioPlayer = document.getElementById('audioPlayer');
let currentTrackIndex = 0;
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

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById('_40_20_icons8-_____-50_1').style.opacity = '0.5';
    } else {
        audioPlayer.pause();
        document.getElementById('_40_20_icons8-_____-50_1').style.opacity = '1';
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audioPlayer.src = tracks[currentTrackIndex];
    audioPlayer.play();
    document.getElementById('_40_21_icons8-_____-50_1').style.opacity = '0.5';
    setTimeout(() => {
        document.getElementById('_40_21_icons8-_____-50_1').style.opacity = '1';
    }, 100);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audioPlayer.src = tracks[currentTrackIndex];
    audioPlayer.play();
    document.getElementById('_40_22_icons8-_____-50_2').style.opacity = '0.5';
    setTimeout(() => {
        document.getElementById('_40_22_icons8-_____-50_2').style.opacity = '1';
    }, 100);
}

document.getElementById('_25_3_tg_1').addEventListener("click", function() {
    window.location.href = "https://t.me/uidknowal_kiopi";
});

document.getElementById('_38_14_tg_1').addEventListener("click", function() {
    window.location.href = "https://t.me/kiopizxc";
});

document.getElementById('_30_8_tg_1').addEventListener("click", function() {
    window.location.href = "https://t.me/yenix_era";
});

document.getElementById('_34_17_icons8-____________-_________-____________-2-50_1').addEventListener("click", function() {
    window.location.href = "https://music.yandex.ru/users/(name)/playlists/3?utm_medium=copy_link";
});

document.getElementById('_40_20_icons8-_____-50_1').addEventListener("click", playPause);
document.getElementById('_40_21_icons8-_____-50_1').addEventListener("click", nextTrack);
document.getElementById('_40_22_icons8-_____-50_2').addEventListener("click", prevTrack);

window.addEventListener('load', () => {
    audioPlayer.src = tracks[currentTrackIndex];
    audioPlayer.play().catch(() => {
        console.('kiopi');
    });
});
