const dbConnection = require("../../utilities/postgresql-connection");
const { ADD_ORDER} = require("./queries");

exports.addOrder = async (req, res) => {
//TODO :SETTINGPARAMS REMAINING AND ADDING ADDRESS REMAINING 
return dbConnection.getResult(ADD_ORDER).then(result=>{
    return result;
})
}