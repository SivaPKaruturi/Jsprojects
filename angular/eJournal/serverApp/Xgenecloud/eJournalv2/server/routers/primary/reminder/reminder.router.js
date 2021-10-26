const {
  BaseRouter
} = require('xc-core');

class ReminderRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ReminderService = app.$services.primary.ReminderService;
    this.ReminderMiddleware = app.$middlewares.primary.ReminderMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ReminderService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ReminderService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ReminderService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ReminderService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ReminderService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ReminderService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ReminderService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ReminderService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ReminderService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ReminderService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ReminderService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ReminderService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ReminderService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ReminderService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ReminderService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/reminder*",this.ReminderMiddleware.default)

    router.get('/api/v1/reminder', this.ReminderMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/reminder', this.ReminderMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/reminder/findOne', this.ReminderMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/reminder/groupby/:columnName', this.ReminderMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/reminder/distribution/:columnName', this.ReminderMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/reminder/distinct/:columnName', this.ReminderMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/reminder/aggregate/:columnName', this.ReminderMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/reminder/count', this.ReminderMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/reminder/bulk', this.ReminderMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/reminder/bulk', this.ReminderMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/reminder/bulk', this.ReminderMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/reminder/:id', this.ReminderMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/reminder/:id', this.ReminderMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/reminder/:id', this.ReminderMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/reminder/:id/exists', this.ReminderMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ReminderRouter;