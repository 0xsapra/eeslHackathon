  /**
   * N_consumption.js
   *
   * @description :: TODO: You might write a short summary of how this model works and what it represents here.
   * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
   */

  module.exports = {

    attributes: {

      "uniqId" :{
        type : "string",
        required: true,
        primaryKey : true
      },
      'ts' : {
        type : "string"
      },
    'kwhi': {
      type : "string"
    },
    'kwhe': {
      type : "string"
    },
    'kvahi': {
      type : "string"
    },
    'kvahe': {
      type : "string"
    },
    'V': {
        type : "string"

    },
    'A': {
      type : "string"
    },
    'NA': {
      type : "string"
    },
    'byte': {
      type : "string"
    },
    'cont_kw': {
      type : "string"
    },
    'user': {
      type : "string"
    },
    'pf': {
      type : "string"
    }
  }
  };

