module.exports = class OtusAppController {
  static hello(req, res) {
    return res.json({
      message: `Hello ${req.params?.student || 'world'}!`,
      student: req.params.student
    })
  }

  static param(req, res) {
    return res.json({
      message: `Hello ${req.params?.student || 'world'}! ${req.params?.param || '(empty param)'}`,
      student: req.params.student,
      param: req.params.param,
    })
  }
}