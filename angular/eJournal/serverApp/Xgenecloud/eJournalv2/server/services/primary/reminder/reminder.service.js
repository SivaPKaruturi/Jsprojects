const {
  BaseService
} = require('xc-core');

class ReminderService extends BaseService {

  constructor(app) {
    super(app);
    this.reminder = app.$dbs.primary.reminder;
  }

  async create(req, res) {
    let data = await this.reminder.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.reminder.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.reminder.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.reminder.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.reminder.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.reminder.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.reminder.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.reminder.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.reminder.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.reminder.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.reminder.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.reminder.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.reminder.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.reminder.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.reminder.delb(req.body);
    return data;
  }

}

module.exports = ReminderService;