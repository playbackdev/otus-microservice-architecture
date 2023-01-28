module.exports = class HealthCheckController {
  static check(req, res) {
    return res.json({ status: 'ok' })
  }
}