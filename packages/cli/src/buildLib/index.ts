import { BUILD_LIB } from '../constants';
import build from './buildLib';

export function buildLib(commander) {
  // 当你输入uma buildLib 的时候，就是执行这个命令
  // 这个命令实际上执行的是 buildLib 文件，我们会打包 esm 和 commonjs 规范的两个包
  commander
    .command(BUILD_LIB)
    .description('打包编译库')
    .option('-a, --analyzerUmd', '是否启用webpack打包分析器')
    .option('-e, --entry <path>', 'umd打包路径入口文件', './src/index')
    .option('--output-name <name>', '打包Umd格式后对外暴露的名称')
    .option('--entry-dir <path>', 'cjs和esm打包路径入口目录', './src')
    .option('--out-dir-esm <path>', '输出esm格式的目录', './esm')
    .option('--out-dir-cjs <path>', '输出cjs格式的目录', './lib')
    .option('--out-dir-umd <path>', '输出umd格式的目录', './dist')
    .option('-m, --mode <esm|cjs|umd>', '打包模式 目前支持esm, cjs和umd')
    .action(build);
}
