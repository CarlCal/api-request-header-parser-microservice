
exports.software = function (header) {
	var temp = header.substring(0, header.indexOf(")"))

	return temp.substring(header.indexOf("(") + 1) 
}


exports.language = function (header) {
	return header
					.substring(0, header.indexOf(','))
}