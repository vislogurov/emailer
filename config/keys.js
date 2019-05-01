if (process.env.NODE_ENV === 'production') {
  // возвращаем ключи для прода
  module.exports = require('./prod'); // eslint-disable-line
} else {
  module.exports = require('./dev'); // eslint-disable-line
}
