const { VUE_APP_SERVER_URL } = process.env

function setCookie(token) {
  document.cookies.set({
    url: VUE_APP_SERVER_URL,
    cookieName: 'Token',
    value: token
  })
}

// 'Bearer ' + token

module.exports = {
  setCookie
}
