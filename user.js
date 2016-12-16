$(document).ready( () => {
  const params = parseQuery(window.location.search);
  getUser(params.id)
  .then(addUser)
  .then(getSticker)
  .then(addSticker)
})

function parseQuery(query){
  let obj = {}
  let newString = query.replace(/=/gi, '&')
  let newString2 = newString.slice(1)
  let arr =  newString2.split('&');

   obj[arr[0]] = arr[1]
return obj
}

function getUser(id) {
  return $.get(`http://localhost:3000/user/${id}`)
}

function addUser(user) {
  let $user = $('.user')
  let $email = `<h2>${user.email}</h2>`
  $user.append($email);
}

function getSticker(id) {
  return $.get(`http://localhost:3000/user/${id}/sticker`)
}

function addSticker(user) {
  let $sticker = $('.sticker')

for (var i = 0; i < sticker.length; i++) {
  let $stickers = `<img src="${sticker[i].image_url}"`;
  $sticker.append($stickers);
  }
}
