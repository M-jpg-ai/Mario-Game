noseX = 0;
noseY = 0;

function preload() {
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("#canvas");

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("#game_onsole");

	poseNet = ml5.poseNet(video, modelloaded);
	poseNet.on("pose", gotPoses);
}

function draw() {
	game();
	// image(video,0,0,1240,336);

}

function modelloaded() {
	console.log("Modal Has Loaded");

}

function gotPoses(results) {
	if (results.length >= 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(noseX + "--------\n---------" + noseY);


	}
}

function startGame() {
	gameConfig.status = "play";
}