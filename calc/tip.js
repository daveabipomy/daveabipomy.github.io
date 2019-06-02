function calcTip() {
                    var subtotalElem =parseInt(document.getElementById('subtotal').value);
                    var tipElem = parseInt(document.getElementById('tip').value);
                    // var totalElem = document.getElementById('total');                    
                    var total1 = subtotalElem*(tipElem/100);
                    document.getElementById('total').innerHTML = '$' + total1;
                }
                
           