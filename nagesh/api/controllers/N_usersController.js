/**
 * N_usersController
 *
 * @description :: Server-side logic for managing n_users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const uuid = require('uuid');
const data = require('/Users/Aman/Desktop/smart meter/nagesh/data');

module.exports = {
  "test" : async(req,res)=>{

    // l = [
    //   [28.572419, 77.222005],
    //   [28.572099, 77.222091],
    //   [28.571656, 77.222606],
    //   [28.571401, 77.223174],
    //   [28.571562, 77.222134],
    //   [28.572240, 77.221544],
    //   [28.573267, 77.221040],
    //   [28.573700, 77.220847],
    //   [28.574266, 77.220825],
    //   [28.574464, 77.221126]
    // ];

    // for(let i =0;i<10;i++){
    //   id = uuid();
    //   data = {
    //     userId : id,
    //     username : "Sheet"+i,
    //     password : "Sheet"+i,
    //     region : "Delhi",
    //     address : "House N. 100"+i+" ,Lajpat Nagar",
    //     typeOfUser : "customer",
    //     latitude :  parseFloat(l[i][0]),
    //     longitude : parseFloat(l[i][1]),
    //     discom : "PIL",
    //     new_meter_number : "9908"+i,
    //     install_date : "07-march-2019",
    //     sim_no :"123456"+i,
    //     sim_imei : "#8637090242892"+i ,
    //     email : "test"+i+"@gmail.com",
    //     mobile : "931200981"+i,

    //   }
    //   console.log(data)
    //   try{
    //     await N_users.create(data)
    //   }catch(e){
    //     console.log(e)
    //     break
    //   }
    // }
    // console.log("===========  users done")
    // await N_consumption.destroy();
    // console.log(await await N_consumption.find());
    // // return
    // try{
    //     x= {}
    //   N_users.find().then(async(d)=>{
    //     for(i in d){
    //       un = d[i].userId
    //       id = d[i].username
    //       x[id] = un;
    //     }
    //     r = {};
    //     for(let i in data){
    //       r = {...r, ...Object.keys(data[i])}
    //     }
    //     for(let i in data){
    //       q = {...data[i] , uniqId : x[data[i].user]};
    //       delete(q['']);
    //       console.log(q);
    //       try{
    //         await N_consumption.create(q);
    //       }catch(e){
    //         console.log(e);
    //         break
    //       }

    //     }
    //     console.log("done")
    //   })
    // }catch(e){
    //   console.log(e);

    // }
    // console.log(await N_consumption.find()[1])
    res.ok("Hello world");
  },
  login : (req,res)=>{
    try{
      let username = req.body.username;
      let password = req.body.password;

      N_users.findOne({username , password}).then(d=>{
        if(d){
          return res.json({error : false , data : d})
        }else{
          return res.json({error : true , data : {}})
        }
      })

    }catch(e){
      console.log(e);
      return res.badRequest();
    }
  }
};

