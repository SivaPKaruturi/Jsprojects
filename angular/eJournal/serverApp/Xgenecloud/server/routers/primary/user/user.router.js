const {
  BaseRouter
} = require('xc-core');

class UserRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.UserService = app.$services.primary.UserService;
    this.UserMiddleware = app.$middlewares.primary.UserMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.UserService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.UserService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.UserService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.UserService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.UserService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.UserService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.UserService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.UserService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.UserService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.UserService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.UserService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.UserService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.UserService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.UserService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.UserService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/user*",this.UserMiddleware.default)

    router.get('/api/v1/user', this.UserMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/user', this.UserMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/user/findOne', this.UserMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/user/groupby/:columnName', this.UserMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/user/distribution/:columnName', this.UserMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/user/distinct/:columnName', this.UserMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/user/aggregate/:columnName', this.UserMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/user/count', this.UserMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/user/bulk', this.UserMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/user/bulk', this.UserMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/user/bulk', this.UserMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/user/:id', this.UserMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/user/:id', this.UserMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/user/:id', this.UserMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/user/:id/exists', this.UserMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = UserRouter;