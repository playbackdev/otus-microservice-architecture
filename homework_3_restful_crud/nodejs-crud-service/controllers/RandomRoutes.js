module.exports = class RandomRoutes {
  static random500(req, res) {
    const isError = Math.random() >= 0.8
    return isError ? res.status(500).send('Error!') : res.status(200).send('Ok!')
  }
}