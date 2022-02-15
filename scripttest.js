var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

let objects = [];

function item(idVal, nameVal, priceVal, imgLink, colorVal, dupe) {
  let that = this;

  let duplicate = dupe;
  
  this.div = document.createElement("div");
  this.div.classList.add("product");

  this.nameEle = document.createElement("div");
  this.nameEle.innerHTML = "Name: " + nameVal;
  this.nameVal = nameVal;

  this.price = document.createElement("div");
  this.price.innerHTML = "Price: " + priceVal;
  this.priceVal = priceVal;

  this.img = document.createElement("img");
  this.img.src = imgLink;
  this.imgVal = imgLink;

  this.color = colorVal;
  this.colorVal = colorVal;

  this.id = idVal;

  this.div.append(this.img);
  this.div.append(this.nameEle);
  this.div.append(this.price);
  
  document.body.append(this.div);

  this.div.addEventListener("click", function() {
    that.div.style.borderColor = "black";
    that.div.classList.add("product");
    that.popUp();
  })

  this.div.addEventListener("mouseover", function() {
    that.div.style.borderColor = that.color;
  })
}


item.prototype.popUp = function() {
  this.new = createElements();
  this.temp = createElements();

  console.log(this.new);
}

item.prototype.delPopUp = function() {
}

createElements();

function createElements() {
  returnObjects = [];

  for(let i in products) {
    let val = products[i];
    returnObjects.push(new item(val.id, val.name, val.price, val.image, val.color));
    returnObjects.push(new item(val.id, val.name, val.price, val.image, val.color));
  }

  return returnObjects;
}





// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body 

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

