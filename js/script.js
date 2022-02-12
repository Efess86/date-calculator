'use strict';
window.addEventListener('DOMContentLoaded', function () {
	// Timestamp to date -----
	console.log(Date.now());
	let inputStamp = document.querySelector('.date-input'),
		btnConv = document.querySelector('.btn-convert'),
		outDate = document.querySelector('.outDate');

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
		outDate.innerHTML = `Year: ${year}, Month: ${month}, Date: ${date} Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
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

});