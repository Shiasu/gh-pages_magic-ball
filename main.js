window.addEventListener("load", function() {

	const ball = document.getElementById('prediction-ball');

	function ballDrag() {
		ball.classList.add("dragClass");
		setTimeout(()=> {
			ball.classList.remove("dragClass");
		}, 600)
	}

	function draw(fontSize, text) {
		const ctx = ball.getContext("2d");
		ball.height = 400;
		ball.width = 400;

		const radGrad = ctx.createRadialGradient(200, 200, 200, 80, 80, 10);
		radGrad.addColorStop(0.1, 'rgba(0,0,0,0)');
		radGrad.addColorStop(0.13, "black");
		radGrad.addColorStop(1, "#a2a2a2");
		ctx.fillStyle = radGrad;
		ctx.fillRect(0,0,400,400);

		let height = 180 * Math.cos(Math.PI / 6);
		ctx.beginPath()
		ctx.moveTo(95, 260);
		ctx.lineTo(275, 260);
		ctx.lineTo(185, 260 - height);
		ctx.closePath();
		ctx.lineWidth = 10;
		ctx.strokeStyle = 'black';
		ctx.stroke();
		ctx.fillStyle = "#231aa9";
		ctx.fill();

		ctx.fillStyle = "white";
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		ctx.font = `${fontSize}px serif`;
  		ctx.fillText(text, 184, 205);
	}

	let fontSize;

	function randomAnswer() {
		let randomNum = Math.ceil(Math.random()*100);
		let result;

		if (randomNum > 0 && randomNum <= 10) {
			result = "Yes";
			fontSize = 22;
		} else if (randomNum > 10 && randomNum <= 20) {
			result = "No";
			fontSize = 22;
		} else if (randomNum > 20 && randomNum <= 30) {
			result = "Maybe";
			fontSize = 22;
		} else if (randomNum > 30 && randomNum <= 40) {
			result = "Ask again later";
			fontSize = 16;
		} else if (randomNum > 40 && randomNum <= 50) {
			result = "Most likely";
			fontSize = 22;
		} else if (randomNum > 50 && randomNum <= 60) {
			result = "It is certain";
			fontSize = 20;
		} else if (randomNum > 60 && randomNum <= 70) {
			result = "Cannot predict now";
			fontSize = 14;
		} else if (randomNum > 70 && randomNum <= 80) {
			result = "Don’t count on it";
			fontSize = 14;
		} else if (randomNum > 80 && randomNum <= 90) {
			result = "Very doubtful";
			fontSize = 17;
		} else {
			result = "Outlook good";
			fontSize = 17;
		}
		return result;
	}

	draw(22, "Ask!");

	ball.addEventListener("click", function() {
		ballDrag();
		draw(0, "");
		let answer = randomAnswer();
		setTimeout(draw, 500, fontSize, answer);
	})
})