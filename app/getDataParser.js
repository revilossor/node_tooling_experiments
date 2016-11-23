module.exports = (req, res, next) => {
  if( (req.method !== "GET")
  ||  (!req.query || !req.query.data)
  ||  (typeof req.query.data === 'undefined')) { next(); }

  req.query.data = JSON.parse(req.query.data);
  next();
};
