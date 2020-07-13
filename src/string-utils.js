export function extractURLs (string) {
  const urlExp = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/ig;
  return [...string.matchAll(urlExp)].map(a => a[0]);
}

export function replaceUrls (string, urls) {
  let newString = string;
  for (let original in urls) {
    newString = newString.replace(original, createLink(original, urls[original]));
  }
  return newString;
}

export function createLink (original, shortened) {  
  return `<a href="http://${shortened}">${original}</a>`;
}