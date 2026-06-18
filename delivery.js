let order={
    item:"Pizza",
    price:10
};
function saveOrder(){
    let text=JSON.stringify(order);
    let data=JSON.parse(text);
    document.getElementById("json").innerHTML=text;
    document.getElementById("item").innerHTML=data.item;
    document.getElementById("price").innerHTML="$"+data.price;
}
function delay(ms){
    return new Promise (resolve => setTimeout(resolve,ms));
}
async function startDelivery(){
    document.getElementById("status").innerHTML="Order Received";
    setTimeout(function(){
        document.getElementById("status").innerHTML="Preparing";
    },1000);
    await delay(2000);
    document.getElementById("status").innerHTML="Out for Delivery";
    await delay(3000);
    document.getElementById("status").innerHTML="Delivered";
}
