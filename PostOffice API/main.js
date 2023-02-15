// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8f8366107emsh9e48f05d3bcea91p1146bdjsn50858b69772e',
// 		'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
// 	}
// };

// fetch('https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/445206', options)
// 	.then(response => response.json())
// 	.then(response => {

//   		response.map( (cval) => {

//       		console.log(cval.area,cval.pincode,cval.district,cval.state)
//       } )
//   })
// 	.catch(err => console.error(err));

const form = document.getElementById("myForm");
const loadApi = (event) => {
  event.preventDefault();
  const pincode = document.forms["myForm"]["pincode"].value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8f8366107emsh9e48f05d3bcea91p1146bdjsn50858b69772e",
      "X-RapidAPI-Host":
        "india-pincode-with-latitude-and-longitude.p.rapidapi.com",
    },
  };
  fetch(
    `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${pincode}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      if (response == "") {
        document.getElementById("alert1").innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong>Data Not Found.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `;
      } else {
        response.map((cval) => {
          document.getElementById("pindata").innerHTML += `
                <div class="container">
  <div class="row">
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${cval.area}
    </div>
    
  </div>
    </div>
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${cval.pincode}
    </div>
    
  </div>
    </div>
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-header">
     ${cval.district}
    </div>
    
  </div>
    </div>
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-header">
      ${cval.state}
    </div>
  </div>
    </div>
  </div>
</div>
                
                `;
        });
      }
    })
    .catch((err) => console.error(err));
};
form.addEventListener("submit", loadApi);
