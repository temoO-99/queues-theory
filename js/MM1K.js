




$("select").change(function () {


    var x = document.getElementById("select");





// start M/M/1/K system

if(x.options[x.selectedIndex].value === "M/M/1/K"){






    $("button").one("click", function (){
        let lam = eval($("#lam").val());
        let mue = eval($("#mue").val());
        console.log(mue/lam);

        if( (mue/lam) == 1){

            let lam = eval($("#lam").val());
            let mue = eval($("#mue").val());
            let K = eval($("#K").val());
            let ro = eval(mue/lam);
            let Pk1 = 1/(K+1);
            let L1 = (K/2);
            let lam1= 1/lam;
            let W1 =L1/(lam1*(1-Pk1));
            let Wq1=(W1-mue);
            let Lq1 = L1- (ro*(1-Pk1));


            console.log(mue);
            console.log(L1);
            console.log(Wq1);
            console.log(Lq1);

            $(".hat").append(`
            
L=${L1}
W=${W1}
Wq=${Wq1}
Lq=${Lq1}

            
            `);






        }
        


else{

    let lam = eval($("#lam").val());
    let mue = eval($("#mue").val());
    let K = eval($("#K").val());
    let ro = (mue/lam);
    let P = Math.pow(ro,K);
    let O = Math.pow(ro,K+1)
    let Pk2 = P*((1-ro)/(1-O));
    let L2f = 1-(K+1)*P+K*O;
    let ba = (1-ro)*(1-O);
    let L2 = ro*(L2f/ba);
    let lam1 = 1/lam;
    let W2 = L2/(lam1*(1-Pk2));
    let Wq2=(W2-mue);
    let Lq2 = L2- (ro*(1-Pk2));


    $(".hat").append(`
            
    L = ${Math.round(L2 * 1000) / 1000}

    Lq = ${Math.round(Lq2 * 1000) / 1000}

    W = ${Math.round(W2 * 1000) / 1000}

    Wq = ${Math.round(Wq2 * 1000) / 1000}


    
                
                `);

                
        console.log(mue);
        console.log(ro);
        console.log(P);
        console.log(O);
        console.log(L2f);
        console.log(ba);

        console.log(Lq2);












}



    });







    

    
      }  
    
    });

