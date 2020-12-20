
$("select").change(function () {


    var x = document.getElementById("select");





// start M/M/1 system

if(x.options[x.selectedIndex].value === "M/M/1"){




    $("#P").focus(function (){

      let lam = eval($("#mue").val());
      let mue = eval($("#lam").val());
    
      if( isNaN(mue) ){
        let mue = $("#lam").val();
        let one = eval($("#mue").val());
        let nn = parseInt($("#P").val());
        let pars = eval($("#Pr").val());
        let ss = (1/one) / pars ;
        let solve = Math.pow(ss,nn);
    
    
    
    
    
        $("button").one("click", function () {
console.log(solve);
console.log(nn);
console.log(one);
console.log(ss);

    
         $(".hat").append(`
    mue>= ${solve}        
         `) 
        });
    
    
      }
    
      else if(isNaN(lam)){
    
        $("button").one("click", function () {
    
    
         $(".hat").append(`
        ha
         `) 
        });
    
      }
    
      else{
        $("#Pr").slideUp(500);
        $("button").one("click", function () {
          let one = eval($("#lam").val());
          let two = eval($("#mue").val());
          let ro = (two/one);
        
          let W = (1/((1/two)-(1/one)));
          let Wq = (W*(two/one));
          let L = (W*(1/one));
          let Lq = (Wq*(1/one));
          let n = parseInt($("#P").val());
          let nsolve = Math.pow(ro, n) * (1-ro);
          let nn = Math.round(nsolve * 10000) / 10000  * 100
          // let nsolvee =   

if (L>0){
  $(".hat").append(`
  L = ${Math.round(L * 100) / 100}
  `);
}
else{
  $(".hat").append(`
    L is minus.
    `);
}

if (Lq>0){
  $(".hat").append(`
  Lq = ${Math.round(Lq * 100) / 100}
  `);
}
else{
  $(".hat").append(`
    Lq is minus.
    `);
}

if (W>0){
  $(".hat").append(`
  W = ${Math.round(W * 100) / 100}
  `);
}
else{
  $(".hat").append(`
    W is minus.
    `);
}

if (Wq>0){
  $(".hat").append(`
  Wq = ${Math.round(Wq * 100) / 100}
  `);
}
else{
  $(".hat").append(`
    Wq is minus.
    `);
}

let R = $("#P").val();

if (R != "e" ){
  if (nn>=0){
    $(".hat").append(`
  P${n} = ${Math.round(nn * 100) / 100}%
  `);
  }
  else{
    $(".hat").append(`
    Pn is minus.
    `);
  }
}






    // Lq = ${Math.round(Lq * 100) / 100}
    // W = ${Math.round(W * 100) / 100}
    // Wq = ${Math.round(Wq * 100) / 100}   
    // P${n} = ${Math.round(nn * 100) / 100}%    
        
    //      `) 
        });
    
    
    
    
      }
    
    
    });
    

    
      }  else if (x.options[x.selectedIndex].value === "D/D/1"){
        $("#K").slideUp(500);
        $("#T").slideDown(500);




 

        $("button").one("click",function(){
          
          let lam = eval($("#lam").val());
          let mue = eval($("#mue").val());
          let T = eval($("#T").val());
          let n = Math.floor((T/mue)-(lam/mue));
          let nn = Math.floor(T/lam);
          let result = nn-n;
          console.log(result);
          console.log(n);
          console.log(nn);


          $(".hat").append(`
          n(t) = ${result};
          `)
        });



      }
    
    });