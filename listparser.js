const { el, mount, list } = redom;
document.fonts.ready.then(function () {
  var filerequest = 'Portforlio.json'
  var request = new XMLHttpRequest();
  request.open('GET',filerequest);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const Portforlio = request.response;
    console.log(JSON.stringify(Portforlio))
  }
  //var thing = el("span",{style:'color:red;'})
  //mount(document.getElementById('list-cont'),thing)
  //thing.innerHTML  = 'hi'
//fontready close
})