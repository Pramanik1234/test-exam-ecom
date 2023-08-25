const footer = document.querySelector("footer");
const container = document.getElementsByClassName("container");
const Item = [
  {
    id: 0,
    pair: "1 Pair",
    dkk: 195,
    off: 50,
    popular: "no",
    itemnumber: 2,
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["red", "green", "blue", "black", "yellow", "skyblue", "white"],
  },
  {
    id: 1,
    pair: "2 Pair",
    dkk: 345,
    off: 40,
    popular: "yes",
    price: 195,
    itemnumber: 2,
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["red", "green", "blue", "black", "yellow", "skyblue", "white"],
  },
  {
    id: 2,
    pair: "3 Pair",
    dkk: 528,
    off: 60,
    popular: "no",
    itemnumber: 2,
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["red", "green", "blue", "black", "yellow", "skyblue", "white"],
  },
];

Item.map((item, index) => {
  const html = `<main class="middle_box" >
            <input type="radio" name="middle" id="middle">
            <div class="middle_item">
            <div class="middle_item_header">
                <h4 class="pair">
                    <span>${item.pair} pair</span>
                    <strong>DKK ${item.dkk.toFixed(2)}</strong>
                </h4>
                <span class="p_price">${
                  item.popular === "yes" ? "DKK 195.00" : ""
                }</span>
                <h4 class="current_price">
                    <span>${item.popular === "yes" ? "Most Popular" : ""}</span>
                    <strong>${item.off}% OFF</strong>
                </h4>
            </div>
            <div class="selection">
            <div class = "selection_item">
                <small class="item_number">#1</small>
                <div class="select">
           <p class="size">
                    <span>size</span>
                <select name="size" id="size">
                    <option value="">Size</option>
                    <option value="sx">xs</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                </p>
                <p class="color">
                    <span>color</span>
                <select name="size" id="size">
                    <option value="">color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="Gray">Gray</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="blue">blue</option>
                </select>
                </p>
                </div>
            </div>
                <div class = "selection_item">
                <small class="item_number">#2</small>
                <div class="select">
           <p class="size">
                    <span>size</span>
                <select name="size" id="size">
                    <option value="">Size</option>
                    <option value="sx">xs</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                </p>
                <p class="color">
                    <span>color</span>
                <select name="size" id="size">
                    <option value="">color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="Gray">Gray</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="blue">blue</option>
                </select>
                </p>
                </div>
            </div>
            </div>
            </div>
         </main>`;
  footer.insertAdjacentHTML("afterbegin", html);
});

const middle_box = document.querySelectorAll(".middle_box");
const selection = document.querySelectorAll(".selection");
const redio = document.querySelectorAll("#middle");
middle_box.forEach((element, index) => {
  element.addEventListener("click", () => { 
    redio[index].checked = true;
    selection.forEach((select) => {
      select.classList.remove("show");
    });
    selection[index].classList.add("show");
  });
});

middle_box.forEach((element,index)=>{
  element.addEventListener("click",()=>{
    middle_box.forEach(i=>{
      i.style.backgroundColor="white"
      i.style.borderColor = "rgba(186, 189, 187, 0.851)";
    })
    element.style.backgroundColor = "rgb(213, 237, 223)";
    element.style.borderColor = "green";
  })
})