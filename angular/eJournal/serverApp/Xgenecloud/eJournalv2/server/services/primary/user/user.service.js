const {
  BaseService
} = require('xc-core');

class UserService extends BaseService {

  constructor(app) {
    super(app);
    this.user = app.$dbs.primary.user;
  }

  async create(req, res) {
    let data = await this.user.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.user.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.user.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.user.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.user.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.user.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.user.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.user.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.user.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.user.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.user.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.user.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.user.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.user.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.user.delb(req.body);
    return data;
  }

}

module.exports = UserService;