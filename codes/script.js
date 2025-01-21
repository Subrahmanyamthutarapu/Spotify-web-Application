console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "AisayKaisay-Hasan Raheem", filePath: "1.mp3", coverPath: "Aisay Kaisay - Hasan Raheem.jpg" },
    { songName: "Attention-Charlie Puth", filePath: "2.mp3", coverPath: "Attention - Charlie Puth.jpg" },
    { songName: "Bikhra-Abdul Hannan", filePath: "3.mp3", coverPath: "Bikhra - Abdul Hannan.jpg" },
    { songName: "Blinding Lights-TheWeeknd", filePath: "4.mp3", coverPath: "Blinding Lights - The Weeknd.jpg" },
    { songName: "Call Out My Name-TheWeeknd", filePath: "5.mp3", coverPath: "Call Out My Name - The Weeknd.jpg" },
    { songName: "Harleys In Hawaii-Katy Perry", filePath: "6.mp3", coverPath: "Harleys In Hawaii - Katy Perry.jpg" },
    { songName: "Heat Waves-Glass Animals", filePath: "7.mp3", coverPath: "Heat Waves - Glass Animals.jpg" },
    { songName: "Hope-XXXTENTACION", filePath: "8.mp3", coverPath: "Hope -XXXTENTACION.jpg" },
    { songName: "JOONA-Hasan Raheem", filePath: "9.mp3", coverPath: "JOONA -Hasan Raheem.jpg" },
    { songName: "Light Switch-Charlie Puth", filePath: "10.mp3", coverPath: "Light Switch -Charlie Puth.jpg" },
    { songName: "Afsanay-Young Stunners", filePath: "11.mp3", coverPath: "Afsanay-Young Stunners.jpg" },
    { songName: "Agency-Young Stunners", filePath: "12.mp3", coverPath: "Agency-Young Stunners.jpg" },
    { songName: "Ajab Si(Om SHanti Om)-K.K", filePath: "13.mp3", coverPath: "Ajab Si-K.K.jpg" },
    { songName: "Akhiyaan - Mitraz", filePath: "14.mp3", coverPath: "Akhiyaan - Mitraz.jpg" },
    { songName: "Anjaan - Jani,Talha Yonus", filePath: "15.mp3", coverPath: "Anjaan-Jani.jpg" },
    { songName: "Ashes(2020) - Stellar", filePath: "16.mp3", coverPath: "Ashes-Stellar.jpg" },
    { songName: "Asli Hai-Young Stunners", filePath: "17.mp3", coverPath: "Asli Hai-Young Stunners.jpg" },
    { songName: "Back To The Future-Bastille", filePath: "18.mp3", coverPath: "Back To The Future-Bastille.jpg" },
    { songName: "Bad Guy-Billie Eilish", filePath: "19.mp3", coverPath: "Bad Guy-Billie Eilish.jpg" },
    { songName: "Bellyache-Billie Eilish", filePath: "20.mp3", coverPath: "Bellyache-Billie Eilish.jpg" },
    { songName: "Blow Your Mind-Dua Lipa", filePath: "21.mp3", coverPath: "Blow Your Mind-Dua Lipa.jpg" },
    { songName: "Burning Down - EYK", filePath: "22.mp3", coverPath: "Burning Down-Everyone You Know.jpg" },
    { songName: "Cake By The Ocean-DNCE", filePath: "23.mp3", coverPath: "Cake By The Ocean-DNCE.jpg" },
    { songName: "Closer-The Chainsmokers", filePath: "24.mp3", coverPath: "Closer-The Chainsmokers.jpg" },
    { songName: "Copines-Aya Nakamura", filePath: "25.mp3", coverPath: "Copines-Aya Nakamura.jpg" },
    { songName: "Dancing Feet-DNCE", filePath: "26.mp3", coverPath: "Dancing Feet-DNCE.jpg" },
    { songName: "Desire-Years & Years", filePath: "27.mp3", coverPath: "Desire-Years & Years.jpg" },
    { songName: "Die For You-TheWeeknd", filePath: "28.mp3", coverPath: "Die For You-TheWeeknd.jpg" },
    { songName: "Djadja-Aya Nakamura", filePath: "29.mp3", coverPath: "Djadja-Aya Nakamura.jpg" },
    { songName: "Dont Let Me Down-Chainsmokers", filePath: "30.mp3", coverPath: "Don't Let Me Down-The Chainsmokers.jpg" },
    { songName: "Don't Mind-Young Stunners", filePath: "31.mp3", coverPath: "Don't Mind-Young Stunners.jpg" },
    { songName: "El Melouk-Ahmed Saad", filePath: "32.mp3", coverPath: "El Melouk-Ahmed Saad.jpg" },
    { songName: "Excuses-Ap Dhillon", filePath: "33.mp3", coverPath: "Excuses-Ap Dhillon.jpg" },
    { songName: "Formula - Labrinth", filePath: "34.mp3", coverPath: "Formula-Labrinth.jpg" },
    { songName: "Goosebumps-Travis Scott", filePath: "35.mp3", coverPath: "Goosebumps-Travis Scott.jpg" },
    { songName: "Head First-Christian French", filePath: "36.mp3", coverPath: "Head First-Christian French.jpg" },
    { songName: "Heartburn(Remix) - Wafia", filePath: "37.mp3", coverPath: "Heartburn-Wafia.jpg" },
    { songName: "Honeypie - JAWNY", filePath: "38.mp3", coverPath: "Honeypie-JAWNY.jpg" },
    { songName: "Hymn For - Coldplay", filePath: "39.mp3", coverPath: "Hymn For The Weekend-Coldplay.jpg" },
    { songName: "In the Dark - Swae Lee", filePath: "40.mp3", coverPath: "In the Dark-Swae Lee.jpg" },
    { songName: "Kana Yaari Kaifi Khalil", filePath: "41.mp3", coverPath: "Kana Yaari Kaifi Khalil.jpg" },
    { songName: "Let Me Kiss You - 1D", filePath: "42.mp3", coverPath: "Kiss You-1D.jpg" },
    { songName: "Kya Mujhe Pyar Hai-K.K", filePath: "43.mp3", coverPath: "Kya Mujhe Pyar Hai -K.K.jpg" },
    { songName: "Labon Ko(Bhool Bhulaiya) -KK", filePath: "44.mp3", coverPath: "Labon Ko-KK.jpg" },
    { songName: "Levitating-Dua Lipa", filePath: "45.mp3", coverPath: "Levitating-Dua Lipa.jpg" },
    { songName: "Lights Down Low-MAX", filePath: "46.mp3", coverPath: "Lights Down Low-MAX.jpg" },
    { songName: "Love Nwantiti-CKay", filePath: "47.mp3", coverPath: "Love Nwantiti-CKay.jpg" },
    { songName: "Lovely - Billie Eilish,Khalid", filePath: "48.mp3", coverPath: "Lovely-Billie Eilish.jpg" },
    { songName: "Michael Jackson-Lovin You", filePath: "49.mp3", coverPath: "Loving You-Michael Jackson.jpg" },
    { songName: "Lucid Dreams-Juice WRLD", filePath: "50.mp3", coverPath: "Lucid Dreams-Juice WRLD.jpg" },
    { songName: "Maikada - M. Samie", filePath: "51.mp3", coverPath: "Maikada-Muhammad Samie.jpg" },
    { songName: "Mushk OST-Ali Zafar", filePath: "52.mp3", coverPath: "Mushk OST-Ali Zafar.jpg" },
    { songName: "My Universe-Coldplay", filePath: "53.mp3", coverPath: "My Universe-Coldplay.jpg" },
    { songName: "Mystery of Love-Sufjan Stevens", filePath: "54.mp3", coverPath: "Mystery of Love-Sufjan Stevens.jpg" },
    { songName: "No Lie -Dua Lipa,Sean Paul", filePath: "55.mp3", coverPath: "No Lie-Dua Lipa.jpg" },
    { songName: "Passive-The Perfect Circle", filePath: "56.mp3", coverPath: "Passive-The Perfect Circle.jpg" },
    { songName: "Peaky Blinder-Otnicka", filePath: "57.mp3", coverPath: "Peaky Blinder-Otnicka.jpg" },
    { songName: "Piche Hut - Hassan Raheem", filePath: "58.mp3", coverPath: "Piche Hut - Hassan Raheem.jpg" },
    { songName: "Right Round - Flo Rida", filePath: "59.mp3", coverPath: "Right Round - Flo Rida.jpg" },
    { songName: "Sach Keh Raha Hai-KK", filePath: "60.mp3", coverPath: "Sach Keh Raha Hai-KK.jpg" },
    { songName: "Smile - Juice WRLD", filePath: "61.mp3", coverPath: "Smile-Juice WRLD.jpg" },
    { songName: "Sorry - Justin Bieber", filePath: "62.mp3", coverPath: "Sorry-Justin Bieber.jpg" },
    { songName: "Starboy - The Weeknd", filePath: "63.mp3", coverPath: "Starboy - The Weeknd.jpg" },
    { songName: "Sunflower-Swae Lee", filePath: "64.mp3", coverPath: "Sunflower-Swae Lee.jpg" },
    { songName: "Takeaway-The Chainsmokers", filePath: "65.mp3", coverPath: "Takeaway-The Chainsmokers.jpg" },
    { songName: "The Hot Stepper-Ini Kamoze", filePath: "66.mp3", coverPath: "The Hot Stepper-Ini Kamoze.jpg" },
    { songName: "Vibe(2021) -Herman", filePath: "67.mp3", coverPath: "Vibe-Herman.jpg" },
    { songName: "We Don't Talk-Charlie Puth", filePath: "68.mp3", coverPath: "We Don't Talk Anymore - Charlie Puth.jpg" },
    { songName: "Do You Mean-Justin Bieber", filePath: "69.mp3", coverPath: "What Do You Mean-Justin Bieber.jpg" },
    { songName: "What Makes You Beautiful-1D", filePath: "70.mp3", coverPath: "What Makes You Beautiful-1D.jpg" },
    { songName: "World Is Mine-Samm Henshaw", filePath: "71.mp3", coverPath: "World Is Mine-Samm Henshaw.jpg" },
    { songName: "Без тебя я не я-JONY", filePath: "72.mp3", coverPath: "Без тебя я не я-JONY.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 71) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})