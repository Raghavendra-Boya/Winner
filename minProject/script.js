let moods = {
    happy: {
        emoji: "😅",
        quote: "always be happy",
        bgColor: "Green",
        songs: [
            { title: "Happy", artist: "Pharrell Williams", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { title: "Good Life", artist: "OneRepublic", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { title: "Walking on Sunshine", artist: "Katrina & The Waves", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
            { title: "Uptown Funk", artist: "Bruno Mars", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
            { title: "Can’t Stop the Feeling!", artist: "Justin Timberlake", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
        ]
    },
    sad: {
        emoji: "😔",
        quote: "sometimes you just need to cry",
        bgColor: "Blue",
        songs: [
            { title: "Someone Like You", artist: "Adele", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
      { title: "Let Her Go", artist: "Passenger", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
      { title: "Fix You", artist: "Coldplay", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
      { title: "Stay With Me", artist: "Sam Smith", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
      { title: "Jealous", artist: "Labrinth", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
        ]
    },
    energetic: {
        emoji: "💪",
        bgColor: "#ffeaa7",
        quote: "Push yourself, because no one else is going to do it for you.",
        songs: [
          { title: "Stronger", artist: "Kanye West", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
          { title: "Eye of the Tiger", artist: "Survivor", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
          { title: "Don't Stop Me Now", artist: "Queen", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
          { title: "Believer", artist: "Imagine Dragons", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
          { title: "Firework", artist: "Katy Perry", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" }
        ]
      },
      calm: {
        emoji: "😌",
        bgColor: "#b2f7ef",
        quote: "Peace comes from within. Do not seek it without.",
        songs: [
          { title: "Weightless", artist: "Marconi Union", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
          { title: "Sunset Lover", artist: "Petit Biscuit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" },
          { title: "River Flows in You", artist: "Yiruma", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3" },
          { title: "Bloom", artist: "The Paper Kites", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3" },
          { title: "Experience", artist: "Ludovico Einaudi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3" }
        ]
      },
      energetic: {
        emoji: "💪",
        bgColor: "#ffeaa7",
        quote: "Push yourself, because no one else is going to do it for you.",
        songs: [
          { title: "Stronger", artist: "Kanye West", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
          { title: "Eye of the Tiger", artist: "Survivor", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
          { title: "Don't Stop Me Now", artist: "Queen", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
          { title: "Believer", artist: "Imagine Dragons", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
          { title: "Firework", artist: "Katy Perry", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" }
        ]
      },
      calm: {
        emoji: "😌",
        bgColor: "#b2f7ef",
        quote: "Peace comes from within. Do not seek it without.",
        songs: [
          { title: "Weightless", artist: "Marconi Union", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
          { title: "Sunset Lover", artist: "Petit Biscuit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" },
          { title: "River Flows in You", artist: "Yiruma", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3" },
          { title: "Bloom", artist: "The Paper Kites", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3" },
          { title: "Experience", artist: "Ludovico Einaudi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3" }
        ]
      }


}

function selectMood(mood){
    const selctedMood = moods[mood];
    if(!selctedMood) return;

    document.body.style.backgroundColor = selctedMood.bgColor;
    document.getElementById("emoji").textContent = selctedMood.emoji;
    document.getElementById("quote").textContent = selctedMood.quote;
    showSongs(selctedMood.songs)
}

function showSongs(songs){
   const list =  document.getElementById("songList");
   list.innerHTML = "";

   songs.forEach(function (song){
    const li = document.createElement("li");
    li.textContent = song.title + " by " + song.artist;
    li.onclick = function (){
        playMusic(song.url);
    } 
    list.appendChild(li);
   } )
}

function playMusic(MusicUrl){
const audioPlayer = document.getElementById("audioPlayer").value;
audioPlayer.src = MusicUrl;
audioPlayer.load();
audioPlayer.play();
}



