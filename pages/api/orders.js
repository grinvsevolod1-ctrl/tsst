
import { readOrders } from '../../lib/db.js'; export default function handler(req,res){ const orders = readOrders(); res.json({ orders }) }
