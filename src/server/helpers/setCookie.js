const { VUE_APP_SERVER_URL } = process.env
// const cookie = require('cookie')

function setCookie(token) {
  document.cookies.set({
    url: VUE_APP_SERVER_URL,
    cookieName: 'Token',
    value: token
  })
  console.log(setCookie)
}

// 'Bearer ' + token

module.exports = {
  setCookie
}
