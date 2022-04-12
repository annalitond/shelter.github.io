var video = document.querySelector("#video"),
	button = document.querySelector(".presentation_block .video-play-btn");

button.addEventListener("click", function() {
	video.play()
	video.setAttribute("controls","controls");
}, false);

$(".video-play-btn").click(function() {
	$(".presentation_block").addClass('video-play-btn--hide');
})