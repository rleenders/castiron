const Knex = require('knex');

/* base model definition*/

class Model {
  this.db;
  this.table;
  this.pk = 'id';

  constructor (db, table) {
    this.db = Knex(db);
    this.table = table;
  }

  get(id) {
    return this.db(this.table).where(this.pk, id);
  }

  getAll() {
    return this.db(this.table).select();
  }

  create(data) {
    return this.db(this.table).insert(data);
  }

  update(id, data) {
    return this.db(this.table).where(pk, id).update(data)
  }

  destroy(id) {
    return this.db(this.table).where(pk, id).del();
  }
}

module.exports = Model;
