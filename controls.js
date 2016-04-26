//creeaza obiecte 
$(document).ready(function(){
  video = document.getElementById("videoPlayer");

  display = document.getElementById("displayStatus");

  video.onplaying = function() {
    display.innerHTML = "Playing ...";
  }
  video.onpause = function() {
    display.innerHTML = "Paused";
  }
});
$(document).ready(function(){

//functie volum
$("input[type=range]").change(function(){
var SoundVolume = $("input[type=range]").val();
document.getElementById("volume").innerHTML=SoundVolume;
SetVolume(SoundVolume/100);
});


//functie redare melodie anterioara
$("#inainte").click(function(){

var inx = songs.indexOf(StripSlash(videoPlayer.src));
if(inx==0)
{
  videoPlayer.src= "songs/"+songs[songs.length-1];  
}
else{
videoPlayer.src= "songs/"+songs[inx-1];
	}

$(".stylesong").each(function(){
								if($(this).hasClass("activesong"))
								{$(this).removeClass("activesong");
								 $(this).addClass("songname");
								}
											if($(this).html()==songs[inx-1])
												$(this).addClass("activesong");
											
    });
	var lastsong = songs.length-1;
	if($(".stylesong:eq(" +lastsong+")").html()==StripSlash(videoPlayer.src))
	{$(".stylesong:eq(" +lastsong+")").addClass("activesong");}
	play();



});

//buton toggle
$("#expand").click(function(){
	
	getDB();
	$(".continut").toggle();
	
});

  }); 

//bara progres
function progressUpdate() {
    var positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration * 100)  + "%";
	if(positionBar.style.width==100+"%" && $("#repeat").css("color")=="rgb(255, 255, 255)")
	{$("#dupa").trigger("click");}
else if(positionBar.style.width==100+"%" && $("#repeat").css("color")=="rgb(11, 31, 149)" )
	{
	 $("#pause").hide();
	 $("#play").show();
	 $("#play").trigger("click");
	 }
	if(Math.round(video.currentTime*100)/100<60)
	{	
		displayStatus.innerHTML = Math.floor((Math.round(video.currentTime*100)/100));
	}

if(Math.round(video.currentTime*100)/100>=60)
	{
		displayStatus.innerHTML = Math.floor( (Math.round(video.currentTime*100)/100)/60 ) + ":" +Math.floor( (Math.round(video.currentTime*100)/100)%60 );
	}
	
if(Math.round(video.currentTime*100)/100>=60 && Math.floor( (Math.round(video.currentTime*100)/100)%60 ) <10)
	{	
		displayStatus.innerHTML = Math.floor( (Math.round(video.currentTime*100)/100)/60 ) + ":0" +Math.floor( (Math.round(video.currentTime*100)/100)%60 );
	}
  
  }
  



function play() {
  if(StripSlash(video.src)=='undefined')
    {video.src="songs/"+songs[0];}
	
	var songName = StripSlash(videoPlayer.src);
	$("#songname").html(songName);
	$("#pause").show();
	$("#play").hide();
	
  video.play();
}

function pause() {

	$("#play").show();
	$("#pause").hide();

  video.pause();
}

function stop() {
  
  $("#play").show();
  $("#pause").hide();
  video.pause();
  video.currentTime = 0;
}

function speedUp() {
  video.play();
  video.playbackRate = 2;
}

function slowDown() {
  video.play();
  video.playbackRate = 0.5;
}

function normalSpeed() {
  video.play();
  video.playbackRate = 1;
}

function SetVolume(x){
	video.volume=x;

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

