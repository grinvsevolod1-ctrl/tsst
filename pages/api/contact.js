import axios from 'axios'
export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST' })
  const { name, email, message } = req.body
  if (!message) return res.status(400).json({ error: 'No message' })
  try {
    if (process.env.BITRIX_WEBHOOK_URL){
      await axios.post(process.env.BITRIX_WEBHOOK_URL, { fields: { TITLE: `Contact: ${name||email||'--'}`, COMMENT: message } })
    }
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID){
      const text = `Contact from ${name||'--'}\n${email||'--'}\n${message}`
      await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, { chat_id: process.env.TELEGRAM_CHAT_ID, text })
    }
    res.json({ ok:true })
  } catch (err){
    console.error(err)
    res.status(500).json({ error: String(err) })
  }
}