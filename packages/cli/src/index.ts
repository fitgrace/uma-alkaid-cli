import { Command } from 'commander';

import { version } from '../package.json';
import { buildLib } from './buildLib/index';
import { buildApp } from './buildApp/index';
import { runDev } from './dev/index';

// creating a command instance
const program = new Command();

/**
 * 查询 uma 的版本
 */
program.version(version, '-v, --version');

/**
 * 执行打包组件库的命令（使用rollup打包）
 */
buildLib(program);

/**
 * 执行打包业务代码的命令（使用webpack，更多的是用webpack控制分包）
 */
buildApp(program);

/**
 * 启动开发环境（使用vite）
 */
runDev(program);

/**
 * commander解析命令行参数
 */
program.parse(process.argv);

/**
 * 如果命令行没有参数如执行uma，则会显示帮助文档
 */
if (!program.args[0]) program.help();
