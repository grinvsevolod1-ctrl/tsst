
import fs from 'fs'; import path from 'path'
const DIR = path.join(process.cwd(),'data'); if (!fs.existsSync(DIR)) fs.mkdirSync(DIR)
const USERS = path.join(DIR,'users.json'); const ORDERS = path.join(DIR,'orders.json'); const OTPS = path.join(DIR,'otps.json')
if (!fs.existsSync(USERS)) fs.writeFileSync(USERS,'[]'); if (!fs.existsSync(ORDERS)) fs.writeFileSync(ORDERS,'[]'); if (!fs.existsSync(OTPS)) fs.writeFileSync(OTPS,'{}')
export function readUsers(){ return JSON.parse(fs.readFileSync(USERS)) } export function writeUsers(u){ fs.writeFileSync(USERS, JSON.stringify(u, null,2)) }
export function readOrders(){ return JSON.parse(fs.readFileSync(ORDERS)) } export function writeOrders(o){ fs.writeFileSync(ORDERS, JSON.stringify(o, null,2)) }
export function readOtps(){ return JSON.parse(fs.readFileSync(OTPS)) } export function writeOtps(o){ fs.writeFileSync(OTPS, JSON.stringify(o, null,2)) }
