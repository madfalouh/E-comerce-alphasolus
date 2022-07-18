const { hash } = require('bcrypt');
const bcrypt  = require('bcrypt')

module.exports = {
 cryptPassword: function cryptPassword(password){

const rounds = 10

      return bcrypt.genSalt(10)
            .then((salt => bcrypt.hash(password, salt)))
            .then(hash => hash);

},

compare :async function compare(password,hash) {
bcrypt.compare(password, hash, (err, res) => {
  if (err) {
    console.error(err)
    return false
  }
  return true
})

}


}