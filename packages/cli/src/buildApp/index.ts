import { BUILD_APP } from '../constants';
import build from './buildApp';

export function buildApp(commander) {
  // 打包业务项目的命令，
  // 这个命令实际上执行的是 buildApp 文件
  commander
    .command(BUILD_APP)
    .description('打包业务代码')
    .option('-d, --out-dir <path>', '输出目录', 'dist')
    .option('-a, --analyzer', '是否启用分析器')
    .action(build);
}
