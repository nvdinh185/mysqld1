const mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa2"
});

// node native promisify
const query = util.promisify(conn.query).bind(conn);

const createDB = 'CREATE DATABASE shophoa2 COLLATE utf8_unicode_ci';

const sqlCreate = `CREATE TABLE loai_hoa(
                    id_cat INT NOT NULL AUTO_INCREMENT, 
                    ten_cat VARCHAR(50) NOT NULL,
                    PRIMARY KEY (id_cat)
                    )`;

const sqlInsert = `INSERT INTO loai_hoa (ten_cat) VALUES ("Khai trương"), ("Sin nhật"), ("Ngày cưới"),
                    ("Kỹ niệm"), ("Tình yêu"), ("Hoa bán"),
                    ("Hoa chia buồn"), ("Hoa hạnh phốc"),("Hoa bí"), ("Hoa bầu")`;

async function createAndInsertData() {
    try {
        // Tạo db
        // const dataCrDB = await query(createDB);
        // console.log(dataCrDB);

        // Tạo table
        const dataCrTB = await query(sqlCreate);
        console.log(dataCrTB);

        // Insert data
        const dataIs = await query(sqlInsert);
        console.log(dataIs);
    } catch (err) {
        console.log('Lỗi: ' + err);
    } finally {
        conn.end();
    }
}
createAndInsertData();
