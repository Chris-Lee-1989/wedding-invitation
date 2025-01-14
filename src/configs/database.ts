import mysql from 'mysql2/promise';

const pool: any = mysql.createPool({ 
    host: "kkotfarm.cudyladfiqnp.ap-northeast-2.rds.amazonaws.com", 
    port: 3306,
    user: 'admin',
    password: "flowerfarm1!",
    database: 'wedding_db',
    connectionLimit: 1000
});

export default pool;