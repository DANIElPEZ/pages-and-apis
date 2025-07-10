const moment = require("moment-timezone");

export default function handler(req, res) {
  const now = moment().tz("America/Bogota");
  const day = now.format("dddd");
  const hour = now.hour();

  res.status(200).json({ day, hour });
}
