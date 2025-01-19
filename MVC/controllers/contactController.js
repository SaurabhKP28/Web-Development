// controllers/contactController.js
module.exports.getContactUs = (req, res) => {
  res.render('contactus');
};

module.exports.postForm = (req, res) => {
  const { name, email } = req.body;
  // Handle the form submission (e.g., save to DB or send email)
  res.redirect('/success');
};

module.exports.getSuccess = (req, res) => {
  res.render('success');
};