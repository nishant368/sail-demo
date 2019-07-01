"use strict";

/**
 * Info
 * @description :: Model for storing Info records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    address : {
      type : "string"
    },
    mobile : {
      type:"string"
    },
    user: {
      model : "User"
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
