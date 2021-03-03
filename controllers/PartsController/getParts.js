
const {PaginationDefaults}=require("../../config");
const dbConnection = require("../../utilities/postgresql-connection");
const { GET_ALL_PARTS ,GET_ALL_PARTS_WITH_CATEGORY} = require("./queries");

exports.getParts = async (req, res) => {
    const {body}=req;
    
    let perPageSize=body.perPageSize ||PaginationDefaults.perPageSize;
    let pageNumber=body.pageNumber ||PaginationDefaults.pageNumber;
    let category_id=body.category_id ||PaginationDefaults.category_id;
    let query=GET_ALL_PARTS;
    let queryParams=[perPageSize,pageNumber];


    if(category_id!=="NA"){
        query=GET_ALL_PARTS_WITH_CATEGORY
        queryParams=[perPageSize,pageNumber,category_id];
    }


    return new Promise((resolve,reject)=>{
            dbConnection.getResult(query,queryParams).then(result=>{
            return resolve(result);
        });


    })

}
