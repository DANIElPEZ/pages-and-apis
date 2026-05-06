export default function handler(req, res) {
  const code = req.query.code;
  const error = req.query.error;

  if (error) {
    res.status(400).send(`Auth error: ${error}`);
    return;
  }

  if (code) {
    res.redirect(302, `flyapp://callback?code=${code}`);
    return;
  }

  res.status(400).send('No code received');
}
