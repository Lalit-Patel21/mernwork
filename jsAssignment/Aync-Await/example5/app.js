//Rewrite the code using async-await
let resSpan;
async function calculateSquare(value) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			let num = Number(value);
			if (isNaN(num)) {
				reject("Cannot calc square of a non numeric data");
				return;
			}
			resolve(num * num);
		}, 2000);
	});
}
async function doTask() {
	let inp = document.getElementById("userinp");
	resSpan = document.getElementById("result");
	let data = inp.value;
	resSpan.innerHTML = `Curr Value:${data}<br>`;
	try {
		let pr = await calculateSquare(data);
		resSpan.innerHTML += `It's square is${pr}`;
	} catch (error) {
		resSpan.innerHTML += `${error}`;
	} finally {
		resSpan.innerHTML += "<br>Thank you for using the app!";
	}
}
