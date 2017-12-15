module.exports = {
    port: {
        "dev": 3000,
        "prod": process.env.PORT
    },
    connection: {
        "mongodev": "mongodb://localhost:27017/trello",
        "mongoprod": "mongodb://localhost:27017/trello"
    }
    
}