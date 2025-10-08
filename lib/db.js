
import fs from 'fs'; import path from 'path'
const DIR = path.join(process.cwd(),'data'); if (!fs.existsSync(DIR)) fs.mkdirSync(DIR)
const USERS = path.join(DIR,'users.json'); const ORDERS = path.join(DIR,'orders.json')
if (!fs.existsSync(USERS)) fs.writeFileSync(USERS, '[]'); if (!fs.existsSync(ORDERS)) fs.writeFileSync(ORDERS, '[]')
export function readUsers(){ return JSON.parse(fs.readFileSync(USERS)) }
export function writeUsers(u){ fs.writeFileSync(USERS, JSON.stringify(u, null, 2)) }
export function readOrders(){ return JSON.parse(fs.readFileSync(ORDERS)) }
export function writeOrders(o){ fs.writeFileSync(ORDERS, JSON.stringify(o, null, 2)) }
