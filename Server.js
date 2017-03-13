var express = require('express');
var app = express();

app.get('/lists', function (req, res) {
   res.send({"data":[{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"},{"credit_card_payment":"YES","country":"US","wounded":"NO","cashtapp_enabled":"YES","address":"120 EASTSHORE DR, GLEN ALLEN, VA 23059-5644","twenty_four_hour_access":"NO","city":"GLEN ALLEN","state":"Virginia","atm_id":"ATM107","zip_code":"23059"}]} );
})

var server = app.listen(8084, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
