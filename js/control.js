window.onload = function() {
  let musicPlayer = new Audio("music/My Daisy.mp3");
  musicPlayer.setAttribute("autoplay", true);
  musicPlayer.setAttribute("controls", "controls");
  musicPlayer.setAttribute("id", "musicPlayer");
  let musicDiv = document.getElementsByClassName("music")[0];
  musicDiv.appendChild(musicPlayer);
}

function showLyric() {
  let lyric = document.getElementsByClassName("lyric")[0];
  let showLyricButton = document.getElementsByClassName("showLyric")[0];
  let isDisplayLyric = getComputedStyle(lyric, null).display;
  console.log(isDisplayLyric);
  if (isDisplayLyric == "none") {
    lyric.style.display = "block";
    showLyricButton.children[0].innerHTML = "Thu gọn";
  } else {
    lyric.style.display = "none";
    showLyricButton.children[0].innerHTML = "Xem lời";
  }
}

function direct() {
  location.href = './test.html';
}
