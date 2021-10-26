const {
  BaseModelSql
} = require('xc-data-mapper');

class reminder extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./reminder.meta.js')
    });

  }

}


module.exports = reminder;