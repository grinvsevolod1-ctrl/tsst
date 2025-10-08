import axios from 'axios'
export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST' })
  const payload = req.body
  if (!payload.pickup || !payload.dropoff || !payload.phone) return res.status(400).json({ error: 'missing fields' })
  try {
    // send to Bitrix (expects webhook URL)
    if (process.env.BITRIX_WEBHOOK_URL){
      await axios.post(process.env.BITRIX_WEBHOOK_URL, { fields: { TITLE: `Трансфер ${payload.pickup} → ${payload.dropoff}`, COMMENT: JSON.stringify(payload) } })
    }
    // send to Telegram
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID){
      const text = `Новый заказ: ${payload.pickup} → ${payload.dropoff}\nТел: ${payload.phone}\nАвто: ${payload.car}`
      await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, { chat_id: process.env.TELEGRAM_CHAT_ID, text })
    }
    res.json({ ok:true })
  } catch (err){
    console.error(err)
    res.status(500).json({ error: String(err) })
  }
}