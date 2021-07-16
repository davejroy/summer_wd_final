

/* open modal for shopping Cart */
function openModal() {
    console.log("The openModal Button Has Been Clicked");
    var modal = document.querySelector("#modal");
    modal.style.visibility = "visible";
}

/* Close modal for shopping cart */
function closeModal() {
    console.log("The closeModal Button Has Been Clicked");
    var modal = document.querySelector("#modal");
    modal.style.visibility = "hidden";
}


// /* add item to shopping cart */
// function addToCart() {
//     var productName = document.querySelector("");
//     var productModel = document.querySelector("");
//     var productBrand = document.querySelector("");
//     var prodectCost = document.querySelector("");

//     console.log("The openModal Button Has Been Clicked");
//     var Cart = document.getrySelector("modal");
// }


/* get spec sheet */

function openPDF ()  {
    console.log("The open Specsheet Button Has Been Clicked");
    window.open("./Spec Sheets/Cisco 6332.pdf");
    var specsheetModal = document.querySelector("#specsheetModal");
    modal.style.visibility = "hidden";
}

function closeSpecSheet() {
    console.log("The closeSpecsheet Button Has Been Clicked");
    var specsheetModal = document.querySelector("specsheetModal");
    modal.style.visibility = "hidden";
}

function addToCart() {
    console.log("The Add To Cart Button Has Been Clicked");
    // CREATED AN OBJECT TO HOLD INFORMATION ABOUT THE PRODUCT (STARTING WITH STATIC DATA)
    var dummyObj = {
        // FILLED THE OBJECT WITH CORRESPONDING KEYS AND THEIR VALUES (KEY: "VALUE")
        imgSrc: "./images/Cisco 6332.jpg",
        name: "UCS 6332 Fabric Interconnect",
        model: "Cisco 6332",
        brand: "Cisco",
        price: "$2500",
        qty: "1"
    }
    // INITIALIZED VARIABLES IN ORDER TO SHIFT DATA INTO THE SHOPPING CART 
    var modalContent = document.getElementById('modal-content'); // LINKS MODAL TO VARIABLES FOR PARSING DATA
    const newDiv = document.createElement('div'); // CREATES A VARIABLE TO CREATE NEW DIV ELEMENTS
    newDiv.classList.add('shoppingCartItem'); // ADDED A NEW DIV ELEMENT TO SHOPPING CART
    newDiv.innerHTML = createHTML(dummyObj); // PLACES THE OBJECT DATA FROM THE STATIC DATA INTO THE DIV ELEMENTS
    console.log("hello?",newDiv);  // <-- TEST IN ORDER TO ENSURE THE INITIALIZATION WAS WORKING
    modalContent.appendChild(newDiv); // MAKES THE NEW DIV ELEMENTS CHILDREN OF modalContent
}
function createHTML(productObj) {
    const innerHTMLString = `<img id="cartImage" src="${productObj.imgSrc}" alt=""><ul>Name: ${productObj.name}</ul><ul>Model: ${productObj.owner}</ul><ul>Price: ${productObj.price}</ul><ul>Quantity: ${productObj.qty}</ul>`;
    // console.log(innerHTMLString)
    return innerHTMLString;
}

function pageScroll() {
    window.scrollBy(0,300); // horizontal and vertical scroll increments
    // scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}



