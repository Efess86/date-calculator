'use strict';
window.addEventListener('DOMContentLoaded', function () {
	// const startTime = Date.now();
	// const endTime = startTime + 150000;
	// let equals = endTime - startTime;
	// let timer;
	// console.log(startTime);

	// function update() {
	// 	let t = Date.now();
	// 	if (t >= 1644481638736) {
	// 		clearInterval(timer);
	// 	} else {
	// 		console.log(t);
	// 	}
	// }
	// timer = setInterval(update, 567);

	// console.log('Start');
	// function timeUpdate() {
	// 	if (equals === 0) {
	// 		clearInterval(timer);
	// 		console.log('Finish');
	// 	} else {
	// 		equals = equals - 10000;
	// 		console.log(equals);
	// 	}
	// }
	// timer = setInterval(timeUpdate, 300);


	// ========================================

	// const dateNow = new Date();

	// console.log(dateNow.getHours());

	// const input = document.querySelector('.input');
	// const btn = document.querySelector('.btn');

	// btn.addEventListener('click', () => {
	// 	let numInput = input.value;
	// 	numInput = parseInt(numInput);
	// 	if (Number.isInteger(numInput)) {
	// 		console.log(numInput);
	// 	} else {
	// 		console.log('Please enter number');
	// 	}
	// });

	// function calculateDate(start, end) {
	// 	let equal = 0;
	// 	equal = end - start;
	// 	return equal;
	// }

	// console.log(calculateDate(Date.now(), 12));


	// ===============================================================
	// Timestamp to date -----
	console.log(Date.now());
	let inputStamp = document.querySelector('.date-input'),
		btnConv = document.querySelector('.btn-convert');

	btnConv.addEventListener('click', () => {
		let stamp = inputStamp.value;
		stamp = parseInt(stamp);
		let dateObj = new Date(stamp);
		let year = dateObj.getFullYear();
		let month = dateObj.getMonth() + 1;
		let date = dateObj.getDate();
		let hours = dateObj.getHours();
		let minutes = dateObj.getMinutes();
		let seconds = dateObj.getSeconds();
		console.log(`Year: ${year}, Month: ${month}, Date: ${date} Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
	});

	// Date to timeStamp -------

	// Start date ============================= 
	const btnDateToStamp = document.querySelector('.dts-btn'), // Start date vars
		year = document.querySelector('.start-year'),
		month = document.querySelector('.start-month'),
		date = document.querySelector('.start-date'),
		minutes = document.querySelector('.start-minutes'),
		hours = document.querySelector('.start-hours'),
		seconds = document.querySelector('.start-seconds'), // End date vars
		endYear = document.querySelector('.end-year'),
		endMonth = document.querySelector('.end-month'),
		endDate = document.querySelector('.end-date'),
		endMinutes = document.querySelector('.end-minutes'),
		endHours = document.querySelector('.end-hours'),
		endSeconds = document.querySelector('.end-seconds'),
		output = document.querySelector('.dts-out'),
		resSecond = 1000, // Result vars
		resMinute = resSecond * 60,
		resHour = resMinute * 60,
		resDay = resHour * 24,
		resYear = resDay * 365;


	btnDateToStamp.addEventListener('click', () => {
		let ye = year.value;
		let mo = month.value;
		let da = date.value;
		let mi = minutes.value;
		let ho = hours.value;
		let se = seconds.value;

		let endYe = endYear.value;
		let endMo = endMonth.value;
		let endDa = endDate.value;
		let endMi = endMinutes.value;
		let endHo = endHours.value;
		let endSe = endSeconds.value;

		ye = parseInt(ye);
		mo = parseInt(mo);
		da = parseInt(da);
		ho = parseInt(ho);
		mi = parseInt(mi);
		se = parseInt(se);

		endYe = parseInt(endYe);
		endMo = parseInt(endMo);
		endDa = parseInt(endDa);
		endHo = parseInt(endHo);
		endMi = parseInt(endMi);
		endSe = parseInt(endSe);

		let newDate = new Date(ye, mo - 1, da, ho, mi, se);
		let newEndDate = new Date(endYe, endMo - 1, endDa, endHo, endMi, endSe);
		let resultDate = new Date(newEndDate.getTime() - newDate.getTime());

		let leftYears = Math.floor(resultDate / (resYear)),
			leftDays = Math.floor(resultDate % (resYear) / (resDay)),
			leftHours = Math.floor(resultDate % (resDay) / (resHour)),
			leftMinutes = Math.floor(resultDate % (resHour) / (resMinute)),
			leftSeconds = Math.floor(resultDate % (resMinute) / (resSecond));

		console.log(`Years: ${leftYears},  Days: ${leftDays} Hours: ${leftHours}, Minutes: ${leftMinutes}, Seconds: ${leftSeconds}`);

		output.innerHTML = `Years: ${leftYears},  Days: ${leftDays} Hours: ${leftHours}, Minutes: ${leftMinutes}, Seconds: ${leftSeconds}`;
	});


	// function timeDifference(current, previous) {

	// 	let msPerMinute = 60 * 1000;
	// 	let msPerHour = msPerMinute * 60;
	// 	let msPerDay = msPerHour * 24;
	// 	let msPerMonth = msPerDay * 30;
	// 	let msPerYear = msPerDay * 365;

	// 	let elapsed = current - previous;

	// 	if (elapsed < msPerMinute) {
	// 		return Math.round(elapsed / 1000) + ' seconds ago';
	// 	} else if (elapsed < msPerHour) {
	// 		return Math.round(elapsed / msPerMinute) + ' minutes ago';
	// 	} else if (elapsed < msPerDay) {
	// 		return Math.round(elapsed / msPerHour) + ' hours ago';
	// 	} else if (elapsed < msPerMonth) {
	// 		return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
	// 	} else if (elapsed < msPerYear) {
	// 		return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
	// 	} else {
	// 		return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
	// 	}
	// }


});