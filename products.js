let api_base_url = "https://60d23844858b410017b2d60b.mockapi.io"

//gets one product by id from api
async function getProductByIdFromApi(productId){
    let response = await fetch(api_base_url+"/orders/"+productId)
    console.log(response)
    //look at http status code and status text for if it was successful
    //how to get the data?
    let product = await response.json()
    return product
}

//gets all products from api
async function getProductsFromApi(){
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    let response = await fetch(api_base_url+"/orders")
    console.log("response from products api", response)
    //tell js how to read this data from response
    // let dataAsText = await response.text()
    // console.log("text data",dataAsText)

    //put data into variable
    let dataAsJson = await response.json()
    console.log("json data",dataAsJson)
    console.log("type of json data", typeof dataAsJson)

    //it is now a normal jS object to interact with
    // dataAsJson.forEach(o => console.log("Print out order", o.name, o.price))

    //let other code use products from api
    return dataAsJson
}   
// getProducts()
async function searchProductList(searchTerm) {
    console.log("searchTerm", searchTerm)
    let products = []

    products = await getProductsFromApi()

    //no search return home screen
    if(searchTerm === undefined || searchTerm === ''){
        return products
    }
    //they searched
    else {
        return products.filter(p => p.name.toLowerCase() === searchTerm.toLowerCase())
    }
        
    
}

{/* 
<div class="product-card">
    <h2 class="product-title">Blue ribbon dog food</h2>
    <p>$59.99</p>
</div> 
*/}
function addProductCard(productName, productPrice) {

    //i'm assemblying an h2
    let productsContainer = document.querySelector("#products-container")

    console.log("conatiner", productsContainer)

    let productCard = document.createElement("div")
    //allows you to add any html attribute and value
    productCard.setAttribute("class", "product-card")

    let productHeader = document.createElement("h2")
    productHeader.textContent = productName

    //install the part onto house
    //a better place would products container right?
    productCard.append(productHeader)

    //How to create price paragrahp
    let priceP = document.createElement('p')
    priceP.textContent = productPrice
    productCard.append(priceP)

    //append product card to container
    productsContainer.append(productCard)

}