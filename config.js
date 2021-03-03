module.exports = {
    dbConnection: {
        user: "postgres",
        password: "1234",
        host: "localhost",
        database: "postgres",
        port: 5432
    },
    server: {
        PORT: 3001,
    },
    jwtConfig: {
        algorithm: "HS256",
        secretKey: "mySecretKey",
    },
    ORDER_STATUS: {
        PROCESING: 1,
        APPROVED: 2,
        PREPARING: 3,
        ON_THE_WAY: 4,
        OUT_FOR_DELIVERY: 5,
        DELIVERED: 6,
        CANCELED: 7
    },
    PaginationDefaults:{
        perPageSize:10,
        pageNumber:1,
        sortBy:"part_price",
        sortOrder:"ASC",
        category_id:"NA"
    }



};