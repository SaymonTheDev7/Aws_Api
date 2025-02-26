var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',      
        user : 'root',     
        password : '',  
        database : 'db_aws'
     }
});
module.exports = knex