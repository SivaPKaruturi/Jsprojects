const {
  BaseRouter
} = require('xc-core');

class GratitudeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.GratitudeService = app.$services.primary.GratitudeService;
    this.GratitudeMiddleware = app.$middlewares.primary.GratitudeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.GratitudeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.GratitudeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.GratitudeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.GratitudeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.GratitudeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.GratitudeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.GratitudeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.GratitudeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.GratitudeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.GratitudeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.GratitudeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.GratitudeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.GratitudeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.GratitudeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.GratitudeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/gratitude*",this.GratitudeMiddleware.default)

    router.get('/api/v1/gratitude', this.GratitudeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/gratitude', this.GratitudeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/gratitude/findOne', this.GratitudeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/gratitude/groupby/:columnName', this.GratitudeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/gratitude/distribution/:columnName', this.GratitudeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/gratitude/distinct/:columnName', this.GratitudeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/gratitude/aggregate/:columnName', this.GratitudeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/gratitude/count', this.GratitudeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/gratitude/bulk', this.GratitudeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/gratitude/bulk', this.GratitudeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/gratitude/bulk', this.GratitudeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/gratitude/:id', this.GratitudeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/gratitude/:id', this.GratitudeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/gratitude/:id', this.GratitudeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/gratitude/:id/exists', this.GratitudeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = GratitudeRouter;