/*
 * 拷贝filename1到filename2,如果filename2存在，则覆盖之
 */
var fs = require('fs');
function fileCopy(filename1, filename2, done) {
	var input = fs.createReadStream(filename1);
	var output = fs.createWriteStream(filename2);
	//一边读取数据一边写入output,write方法用于写数据
	input.on('data', function(d) { output.write(d); });
	input.on('error', function(err) { throw err; });
	input.on('end', function() {
		//结束写入，必须
		output.end();
		//调用回调
		done&&done();
	});
}
exports.fileCopy = fileCopy;