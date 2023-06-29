import mysql from "mysql"

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ed14048119',
  database: 'crud'
})

