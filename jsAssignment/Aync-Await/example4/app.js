function getEmoji() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			let num = Math.round(Math.random() * 1);
			console.log("num:", num);
			if (num == 0) {
				reject("😒");
			} else {
				resolve("😀");
			}
		}, 3000);
	});
}
async function doTask() {
	let resSpan = document.getElementById("result");
	try {
		let pr = await getEmoji();
		resSpan.innerHTML = "Resolved:" + pr;
	} catch (error) {
		resSpan.innerHTML = "Rejected:" + error;
	}
}
