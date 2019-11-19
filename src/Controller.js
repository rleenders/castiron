class Controller {
  this.service;

  constructor(service) {
    this.service =  service;
  }

  async index(req, res, next) {
    try{
      const data = await this.service.index()
      res.send(data);
      return next();
    }catch(e){
      next(e);
    }

  }

  async show(req, res, next) {
    try{
      const data = await this.service.show(id);
      res.send(data);
      return next();
    }catch(e){
      return next(e);
    }
  }

  async store(req, res, next) {
    try{
      const data = await this.service.store(data);
      res.send(data);
      return next();
    }catch(e){
      return next(e);
    }
  }

  async update(req, res, next) {
    try{
      const data = await this.service.update(id, data);
      res.send(data);
      return next();
    }catch(e){
      return next(e);
    }
  }

  async delete(req, res, next) {
    try{
      const data = await this.service.delete(id);
      res.send(data);
      return next();
    }catch(e){
      return next(e);
    }
  }

}

module.exports = Controller;
