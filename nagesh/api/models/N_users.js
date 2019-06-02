/**
 * N_users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userId : {
      type : "string",
      required: true,
      primaryKey : true
    },
    username : {
      type : "string",
    },
    password : {
      type : "string",
    },
    region : {
      type : "string",
    },
    address :{
      type : "string",
    },
    typeOfUser :{
      type : "string",
    },
    latitude  :{
      type : "string",
    },
    longitude : {
      type : "string",
    },
    status : {
      type : "string",
    },
    mobile : {
      type : "string",
    },
    "discom" :{
      type : "string"
    },
    new_meter_number :{
      type : "string",
    },
    install_date : {
      type : "string",
    },
    sim_no : {
      type : "string",
    },
    sim_imei : {
      type : "string",
    },
    initial_reading : {
      type : "number"
    },
    closing_reading : {
      type : "number"
    },
    email  : {
      type : "string",
    },


  }
};

