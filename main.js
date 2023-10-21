var viva = document.getElementById("viva");
var vivaVid = document.getElementById("viva-vid");
var conferment = document.getElementById("conferment");
var confermVid = document.getElementById("conferm-vid");
var post = document.getElementById("post");
var postVid = document.getElementById("post-vid");


viva.addEventListener("click", function(){
  if (vivaVid.className == "hide") {
    vivaVid.className = "";
  } else {
    vivaVid.className = "hide";
  }
});

conferment.addEventListener("click", function(){
  if (confermVid.className == "hide") {
    confermVid.className = "";
  } else {
    confermVid.className = "hide";
  }
});

post.addEventListener("click", function(){
  if (postVid.className == "hide") {
    postVid.className = "";
  } else {
    postVid.className = "hide";
  }
});


// var allVideos = document.querySelectorAll("video");
// for(let i=0; i< allVideos.length; i++){
//   allVideos[i].className = "hide";
// }


// viva.addEventListener("click", vidLink);
// conferment.addEventListener("click", vidLink);
// post.addEventListener("click", vidLink);

// function vidLink() {
//   var allVideos = documenet.querySelectorAll("video");

//   for(let i=0; i < allVideos.length; i++){
//     allVideos.className = "hide";
//   }

//   var vidID = this.attributes["data-video"].value;
//   var vid = document.getElementById("vidID");
//   if (vid.className == "hide") {
//     vid.className = "";
//   } else {
//     vid.className = "hide";
//   }
// }
