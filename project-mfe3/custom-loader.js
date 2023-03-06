const schemaUtils = require('schema-utils');
const schema = require('./schema.json');
const fs = require('fs');
const utilFormatter = require('./util-formatter');

module.exports = function (source) {

  const options = this.getOptions();
  schemaUtils.validate(schema, options, {
    name: 'Loader convert-url-to-base64-inline',
    baseDataPath: 'options',
  });

  source = source.replace(utilFormatter.getRegexFormatted(options), function (match, file, type) {

    if (utilFormatter.isRemoteUrl(file) || utilFormatter.isBase64Url(file)) {
      return match;
    }

    let base64 = fs.readFileSync(`${file}.${type}`).toString('base64');
    return utilFormatter.getUrlFormatted(type, base64);
  });

  return source;
}

