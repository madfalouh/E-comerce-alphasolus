const { hash } = require('bcrypt');
const bcrypt  = require('bcrypt')

module.exports = {
 cryptPassword: function cryptPassword(password){

      return bcrypt.genSalt(10)
            .then((salt => bcrypt.hash(password, salt)))
            .then(hash => hash);

},
compare :async function compare(password,hash) {
      return bcrypt.compare(password, hash).then(res=>res)
}


}