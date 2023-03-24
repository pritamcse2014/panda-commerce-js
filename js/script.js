const product = document.getElementsByClassName("product-title");
for(const products of product)
{
    products.style.color = "lightblue";
}

const backpack = document.getElementById("backpack");
backpack.style.backgroundColor = "tomato";

const card = document.getElementsByClassName("card");
for(const cards of card)
{
    cards.style.borderRadius = "30px";
}

const buyNow = document.getElementsByClassName("buy-now");
for(const buy of buyNow)
{
    buy.addEventListener("click", function(event)
    {
        event.target.parentNode.removeChild(event.target);
    })
}

document.getElementById("email-field").addEventListener("keyup", function(event)
{
    const submitButton = document.getElementById("submit-button");
    if(event.target.value == "email")
    {
        submitButton.removeAttribute("disabled");
    }
    else
    {
        submitButton.setAttribute("disabled", true);
    }
})