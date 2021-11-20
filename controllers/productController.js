const getCatalog = (request, response) => {
  const catalogServices = require("../services/productServices");
  catalogServices.searchService(function (err, rows) {
    response.render("catalog", { products: rows });
    response.end();
  });
};

const getProductByID = (request, response) => {
  const catalogServices = require("../services/productServices");
  let reference = request.params.id; // get the reference number using request object
  catalogServices.searchIDService(reference, function (err, rows) {
    response.render("article", { info: rows }); // pass object info, containing the row with matching ID
    response.end();
  });
};

const getProductsByCategory = (request, response) => {
  const catalogServices = require("../services/productServices");
  let category = request.params.category;
  catalogServices.searchCategoryService(category, function (err, rows) {
    response.json(rows);
    response.end();
  });
};

module.exports = {
  getCatalog,
  getProductByID,
  getProductsByCategory
};
