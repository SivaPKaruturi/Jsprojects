module.exports = {
  tableName: 'reminder',
  columns: [{
      columnName: 'reminder_id',
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
      columnName: 'title',
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
    {
      columnName: 'notetype',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'startdate',
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'enddate',
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'eventtime',
      type: 'time',
      dataType: 'time',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'preferredtime',
      type: 'time',
      dataType: 'time',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'description',
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
      columnName: 'createddate',
      type: 'date',
      dataType: 'date',
      notNull: true,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'updateddate',
      type: 'date',
      dataType: 'date',
      notNull: true,
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