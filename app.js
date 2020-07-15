let voteData = {  //all this is dummy data, will be modified later on, as needed
  "image_id": "asf2",
  "sub_id": "my-user-1234",
  "value": 1
}


// GET REQUEST
function getCat() {
  axios
    .get('https://api.thecatapi.com/v1/images/search')
    .then(res => showCat(res))
    .catch(err => console.log(error));
}

getCat();

//this will show the cat in the inner HTML
function showCat(res){
  document.getElementById('gato').innerHTML = `
  <img class="card-img-top" src='${res.data[0]["url"]}'>
  `;
  console.log(res.data[0]["id"]);
  voteData.image_id = res.data[0]["id"];
  console.log(voteData.image_id);
}

// POST REQUEST
function votedUgly() {
  axios
    .post('https://api.thecatapi.com/v1/votes', voteData,
    {
      "headers": {'x-api-key': '6c8d8157-9c52-4111-8e6e-8d866cf41af5'}
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
    ;
  getCat();
}

// POST REQUEST
function votedUglier() {
  voteData.value = 0;
  axios
    .post('https://api.thecatapi.com/v1/votes', voteData,
    {
      "headers": {'x-api-key': '6c8d8157-9c52-4111-8e6e-8d866cf41af5'}
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
  getCat();
}


function getVotes(){
  console.log("getting the votes....")
axios
    .get('https://api.thecatapi.com/v1/votes', {"headers": {'x-api-key': '6c8d8157-9c52-4111-8e6e-8d866cf41af5'}})
    .then(res => showVotes(res))
    .catch(err => console.log(error));

}

function showVotes(res){
  document.getElementById('votos').innerHTML = `
  <p>${JSON.stringify(res.data)}</p>
  `;
}




// Event listeners
document.getElementById('show-a-cat').addEventListener('click', getCat);
document.getElementById('ugly').addEventListener('click', votedUgly);
document.getElementById('uglier').addEventListener('click', votedUglier);
document.getElementById('check-votes').addEventListener('click', getVotes);