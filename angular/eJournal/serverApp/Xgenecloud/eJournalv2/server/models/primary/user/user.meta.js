module.exports = {
  tableName: 'user',
  columns: [{
      columnName: 'user_id',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'firstName',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "64",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'lastName',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "64",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'email',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "320",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'photoUrl',
      type: 'text',
      dataType: 'text',
      data_type_x_precision: "65535",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'google_id',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "128",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [],
  belongsTo: [],
  dbType: 'mysql'
}