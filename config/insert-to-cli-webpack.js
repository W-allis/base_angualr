const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '../');
const buildNgSrcPathList = {
  browser: path.resolve(__dirname, '../node_modules/@angular-devkit/build-angular/src/browser/index.js'),
  karma: path.resolve(__dirname, '../node_modules/@angular-devkit/build-angular/src/karma/index.js'),
  server: path.resolve(__dirname, '../node_modules/@angular-devkit/build-angular/src/server/index.js'),
};
const webpackCliPath = path.resolve(__dirname, './webpack-cli-inject.js').replace(/\\/g, '\\\\');
const findStr = 'webpackMerge(webpackConfigs)';

try {
  Object.keys(buildNgSrcPathList).forEach(type => {
    const filePath = buildNgSrcPathList[type];
    const filePathShort = filePath.replace(rootDir, '');
    const replaceStr = `require('${webpackCliPath}')(webpackMerge(webpackConfigs), wco, '${type}')`;
    const configText = fs.readFileSync(filePath, 'utf-8');

    if (configText.includes(replaceStr)) {
      return;
    }

    if (!configText.includes(findStr)) {
      console.log(chalk.red.bold(`文件 ${chalk.yellow.bold(filePathShort)} 中未发现可替换的字符串： ${findStr}`));
      return;
    }

    console.log(chalk.yellow.bold(` Inserting to: `), chalk.yellow(filePathShort));

    const output = configText.replace(findStr, replaceStr);

    fs.writeFileSync(filePath, output);
  });

  console.log(chalk.green.bold(' well done!'));
} catch(err) {
  console.log(err);
}