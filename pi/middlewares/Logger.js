const { Console } = require('console');
const fs = require('fs');
const {spawn} = require('child_process');
// const time_zone_shift = 1000 * 60 * ( - new Date().getTimezoneOffset());
const time_zone_shift = 1000 * 60 * (480);

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function _time_(time) {
    return new Date(time.getTime() + time_zone_shift)
}

const output = fs.createWriteStream('./stdout.log', {flags:'a'});
const errorOutput = fs.createWriteStream('./stderr.log', {flags:'a'});
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });
process.env.TZ = 'Asia/Shanghai';
var index= 0;

//TODO mysql connect error
process.on('uncaughtException',function(err) {
  logger.log(_time_(new Date()),"uncaughtException",index++);
  logger.log(_time_(new Date()),err.stack);
  logger.log(_time_(new Date()),"exit");
  setTimeout(() => {
    const subprocess = spawn(process.argv[1], process.argv.slice(2), { detached: true, stdio: ['ignore', output, errorOutput] });
    subprocess.unref();
  }, 2000)
});

module.exports = {logger,_time_}
