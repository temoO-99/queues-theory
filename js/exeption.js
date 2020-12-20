

$(function(){






        let N = $("#N").val();
        let Pr = $("#Pr").val();
    
    $("#lam").on("blur",function(){
        let lam = parseFloat($("#lam").val());
        if(isNaN(lam)){
            $("#lam").css("border","1px solid red");
            // window.alert("Please Enter Number");
            $("label").slideDown(500);
            $("button").slideUp(500);

        }
        else{
            $("#lam").css("border","none");
            $("label").slideUp(500);
            $("button").slideDown(500);


        }
    });


    $("#mue").on("blur",function(){
        let mue = parseFloat($("#mue").val());
        if(isNaN(mue)){
            $("#mue").css("border","1px solid red");
            // window.prompt("Please Enter Number");
            $("label").slideDown(500);
            $("button").slideUp(500);

        }
        else{
            $("#mue").css("border","none");
            $("label").slideUp(500);
            $("button").slideDown(500);

        }
    });

   
    $("#P").on("blur",function(){
        let P = parseFloat($("#P").val());
        let R = $("#P").val();
        if(isNaN(P) && R != "e"){
            $("#P").css("border","1px solid red");
            // window.prompt("Please Enter Number");
            $("label").slideDown(500);
            $("button").slideUp(500);

        }
        else{
            $("#P").css("border","none");
            $("label").slideUp(500);
            $("button").slideDown(500);

        }
    });
    
    
    $("#K").on("blur",function(){
        let K = parseFloat($("#K").val());
        if(isNaN(K)){
            $("#K").css("border","1px solid red");
            // window.prompt("Please Enter Number");
            $("label").slideDown(500);
            $("button").slideUp(500);

        }
        else{
            $("#K").css("border","none");
            $("label").slideUp(500);
            $("button").slideDown(500);

        }
    });


    $("#N").on("blur",function(){
        let N = parseFloat($("#N").val());
        if(isNaN(N)){
            $("#N").css("border","1px solid red");
            // window.prompt("Please Enter Number");
            $("label").slideDown(500);
            $("button").slideUp(500);

        }
        else{
            $("#N").css("border","none");
            $("label").slideUp(500);
            $("button").slideDown(500);

        }
    });


    $("#Pr").on("blur",function(){
        let Pr = parseFloat($("#Pr").val());
        if(isNaN(Pr)){
            $("#Pr").css("border","1px solid red");
            // window.prompt("Please Enter Number");
            $("label").slideDown(500);
            $("button").slideUp(500);

        }
        else{
            $("#Pr").css("border","none");
            $("label").slideUp(500);
            $("button").slideDown(500);

        }
    });


    $("#C").on("blur",function(){
        let C = parseFloat($("#C").val());
        if(isNaN(C)){
            $("#C").css("border","1px solid red");
            // window.prompt("Please Enter Number");
            $("label").slideDown(500);
            $("button").slideUp(500);

        }
        else{
            $("#C").css("border","none");
            $("label").slideUp(500);
            $("button").slideDown(500);


        }
    });


});


