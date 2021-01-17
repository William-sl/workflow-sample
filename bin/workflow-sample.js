#!/usr/bin/env node 
//在mac下读写权限改为755 才能作为一个cli

//通过命令行传递参数是通过 process.argv实现的
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
//找到这个模块所对应的路径
// （通过相对路径 ../bin/index  ..会找到package.json里边的main的lib/index）
process.argv.push(require.resolve('..')) 

 require('gulp/bin/gulp')