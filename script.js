function buyNow(product, amount){
  var options = {
    "key": "rzp_test_ROVfWhD2pNQVwx",
    "amount": amount*100,
    "currency": "INR",
    "name": "Gear Box Graphics",
    "description": product,
    "handler": function (response){
        alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
}
