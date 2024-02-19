fetch("https://api.escuelajs.co/api/v1/categories?limit=6")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="group" style="width: 18rem;">
            <div class="card bg-danger">
            
            
            
            <img src="${db.image}" class="card-img-top" alt="${db.name}">
           
           
           
           
            <div class="card-body text-center">
                <h5 class="card-title">${db.name}</h5>
          
            </div>
            </div>
            
        </div>`



        
        }
        document.getElementById("lista").innerHTML = card
    })

   