exports.not_found_products = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  };