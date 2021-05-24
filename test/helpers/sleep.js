async function sleep(nemo, sleepDuration = 3 * 1000) {
	await nemo.driver.sleep(sleepDuration);
}

async function fakeSleep(nemo) {
	await sleep(nemo, 1);
}

module.exports = {
	sleep,
	fakeSleep
};
