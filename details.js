

async function buildDetailsPage(){
    
    let product = await getProductByIdFromApi(3)
    //add only the product for this one
    addProductCard(product.name, product.price)
}

buildDetailsPage()