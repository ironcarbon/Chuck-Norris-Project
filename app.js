document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest();

  const num = document.getElementById('number').value;
  xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);

  xhr.onload = function() {
    if(this.status === 200){
      //console.log(this.responseText);
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = '';

      if(response.type === 'success'){
        response.value.map(joke => {
          output += `<li>${joke.joke}</li>`;
        })
      } else {
        output += '<li>Something went wrong</li>'
      }

      document.querySelector('.jokes').innerHTML= output;
    }

  }
  xhr.send();

  e.preventDefault();
}