module.exports = (req, res, next) => {
  if(req.method !== "GET") { next(); }
  if(!req.query || !req.query.data) { next(); }

  req.query.data = JSON.parse(req.query.data);
  next();
};
