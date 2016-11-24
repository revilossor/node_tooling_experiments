module.exports = (req, res, next) => {
  if(req.method === "GET") {
    req.query.data = JSON.parse(req.query.data);
  }
  return next();
};
