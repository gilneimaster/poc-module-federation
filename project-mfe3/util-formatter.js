const mimeTypeList = require('./mime-type-list.json');

function getRegexFormatted(args) {

  const customFileType = {...args};
  const customMimeTypeList = {...mimeTypeList};

  if (!!Object.keys(customFileType).length) {
    Object.assign(customMimeTypeList, getCustomTypes(customFileType.fileTypeList));
  }

  const matchType = Object.keys(customMimeTypeList).join("|");
  return new RegExp(`url\\(["']?\\~?(\\S*)\\.(${matchType})["']?\\)`, 'g');
}
function getUrlFormatted(type, base64) {
  return `url("data:${getMIMETypeString(type)};base64,${base64}")`;
}

function getMIMETypeString(type) {
  let mimeType = mimeTypeList[type];
  return mimeType ? mimeType.template : "application/octet-stream";
}

function isRemoteUrl(file) {
  return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(file);
}

function isBase64Url(file) {
  return file.includes("base64");
}

function getCustomTypes(fileTypeList) {
  return fileTypeList.reduce((acc, cur) => {
    if (!(cur.fileExtension in mimeTypeList)) {
      acc[cur.fileExtension] = { template: `${cur.fileCategory}/${cur.fileExtension}`, reference: "custom" };
    }
    return acc;
  }, {});
}

module.exports = {
  getRegexFormatted: getRegexFormatted,
  getUrlFormatted: getUrlFormatted,
  isRemoteUrl: isRemoteUrl,
  isBase64Url: isBase64Url
}
