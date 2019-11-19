class Service {
  this.model;

  constructor(model) {
    this.model =  model;
  }

  async index() {
    return await this.model.getAll();
  }

  async show(id) {
    return await this.model.get(id)
  }

  async store(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    return await this.model.update(id,data);
  }

  async delete(req, res, next) {
    return await this.model.delete(id);
  }

}

module.exports = Controller;
