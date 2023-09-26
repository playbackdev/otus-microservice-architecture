const { User } = require('../models/index')

module.exports = class UserController {
  static async get(req, res) {
    try {
      const userId = req.params.id
      const user = await User.findOne({ where: { id: parseInt(userId) } })
      if (user) {
        return res.json(user || null)
      } else {
        return res.status(404).send('User not found')
      }
    } catch (e) {
      return res.status(500).send(e.message)
    }
  }

  static async create(req, res) {
    try {
      const username = req.body?.username || null
      const first_name = req.body?.first_name || null
      const last_name = req.body?.last_name || null
      const email = req.body?.email || null
      const phone = req.body?.phone || null

      if (!username) {
        return res.status(422).send('username is required')
      }

      const user = await User.create({
        username,
        first_name,
        last_name,
        email,
        phone,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      if (user) {
        return res.json(user || null)
      } else {
        return res.status(404).send('User not found')
      }
    } catch (e) {
      return res.status(500).send(e.message)
    }
  }

  static async update(req, res) {
    try {
      const userId = req.params.id

      const username = req.body?.username || null
      const first_name = req.body?.first_name || null
      const last_name = req.body?.last_name || null
      const email = req.body?.email || null
      const phone = req.body?.phone || null

      if (!username) {
        return res.status(422).send('username is required')
      }

      const user = await User.findOne({ where: { id: parseInt(userId) } })
      if (user) {
        user.username = username
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.phone = phone
        user.updated_at = new Date().toISOString()
        user.save()
        return res.json(user || null)
      } else {
        return res.status(404).send('User not found')
      }
    } catch (e) {
      return res.status(500).send(e.message)
    }
  }

  static async delete(req, res) {
    try {
      const userId = req.params.id
      const user = await User.findOne({ where: { id: parseInt(userId) } })
      if (user) {
        user.destroy()
        return res.json(user || null)
      } else {
        return res.status(404).send('User not found')
      }
    } catch (e) {
      return res.status(500).send(e.message)
    }
  }
}