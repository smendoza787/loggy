enum LOGTYPE {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

// Colored logging :)
const Reset = "\x1b[0m"
const FgRed = "\x1b[31m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgGreen = "\x1b[32m"

const LogColorMap = {
  [LOGTYPE.INFO]: FgBlue,
  [LOGTYPE.WARN]: FgYellow,
  [LOGTYPE.ERROR]: FgRed,
  [LOGTYPE.SUCCESS]: FgGreen,
}

const makeLogger = (type: LOGTYPE) => (...logs: any[]): void => {
    console.log(`${LogColorMap[type]} ==> [${type}] [${new Date().toLocaleString('en-US', { timeZone: 'America/Denver', hour12: true })}]: `, ...logs, Reset)
}

const info = makeLogger(LOGTYPE.INFO);
const warn = makeLogger(LOGTYPE.WARN);
const error = makeLogger(LOGTYPE.ERROR);
const success = makeLogger(LOGTYPE.SUCCESS);

export default {
  info,
  warn,
  error,
  success,
}