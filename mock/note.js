'use strict';

module.exports = {

  'GET /api/notes': function (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: ['foo', 'bar'],
      });
    }, 500);
  },

};
