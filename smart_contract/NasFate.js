'use strict';


class Item {

  from = '';
  txHash = '';
  time = 0;
  birthDate = '';
  gender = '';
  comment = '';

  constructor(text) {
    if (!text) {
      return;
    }
    const o = JSON.parse(text);
    this.from = o.from;
    this.txHash = o.txHash;
    this.time = o.time;
    this.birthDate = o.birthDate;
    this.gender = o.gender;
    this.comment = o.comment;
  }

  toString() {
    return JSON.stringify(this);
  }
}


const NasFate = function () {
  LocalContractStorage.defineMapProperty(this, 'dateMap');
};

NasFate.prototype = {

  init: function () {
  },


  _push(collectionName, key, value) {
    let item = this[collectionName].get(key);
    if (!item) { item = []; }
    item.push(value);
    this[collectionName].put(key, item);
  },

  _get(collectionName, key) {
    let item = this[collectionName].get(key);
    if (!item) { item = []; }
    return item;
  },

  post: function (birthDate, gender, comment) {
    const item = new Item();
    item.from = Blockchain.transaction.from;
    item.txHash = Blockchain.transaction.hash;
    item.time = Blockchain.transaction.timestamp * 1000;
    item.birthDate = birthDate;
    item.gender = gender;
    item.comment = comment;
    this._push("dateMap", item.birthDate, item);
    return item;
  },

  querySameDay: function (day) {
    return this._get("dateMap", day);
  }

};
module.exports = NasFate;
