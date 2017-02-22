
function TestController() {
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

TestController.prototype = {
  get: get
};

var testController = new TestController();

module.exports = testController;
