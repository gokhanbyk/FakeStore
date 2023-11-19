// Fake Store
/* <div class="col-3">
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk
            of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
</div> */

// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))

async function getData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        return data

    } catch (error) {
        console.log(error)
    }
}

getData()
    .then(data => {
        console.log(data)

        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i].title)
        // }
        data.forEach((urun) => {
            console.log(urun)
        })


    })