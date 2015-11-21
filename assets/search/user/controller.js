/* global Search */
module.exports = function (req, res) {
  var params = req.allParams();
  var searchData = {
    keyword: params.keyword
  };

  searchData.skip = params.skip || 0;

  Search.users(searchData, function (results) {
    return res.ok(results);
  });
};