const dbConnection = require("../../utilities/postgresql-connection");
const { GET_ALL_PARTS ,SEARCH_IN_PARTS,GET_ALL_PARTS_WITH_CATEGORY} = require("./queries");

exports.searchParts = async (req, res) => {
    let {searchString}=req.body;
       
    searchString=`%${searchString}%`;
    
    return new Promise((resolve,reject)=>{
            dbConnection.getResult(SEARCH_IN_PARTS,[searchString]).then(result=>{
            return resolve(result);
        });


    })

}
