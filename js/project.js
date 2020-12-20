










// start jequery
$(function(){
'use strickt';





// start canvas code

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

const mouse = {
  x: undefined,
  y: undefined
};

const colorArray = ["#30A9DE", "#EFDC05", "#E53A40", "#090707"];

window.addEventListener("mousemove", function(e) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});


function Circle(x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.minR = r;
  this.color = colorArray[Math.floor(Math.random() * 4)];

  this.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
  };

  this.update = function() {
    const maxR = 50;
    const mouseArea = 100;

    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;


    if (
      mouse.x - this.x < mouseArea &&
      mouse.x - this.x > -mouseArea &&
      mouse.y - this.y < mouseArea &&
      mouse.y - this.y > -mouseArea
    ) {
      if (this.r < maxR) {
        this.r += 1;
      }
    } else if (this.r > this.minR) {
      this.r -= 1;
    }

    this.draw();
  };
}

let circleArray = [];

function init() {

  circleArray = [];

  for (let i = 0; i < 500; i++) {
    let r = Math.random() * 20 + 1;
    let x = Math.random() * (innerWidth - r * 2) + r;
    let y = Math.random() * (innerHeight - r * 2) + r;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;

    circleArray.push(new Circle(x, y, dx, dy, r));
  }
}

function animation() {
  requestAnimationFrame(animation);
  context.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animation();


// end canvas code




$('.section').height($(window).height());
// $('.section .container').height($(window).height() );
// $('.section .app').height($(window).height());

$(window).resize(function () {
    $('.section').height($(window).height()); 
    $('.section .container').height($(window).height());
    // $('.section .app').height($(window).height()-10);
});



// $("button").on ('click',function () {
    // var amount = document.getElementById("in").value;
    // var amountt = document.getElementById("inn").value;
    // var amounttt = document.getElementById("innn").value;


    // var result;
    // var result2;
    
    // if ((amountt * amountt) - 4*amount*amounttt < 0){
    //   var res = Math.sqrt(-1*((amountt * amountt) - 4*amount*amounttt));
    //   var ress = res / (2*amount) +"d";
    //   var b = (-1*amountt) / (2*amount)
    //   result = b + "+" + ress;
    //   result2 = b + "-" + ress;
    // }


    // else{   
    //   result = ((-1*amountt) + Math.sqrt((amountt * amountt) - 4*amount*amounttt)) / (2 * amount) ;
    //   result2 = ((-1*amountt) - Math.sqrt((amountt * amountt) - 4*amount*amounttt)) / (2 * amount) ;
    // }


    //  document.getElementById("out").innerHTML = result + "," + result2;
// });









$("select").change(function () {


    var x = document.getElementById("select");

    $("#select").on("click", function (){


      if(x.options[x.selectedIndex].value === "D/D/1/K-1"){
       $("#P").slideUp(500);
       $("#K").slideDown(500);
       $("#Pr").slideUp(500);
      }
    
       else if(x.options[x.selectedIndex].value === "M/M/1"){
         $("#K").slideUp(500);
         $("#N").slideUp(500);
         $("#P").slideDown(500);
         $("#Pr").slideDown(500);
       }
    
     });






    //first D/D/1/K-1

if(x.options[x.selectedIndex].value === "D/D/1/K-1"){

      
    $("#mue").on("blur", function () {

       let mu = $("#mue").val(); 
       let la = $("#lam").val();


       let p1 = eval(mu);
       let p2 = eval(la);



        if (p1 <= p2 ){
          $("#N").slideDown(500);
        }

        else{
          $("#N").slideUp(500);
        }
    });


  $("button").one("click", function () {

    let mu = $("#mue").val(); 
    let la = $("#lam").val();


    let p1 = eval(mu);
    let p2 = eval(la);


//if lam>mue          
        if( p2 < p1){

//if mue power of lam            
          if(p1 % p2 == 0){

//calc n(t)            
            let one = eval($("#lam").val());
            let two = eval($("#mue").val()); 
            let k = eval($("#K").val());
            let ti= Math.round((k-(one/two))/((1/one)-(1/two)));

            
            for(let i=ti-1 ; i>one ;i--){
              if(Math.floor(i/one)-Math.floor((i/two)-(one/two)) == k){
                ti=i;
              }
            }
//  ≤  ≥ 
//calc wq(n)
            let wq = (two-one);
            let W = (two-one)*((ti/one) -2);


            $(".hat").append(`                         ** ti = ${ti} **

  1- if (t < 1/λ)  or  (t < ${one})
      n(t)= 0

  2- if (1/λ ≤ t < ti)  or  ${one} ≤ t < ${ti}
      n(t) = t/${one}-t/${two}+${one}/${two}

  3- if (t ≥ ${ti})            
      n(t) = ${k-1}

  4- for n = 0                     
      Wq(n) = 0

  5- for n < λti  or  n<${Math.round(ti/one)}      
      Wq(n) = ${wq}(n-1)

  6- for n ≥ λti  or  n ≥ ${Math.round(ti/one)}  
      Wq(n) = ${W}`);
          }

//if mue donot pwor of lamda  
          else{
        
//calc n(t)            
            let one = eval($("#lam").val());
            let two = eval($("#mue").val()); 
            let k = eval($("#K").val());
            let ti= Math.round((k-(one/two))/((1/one)-(1/two)));

            
            for(let i=ti-1 ; i>one ;i--){
              if(Math.floor(i/one)-Math.floor((i/two)-(one/two)) == k){
                ti=i;
              }
            }
//calc wq(n)
            let wq = (two-one);
            let W = (two-one)*(ti/one-3);
            let W2 = (two-one)*(ti/one-2);

//  ≤  ≥ 
            $(".hat").append(`                         ** ti = ${ti} **

  1- if (t < 1/λ)   or   (t < ${one})   
        n(t)= 0

  2- if (1/λ ≤ t < ti)   or   ${one} ≤ t < ${ti}
        n(t) = t/${one}-t/${two}+${one}/${two}

  3- if (t ≥ ${ti})              
        n(t)= ${k-1} or ${k-2}

  4- for n=0                  
        Wq(n) = 0

  5- for n < λti   or   n < ${Math.round(ti/one)}   
        Wq(n)= ${wq}(n-1)

  6- for n ≥ λti   or   n ≥ ${Math.round(ti/one)} 
        Wq(n)= ${W} or ${W2}`);            

          }


        }


//if service time lower than interval time        
        else if(p1 <= p2){



          if(p1 == p2){

//calc n(t)            
            let one = eval($("#lam").val());
            let two = eval($("#mue").val()); 
            let M = eval($("#N").val());

//calc wq(n)
let wq = Math.round(((M-1)/2)*two);

            $(".hat").append(`
  For λ = μ  ti = 0  
        n(t)= ${M}

  For λ = μ 
        Wq(n) = ${(M-1)*two}            

     
     `); 

          }


          else if(p1 < p2){
            //calc n(t)            
            let one = eval($("#lam").val());
            let two = eval($("#mue").val()); 
            let M = eval($("#N").val());
            let ti= Math.round(M/((1/two)-(1/one)));

            //calc wq(n)
            let wq = ((M-1)/2)*two;

            for(let i=ti-1 ; i>one ;i--){
              if(Math.floor(i/two)- Math.floor(i/one) == M){
                ti=i;
              }
            }


            var v;
            var arr = [];



            for(let o= ti ; o<=ti+20 ;o++){
              v= M+(o*(1/one))-(o*(1/two));
              if(v < 0.5 && v> -0.5 ){
                arr[o-ti] = o;
              } 

              else if(v>= 0.5 && v<1.5 || v<= -0.5 && v> -1.5){
                arr[o-ti]= o;
              }

              else{
              break;
              }
          }



            var l = Math.floor (arr.length / 2);
            var l2 = arr.length;

            
            var last = arr [l2-1] + 1 ;
            var t;
            let first = 0;

            for(let y=1 ; y<arr.length ;y++){
             t=M+(arr[y]*(1/one))-(arr[y]*(1/two));
             console.log(t);

              if(t>=0.5 || t<=-0.5 ){
                first = arr[y];
                break;
              }
            }
            console.log(arr);
            console.log(l);
            // console.log(first);
            console.log(last);

//  ≤  ≥ 


            $(".hat").append(`                         ** ti = ${ti} **

  1- For λ < μ  n(t)= 0 
       ti= ${ti} 

  2- For t < ${ti}      
       n(t)= ${M}+t/${one}-t/${two}  

  3- For  t ≥ ${ti}
       n(t)= 0  where  ${ti} ≤ t < ${first}
       n(t)= 1  where ${first} ≤ t < ${last}    

  4- At n= 0 
       Wq(n)= ${wq}

  5- For n ≤ λti  or  n ≤ ${Math.round(ti/one)}
       Wq(n)= ${Math.round((M-1)*(two))}${Math.round((two-one))}n

  6- For n > λti  or  n > ${Math.round(ti/one)}
       Wq(n)= 0    

      `); 

          }


        }

        });
//end event clcik     
        

      }
//end first system



  });


});














// let butt = document.getElementById("bu");

//     let in1 = document.getElementsByClassName("in1");
//     let in2 = document.getElementsByClassName("in2");
//     let out = document.getElementsByClassName("out1");

// butt.click = function () {
//     out.innerHTML = in1.value * 2;
// }










