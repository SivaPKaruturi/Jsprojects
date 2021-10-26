module.exports = {
  tableName: 'gratitude',
  columns: [{
      columnName: 'gratitude_id',
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
      columnName: 'emojiid',
      type: 'integer',
      dataType: 'int',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'happiness',
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
      columnName: 'amazing',
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
      columnName: 'gratitudedate',
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