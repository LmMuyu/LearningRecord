exports.main = async (event, context) => {
	let image = await uniCloud.getTempFileURL({
		fileList: ["cloud://createdinit200216-bad033.6372-createdinit200216-bad033-1302455858/3f6c0b67902473eb1116468b9c613b34.jpg"]
	});
	
	return image
};
