const {
  BaseModelSql
} = require('xc-data-mapper');

class user extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./user.meta.js')
    });

  }

}


module.exports = user;