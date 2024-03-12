// Replace Text in Header with "replace me"
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
	replace = new ReplaceMe(checkReplace, {
		animation: 'animated fadeIn',
		speed: 1500,
		separator: ',',
		loopCount: 'infinite',
		autoRun: true,
	});
}
