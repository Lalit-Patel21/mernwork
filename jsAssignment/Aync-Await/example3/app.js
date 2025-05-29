function getEmoji() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("😀");
		}, 3000);
	});
}
async function doTask() {
	let resSpan = document.getElementById("result");
	let pr = getEmoji();
	resSpan.innerHTML = pr;
}
