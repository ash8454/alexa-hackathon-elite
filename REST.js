var mysql = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}
//
// function REST_ROUTER(router,connection,md5) {
//     var self = this;
//     self.handleRoutes(router,connection,md5);
// }

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/lists",function(req,res){
        res.json({"data":[{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"}]} );
    });
    // router.post("/users",function(req,res){
    //     var query = "INSERT INTO ??(??,??) VALUES (?,?)";
    //     var table = ["user_login","user_email","user_password",req.body.email,md5(req.body.password)];
    //     query = mysql.format(query,table);
    //     connection.query(query,function(err,rows){
    //         if(err) {
    //             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //         } else {
    //             res.json({"Error" : false, "Message" : "User Added !"});
    //         }
    //     });
    // });
    //
    // router.get("/users",function(req,res){
    //      var query = "SELECT * FROM ??";
    //      var table = ["user_login"];
    //      query = mysql.format(query,table);
    //      connection.query(query,function(err,rows){
    //          if(err) {
    //              res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //          } else {
    //              res.json({"Error" : false, "Message" : "Success", "Users" : rows});
    //          }
    //      });
    //  });
    //
    //  router.get("/users/:user_id",function(req,res){
    //      var query = "SELECT * FROM ?? WHERE ??=?";
    //      var table = ["user_login","user_id",req.params.user_id];
    //      query = mysql.format(query,table);
    //      connection.query(query,function(err,rows){
    //          if(err) {
    //              res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //          } else {
    //              res.json({"Error" : false, "Message" : "Success", "Users" : rows});
    //          }
    //      });
    //  });
    //
    //  router.put("/users",function(req,res){
    //     var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    //     var table = ["user_login","user_password",md5(req.body.password),"user_email",req.body.email];
    //     query = mysql.format(query,table);
    //     connection.query(query,function(err,rows){
    //         if(err) {
    //             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //         } else {
    //             res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
    //         }
    //     });
    // });
    //
    //
    // router.delete("/users/:email",function(req,res){
    //     var query = "DELETE from ?? WHERE ??=?";
    //     var table = ["user_login","user_email",req.params.email];
    //     query = mysql.format(query,table);
    //     connection.query(query,function(err,rows){
    //         if(err) {
    //             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //         } else {
    //             res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.email});
    //         }
    //     });
    // });
}

module.exports = REST_ROUTER;