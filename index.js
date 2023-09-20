async function buildSearchPage() {
    //clear results
    let productsContainer = document.querySelector("#products-container")
    productsContainer.innerHTML = ""
    //get filters
    // let filters = await getAvailableFilters()
    // displayFilters(filters)
    let userFilters = {
        brand: "Pedigree",
        type: "dry"
    }
    //gets my search input
    let searchTermInput = document.querySelector("#product-search-input")

    let products = await searchProductList(searchTermInput.value)
    
    // No results for asdofijsdaoifjasdoifjiopjf.Try checking your spelling or use more general terms
    if(products === null || products.length === 0){
        //display error
        let noResultsMessage = document.createElement("p")
        noResultsMessage.textContent = "No results for: " + searchTermInput.value
        productsContainer.append(noResultsMessage)
    }else {
        //assume I can draw on screen, how to get the products?
        products.forEach(p => addProductCard(p.name,p.price))

    }
}

buildSearchPage()