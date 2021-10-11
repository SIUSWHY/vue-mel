const { IMAGES_STORE } = process.env

function createImageUrl(url) {
  const imageUrl = IMAGES_STORE + url
  return imageUrl
}

module.exports = {
  createImageUrl
}
