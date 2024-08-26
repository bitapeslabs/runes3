import kleur from "kleur";

const boldAllLinks = (text: string) => {
  return text.replace(/https?:\/\/[^\s]+/g, (url) =>
    kleur.underline().bold(url)
  );
};

export const log = (message: string, type: string = "info") => {
  let logMessage = boldAllLinks(message);
  switch (type) {
    case "tip":
      logMessage = kleur.blue().bold("tip: ") + kleur.white(logMessage);
      break;
    case "warn":
      logMessage = kleur.yellow().bold("WARNING: ") + kleur.yellow(logMessage);
      break;
    case "error":
      logMessage = kleur.red().bold("ERROR: ") + kleur.red(logMessage);
      break;
    case "success":
      logMessage = kleur.green().bold("SUCCESS: ") + kleur.green(logMessage);
      break;
  }

  console.log(logMessage);
};
