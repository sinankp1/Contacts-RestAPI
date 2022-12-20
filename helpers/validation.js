exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/);
};
exports.validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) return false;
  return true;
};
exports.validatePhone = (phone) => {
  if (phone.length !== 10) return false;
  let isnum = /^\d+$/.test(phone);
  if(!isnum) return false;
  return true;
};