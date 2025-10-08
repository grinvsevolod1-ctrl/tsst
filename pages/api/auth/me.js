
import { verify } from '../../../lib/auth.js'; import { readUsers } from '../../../lib/db.js'
export default function handler(req,res){ const cookie = req.headers.cookie || ''; const match = cookie.match(/token=([^;]+)/); if (!match) return res.status(401).json({ error:'no token' }); const payload = verify(match[1]); if (!payload) return res.status(401).json({ error:'invalid' }); const users = readUsers(); const user = users.find(u=>u.id===payload.sub); if (!user) return res.status(404).json({ error:'no user' }); res.json({ ok:true, user }) }
