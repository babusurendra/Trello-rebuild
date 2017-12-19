module.exports = {
    port: {
        "dev": 3000,
        "prod": process.env.PORT
    },
    connection: {
        "mongodev": "mongodb://localhost:27017/trello",
        "mongoprod": "mongodb://localhost:27017/trello",
        "mlabs" :"mongodb://babusurendra.p@gmail.com:Surendra@0514@ds059207.mlab.com:59207/trello"
    }
    
}