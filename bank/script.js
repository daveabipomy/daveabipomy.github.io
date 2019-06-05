var i=0;
window.onload=function(){
	
	document.getElementById("button").onclick=start;
	document.getElementById("getReport").onclick=summaryReport;
};

function start()
{      
    var accountName=document.getElementById("accountName").value;
    var deposit=document.getElementById("deposit").value;   
    var bankAccount =account(accountName,deposit);
    if(i==0)
    {
    document.getElementById("result").value='Account Name: '+bankAccount.getAccount()+' '+bankAccount.getBalance();
    i++;    
    }
    else{
        document.getElementById("result").value=document.getElementById("result").value+"\n"+ 'Account Name: '+bankAccount.getAccount()+' '+bankAccount.getBalance();
        i++;       
    }
}

 function account(accountName,initialBalance){ 
  
    var balance = initialBalance;  
    var account=accountName;
    return {
      getBalance: function(){
        return balance
      },
      getAccount: function(){               
        return account;
      }  
    }
  }


  var moduleName = (function () {
    var privateVariable = 'private';

    var privateMethod = function () {
        alert('this is private');
    };

    // this is the "revealed" part of the module
    return { 
        publicVariable: 'public',
        publicMethod: function () {
            alert('this is public');
        }
    };
}());