$(document).ready(function(){
    $("#sub").attr("disabled","disabled");
    $("#chk").click(function(){
 if($("#chk").is(":checked")){
    $("#sub").removeAttr("disabled");
 }
    else{
        $("#sub").attr("disabled","disabled");   
    }
});
});

