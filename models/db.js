import mysql from 'mysql'
import config from '../config'

//连接
// export const db = mysql.createConnection({
//   ...config.db
// })

//连接池
export const pool = mysql.createPool({
  host: config.db.HOST,
  user: config.db.USERNAME,
  password: config.db.PASSWORD,
  database: config.db.DATABASE
})

//执行sql
export const query = async(sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        conn.release()
        reject(err)
      }
      conn.query(sql, values, (err, rows) => {
        conn.release()
        if (err) reject(err)
        else resolve(rows)
      })
    })
  })
}