/**
 * N_consumptionController
 *
 * @description :: Server-side logic for managing n_consumptions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  data : (req,res)=>{
    N_consumption.find().then(data=>{
      res.ok(data)
    })
  }
};

