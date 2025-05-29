//Promise Chaining Using async-await
let resSpan;
function calculateSquare(value) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			let num = Number(value);
			if (isNaN(num)) {
				reject("Error! Cannot calc square of a non numeric data");
				return;
			}
			resolve(num * num);
		}, 2000);
	});
}
async function doTask() {
	let inp = document.querySelector("#userinp");
	let data = inp.value;
	resSpan = document.getElementById("result");
	resSpan.innerHTML = "Curr Value:" + data + "<br>";
	try {
		let pr = await calculateSquare(data);
		resSpan.innerHTML += "It's square is " + pr + "<br>";
		let pr2 = await calculateSquare(pr);
		resSpan.innerHTML += "It's square is " + pr2 + "<br>";
		let pr3 = await calculateSquare(pr2);
		resSpan.innerHTML += "It's square is " + pr3 + "<br>";
	} catch (error) {
		resSpan.innerHTML += error;
	}
}
