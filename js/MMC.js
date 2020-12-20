
$(function(){

    $("select").change(function () {


        var x = document.getElementById("select");
    
    
    
    
    
    // start M/M/C system
    
    if(x.options[x.selectedIndex].value === "M/M/C"){
    
    
            $("#K").slideUp(500);
            $("#C").slideDown(500);

$("button").one("click",function(){

    let lam = eval($("#lam").val());
    let mue = eval($("#mue").val());
    let C = eval($("#C").val());
    let R = eval(mue/lam);
    let Ro = eval(R/C);
    let sum = 0;
    let fac = 1;
    let fac1 = 1;
    let fac11 = 1;





console.log(Ro);

    if(Ro < 1){


        
        for(let i=0 ; i<C ;i++){

            for(let y=i ; y>=1 ;y--){
                fac = fac*y;
            }
            let power1 = Math.pow(R,i);
            sum+=(power1/fac);
        }

        for(let d=C; d>=1 ;d-- ){
            fac1 = fac1*d;
        }

        for(let O=C-1; O>=1 ;O-- ){
            fac11 = fac11*O;
        }

        let s1 = Math.pow(R,C);
        let s2= C-R;
        let s3 = C*s1;
        let s4 = fac1*s2;
        let s5 = s3/s4; 
        let P01 = s5 + sum;
        let P00 = 1/P01;

        console.log(P00);

        let df = 1/(lam*mue);
        let bas = s1*df;
        let ss = C/mue;
        let sss = 1/lam;
        let ss1 = ss-sss;
        let pp = Math.pow(ss1,2);
        let mak = fac11*pp;
        let Lq0 = bas/mak;
        let Lq = Lq0*P00;
        let Wq = Lq*lam;
        console.log(Lq);
        let prop = (1/C)*100;




    $(".hat").append(`
    Lq = ${Lq}

    Wq = ${Wq}

    W = ${Wq+mue}

    L = ${Lq+R}

    Ci = ${C-R} 

    Probability of at least one doctor is idle.
     = ${Math.round(prop*100)/100}% 
            `)      







    }

    else{

 

        for(let i=0;i<C;i++){
            let poo = Math.pow(R,i);
            for(let x=i;x>=1;x--){
                fac = fac*x;
            }

            let su = poo/fac;
            sum+=su;

        }
  
        for(let d=C; d>=1 ;d-- ){
            fac1 = fac1*d;
        }


        let s1= Math.pow(R,C);
        let s2 = s1/fac1;
        let s3=C/mue;
        let s4=s3-(1/lam);
        let s5= Math.abs(s3/s4);
        let sum2 = s2*s5;
        let P02 = sum+sum2;
        let P002 = 1/P02;

        console.log(P002);


        let df = 1/(lam*mue);
        let bas = s1*df;
        let ss = C/mue;
        let sss = 1/lam;
        let ss1 = ss-sss;
        let pp = Math.pow(ss1,2);
        let mak = fac11*pp;
        let Lq0 = bas/mak;
        let Lq = Lq0*P002;
        let Wq = Lq*lam;
        console.log(Lq);
        let prop = (1/C)*100;

    


    $(".hat").append(`
    Lq = ${Lq}

    Wq = ${Wq}

    W = ${Wq+mue}

    L = ${Lq+R}

    Probability of at least one doctor is idle.
    = ${Math.round(prop*100)/100}% 

            `)      
        








    }




});          


    
    
        
        
        } 
        
        });

});

