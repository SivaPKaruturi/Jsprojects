const {
  BaseModelSql
} = require('xc-data-mapper');

class gratitude extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./gratitude.meta.js')
    });

  }

}


module.exports = gratitude;