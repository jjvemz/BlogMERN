const requireAuth = (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).json({ message: 'You got no authorization to acces this page.' });
    }
    next();
  };

  module.exports= requireAuth