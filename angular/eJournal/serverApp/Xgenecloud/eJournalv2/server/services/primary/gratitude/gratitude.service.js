const {
  BaseService
} = require('xc-core');

class GratitudeService extends BaseService {

  constructor(app) {
    super(app);
    this.gratitude = app.$dbs.primary.gratitude;
  }

  async create(req, res) {
    let data = await this.gratitude.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.gratitude.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.gratitude.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.gratitude.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.gratitude.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.gratitude.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.gratitude.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.gratitude.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.gratitude.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.gratitude.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.gratitude.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.gratitude.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.gratitude.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.gratitude.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.gratitude.delb(req.body);
    return data;
  }

}

module.exports = GratitudeService;