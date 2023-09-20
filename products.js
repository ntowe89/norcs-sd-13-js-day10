function searchProductList(searchTerm) {
    console.log("searchTerm", searchTerm)
    let products = [
        {
            name: "Pedigree Dog food",
            price: 8.94
        },
        {
            name: "Pedigree wet dog food",
            price: 8.94
        },
        {
            name: "Blue ribbon Dog food",
            price: 8.94
        },
        {
            name: "macbook pro",
            price: 2900
        },
        {
            name: "potatoes",
            price: 3.74
        }
    ]

    return new Promise(function (resolve, reject) {
        //no search return home screen
        if(searchTerm === undefined || searchTerm === ''){
            resolve(products)
        }
        //they searched
        else {
            resolve(products.filter(p => p.name.toLowerCase() === searchTerm.toLowerCase()))
        }
        
    })
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