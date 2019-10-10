import { query } from '../models/db'

let getList = async(ctx) => {
  let list = await query('select id,title from onethink_document limit 0,30')
  ctx.body = {
    data: list
  }
}

export default {
  getList
}