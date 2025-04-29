(function getApi() {
  let xhttp = new XMLHttpRequest;
  let all = "";
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText).recipes;

      for (let i = 0; i < response.length; i++) {
        let div = `<div class="col-md-4 text-center api  wow animate__backInUp " data-wow-duration="1s" >
        <img src="${response[i].image_url}" alt="" class="w-100 border rounded img-api wow animate__backInRight"  data-wow-delay="1s" />
        <h4 class="text-center">${response[i].title}</h4>
        <p class="text-center">${response[i].recipe_id}</p>
      </div>
      `;
        all += div;
      }
      document.querySelector(".test").innerHTML = all;
    }
  };

  xhttp.open(
    "GET",
    "https://forkify-api.herokuapp.com/api/search?q=pizza",
    true
  );
  xhttp.send();
})();
//================================================================================================================================

function getApi2() {
  fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
    .then((res) => res.json())
    .then((handl) => handl.recipes)
    .then((data) => {
      all2 = "";
      for (let i = 0; i < data.length; i++) {
        let div2 = `<div class="col-md-4 text-center api wow animate__backInRight" >
        <img src="${data[i].image_url}" alt="" class="w-100 border rounded img-api wow animate__backInRight"  data-wow-delay="1s" />
        <h4 class="text-center">${data[i].title}</h4>
        <p class="text-center">${data[i].recipe_id}</p>
      </div>
      `;
        all2 += div2;
      }

      document.querySelector(".test2").innerHTML = all2;
    });
}
getApi2();

//================================================================================================================================
//================================================================================================================================

async function getApi3() {
  let res = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
  let handl = await res.json();
  let data = await handl.recipes;

  let all3 = "";
  for (let i = 0; i < data.length; i++) {
    let div3 = `<div class="col-md-4 text-center api wow animate__backInLeft  " >
        <img src="${data[i].image_url}" alt="" class="w-100 border rounded img-api wow animate__backInLeft  "  data-wow-delay="1s"/>
        <h4 class="text-center">${data[i].title}</h4>
        <p class="text-center">${data[i].recipe_id}</p>
      </div>
      `;
    all3 += div3;
  }
  document.querySelector(".test3").innerHTML = all3;
}
getApi3();
