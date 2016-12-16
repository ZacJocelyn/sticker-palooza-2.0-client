$(document).ready( () => {
  const params = parseQuery(window.location.search);
  getUser(params.id)
  .then(addUser)
  .then(getSticker)
  .then(addSticker)

  $('#submit').click((event) => {

  })
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
  return user.id;
}

function getSticker(id) {
  return $.get(`http://localhost:3000/user/${id}/sticker`)
}

function addSticker(sticker) {
  let $sticker = $('.sticker')

  for (var i = 0; i < sticker.length; i++) {
    let $stickers = `<img src="${sticker[i].image_url}"/>
    <h5>${sticker[i].name}</h5>`;
    $sticker.append($stickers);
  }
  return sticker
}

function whenClickHappens(user) {
  $.post(`/users/${user_id}/sticker`, function(sticker){
    return sticker
  })
}
