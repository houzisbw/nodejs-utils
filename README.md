# nodejs-utils
nodejs工具函数
# 获取文件夹结构
```js
function getDirectoryStucture(directoryPath){}
```
参数是文件的绝对路径，返回一个对象，代表文件夹结构，key是文件或目录名，value是文件路径，比如/temp下由a.txt和b.txt,则返回
```
{
  temp:{
    a:'/temp/a.txt',
    b:'/temp/b.txt'
  }
}
```
