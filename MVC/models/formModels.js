// Simulate a data model
const formData = [];

exports.saveFormData = (name, email) => {
  formData.push({ name, email });
  console.log('Form Data:', formData); // Replace this with database logic if needed
};
