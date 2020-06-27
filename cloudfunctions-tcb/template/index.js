exports.main = async (event, context) => {
	let image = await uniCloud.getTempFileURL({
		fileList: []
	});
	
	return image
};
