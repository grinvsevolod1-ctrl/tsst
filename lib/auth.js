
import jwt from 'jsonwebtoken'; const SECRET = process.env.JWT_SECRET || 'dev_secret'
export function sign(p,opts={}){ return jwt.sign(p, SECRET, { expiresIn: opts.expiresIn||'7d' }) }
export function verify(t){ try{return jwt.verify(t, SECRET)}catch(e){return null} }
