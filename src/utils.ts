import chalk from "chalk";
import * as types from "./types";

const boldAllLinks = (text: string) => {
  return text.replace(/https?:\/\/[^\s]+/g, (url) => chalk.underline.bold(url));
};
export const log = (message: string, type: string = "info") => {
  let logMessage = boldAllLinks(message);
  switch (type) {
    case "tip":
      logMessage = chalk.blue.bold("tip: ") + chalk.white(logMessage);
      break;
    case "warn":
      logMessage = chalk.yellow.bold("WARNING: ") + chalk.yellow(logMessage);
      break;
    case "error":
      logMessage = chalk.red.bold("ERROR: ") + chalk.red(logMessage);
      break;
    case "success":
      logMessage = chalk.green.bold("SUCCESS: ") + chalk.green(logMessage);
      break;
  }

  console.log(logMessage);
};
