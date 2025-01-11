const mariadb = require('mariadb')
const pool = mariadb.createPool({
    host: 'mariadb',
    port: '3306',
    user: 'root',
    password: 'agr2024',
    database: 'reservas'
});

async function getConnection(){
    try{
        const conn = await pool.getConnection();
        return conn;
    }catch(error){
        console.log(error);
    }
}

module.exports = {getConnection};