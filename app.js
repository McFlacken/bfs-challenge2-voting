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
  console.log(res.data[0]["id"]); //I know this is the id of the image I would like to vote on... I just don't know how to get it to the POST function... see below
}

// POST REQUEST
function votedUgly() {
  axios
    .post('https://api.thecatapi.com/v1/votes', {
      //"image_id": "${data[0]["id"]}" //I don't know how to call the data of the image called in the get function... how do I call it back?
      "sub_id": "my-user-1234", //sub-id I guess can be set arbitrary, or not at all?? since there is no user system set up for this demo?
      "value": 1 //this would make the vote go to the pile of 1's, the value in the other button when set to 0, would make the vote go to the pile of 0's I guess?
    },
    {
      "headers": {'x-api-key': '6c8d8157-9c52-4111-8e6e-8d866cf41af5'} //I struggled with adding this, I was missing a pair of quotes
    })
    .then(res => console.log(res)) //this is pending... I haven't got this far, maybe it would be good to console log a success message, but haven't gotten to this yet.
    .catch(err => console.error(err));
}

// POST REQUEST
function votedUglier() {
  console.log("voted for uglier");
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