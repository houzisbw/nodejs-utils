/*
* 获取路径下文件以及文件夹总体结构，返回一个对象
*/

var fs = require('fs')
var path = require('path')
//获取路径参数下的文件夹结构对象,key为文件名，value为文件路径
function getDirectoryStucture(directoryPath){
	var result = {};
	//同步读取文件内容
	var files = fs.readdirSync(directoryPath);
	files.forEach(function(filename){
		//获取文件完整路径名
		var fullname = path.join(directoryPath,filename);
		//获取文件信息对象
		var fileStat = fs.statSync(fullname)
		//如果是文件
		if(fileStat.isFile()){
			result[filename]=fullname
		//是文件夹,递归生成文件结构对象
		}else if(fileStat.isDirectory()){
			result[filename] = getDirectoryStucture(fullname);
		}
	});
	return result
}
//获取js对象深度,{}深度为0
function getDepthOfObject(obj){
	function helper(obj){
		if(!obj||Object.prototype.toString.call(obj)!=='[object Object]')return 0
		var keys = Object.keys(obj);
		if(keys.length===0)return 0;
		var arr = []
		for(var i=0;i<keys.length;i++){
			arr.push(helper(obj[keys[i]]))
		}
		return Math.max.apply(this,arr)+1
	}
	return helper(obj)

}

exports.getDirectoryStucture = getDirectoryStucture;
exports.getDepthOfObject = getDepthOfObject;
