


let allProductSection = document.getElementById("all-product-section")

// for select tags below
let brand = document.getElementById("brand")
let category = document.getElementById("category")
let price = document.getElementById("price")
let rating = document.getElementById("rating")




window.addEventListener("load", () => {
    fetchingdata()
})

function fetchingdata() {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics
            alldatashow(productData)
        }).catch((error) => {
            console.log("error")
        })
}



function alldatashow(productData) {
    allProductSection.innerHTML = null;

    productData.forEach((element) => {
        let card = document.createElement("div");
        // card.style.border = "2px solid red"

        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        // image.style.border = "2px solid green"

        image.style.width = "72%"
        image.style.height = "260px"

        let price = document.createElement("p");
        price.innerText = `₹${element.price}`;
        price.style.fontWeight = "600"

        let rating = document.createElement("p");
        rating.innerText = `${element.rating}⭐`;
        
        let divSurround= document.createElement("div")
        // divSurround.style.border="2px solid red"
        divSurround.classList.add("divsurround")

        let title = document.createElement("p");
        title.classList.add("title")
        title.innerText = `${element.title}`;

        let button = document.createElement("button")
        button.classList.add("cart-btn")
        button.innerText = "Add To Cart"
        button.addEventListener("click", () => {
            alert("working")
        })
        divSurround.append(title,button)

        card.append(image, price, rating, divSurround);
        allProductSection.append(card);


    });

}

//FILTER BY BRAND

brand.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics

            if (brand.value === "nokia" || brand.value === "samsung" || brand.value === "sony" ||
                brand.value === "apple" || brand.value === "motorola") {
                let filtered = productData.filter((element, index) => {
                    // console.log(element)
                    // console.log(brand.value)
                    if (element.brand === brand.value) {
                        return true
                    } else {
                        return false
                    }
                })
                //  console.log(filtered)
                alldatashow(filtered)
            } else {
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })

})

//FILTER BY CATEGORY

category.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics

            if (category.value === "mobile" || category.value === "laptop" || category.value === "watch" ||
                category.value === "earphone") {
                let filtered = productData.filter((element, index) => {
                    // console.log(element)
                    // console.log(brand.value)
                    if (element.category === category.value) {
                        return true
                    } else {
                        return false
                    }
                })
                //  console.log(filtered)
                alldatashow(filtered)
            } else {
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })
})

//SORT BY PRICE

price.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics
            if (price.value === "10k to 20k") {
                let filtered = productData.filter((element, index) => {
                    if (element.price >= 10000 && element.price <= 20000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price.value === "20k to 50k") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 20000 && element.price <= 50000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price.value === "50k to 1L") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 50000 && element.price <= 100000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if (price.value === "above 1L") {
                let filtered = productData.filter((element, index) => {
                    if (element.price > 100000) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else {
                alldatashow(productData)
            }

        }).catch((error) => {
            console.log("error")
        })
})


rating.addEventListener("change", () => {
    fetch("../db.json")
        .then((response) => {
            let getResponse = response.json()
            return getResponse
        }).then((data) => {
            // console.log(data.Electronics)
            let productData = data.Electronics
            
            if(rating.value === "1-3"){
                let filtered = productData.filter((element, index) => {
                    if (element.rating >= 1 && element.rating <= 3) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if(rating.value === "3-4"){
                let filtered = productData.filter((element, index) => {
                    if (element.rating >3 && element.rating <= 4) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else if(rating.value === "4-5"){
                let filtered = productData.filter((element, index) => {
                    if (element.rating>4 && element.rating<=5) {
                        return true
                    } else {
                        return false
                    }

                })
                alldatashow(filtered)
            }
            else{
                alldatashow(productData)
            }
        }).catch((error) => {
            console.log("error")
        })
})