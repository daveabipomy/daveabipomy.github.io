


$(function () {
   // alert("hi");
    var name = $("#username").val();
    //alert(name.localeCompare(""));
    if(name.localeCompare("")!=0){
        $("#box1").prop("checked",true);
    }

})