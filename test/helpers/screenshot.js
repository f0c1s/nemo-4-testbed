const buildFileName = async function () {
	return (new Date()).toString().replace(/[: +]/g, '-').replace(/[()]/g, '');
}

async function takeOne(prefix, nemo) {
	const fileName = `${prefix}-${await buildFileName()}`;
	const image = await nemo.screenshot.snap(fileName);
	console.info(`\tTook a screenshot: ${image.imagePath}!`);
};

module.exports = takeOne
