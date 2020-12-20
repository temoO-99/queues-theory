
$(function(){

    $("select").change(function () {


        var x = document.getElementById("select");
    
    
    
    
    
    // start M/M/C/K system
    
    if(x.options[x.selectedIndex].value === "M/M/C/K"){

        $("#C").slideDown(500);


        $("button").one("click",function(){

            let lam = eval($("#lam").val());
            let mue = eval($("#mue").val());
            let K= eval($("#K").val());
            let C = eval($("#C").val());
            let R = eval(mue/lam);
            let Ro = eval(R/C);
            let sum = 0;
            let summ = 0;
            let summ1 = 0;

            let fac = 1;
            let fac1 = 1;
            let fac11 = 1;


        
        
        
        
        
        
        
            if(Ro != 1){
        
        
                
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

        
                let s1 = Math.pow(R,C);
                let s2= s1/fac1;
                let s3 = K-C+1;
                let s4 = Math.pow(Ro,s3);
                let bas = 1-s4;
                let mak = 1-Ro;
                let p00 = bas/mak;
                let summ = s2*p00;
                let P000 = sum+summ;
                let result = 1/P000;

        
                console.log(result);
                console.log(sum);
                console.log(summ);
                console.log(summ1);

                console.log(s3);
        
                let df = Ro*s1*result;
                let bass = Math.pow(mak,2);
                let makk = bass*fac1;
                let sumtion1 = df/makk;
                let r = K-C;
                let h = Math.pow(Ro,r);
                let sumtion2 = mak*s3*h;
                let Lq0 = 1-s4-sumtion2;
                let Lq = Lq0*sumtion1;
                console.log(Lq);
                let t0 = 0;
             

                for(let v=0 ; v<C ;v++){

                    for(let s=v ; s>=1 ;s--){
                        fac11 = fac11*s;
                    }
                    let power1 = Math.pow(R,v);
                    let R1 =(power1/fac11); 
                    let PR = C-v;
                    t0+=PR*R1; 
                    summ1+= t0;
                }

                console.log(summ1*result);
                console.log(t0);

                let so = summ1*result;
                let L = Lq+C-so;
                let lamdadach1 = Math.pow(R,K);
                let dd = K-C;
                let lamdadach2 = Math.pow(C,dd);
                let lamdadach3 = lamdadach2*fac1;
                let lamdadach4 = lamdadach1/lamdadach3;
                let lamdadach5 = lamdadach4*result;
                let lamdadach = (1-lamdadach5)/lam;
                console.log(L);
    if(Lq > 0){             
    $(".hat").append(`
    Lq= ${Lq}
    `);
    }

    else{
    $(".hat").append(`
    Lq is minus
    `);   
    }


    if(L > 0){             
    $(".hat").append(`
    L= ${L}
    `);
    }
    
    else{
    $(".hat").append(`
    L is minus
    `);   
    }



    if((L/lamdadach) > 0){             
    $(".hat").append(`
    W= ${L/lamdadach}
    `);
    }
    
    else{
    $(".hat").append(`
    W is minus
    `);   
    }



    if((Lq/lamdadach) > 0){             
    $(".hat").append(`
    Wq= ${Lq/lamdadach}
    `);
    }
    
    else{
    $(".hat").append(`
    Wq is minus
    `);   
    }

        

        
        
            }

        
            else{

        
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
console.log(fac1);
        
                let s1 = Math.pow(R,C);
                let s2= s1/fac1;
                let s3 = K-C+1;
                let s4 = Math.pow(Ro,s3);
                let bas = 1-s4;
                let mak = 1-Ro;
                let summ = s2*s3;
                let P000 = sum+summ;
                let result = 1/P000;
                console.log(result);
                console.log(s3);


let t0 = 0;

let lamdadachh1 = Math.pow(R,K);
let ddd = K-C;
let lamdadachh2 = Math.pow(C,ddd);
let lamdadachh3 = lamdadachh2*fac1;
let lamdadachh4 = lamdadachh1/lamdadachh3;
let lamdadachh5 = lamdadachh4*result;
let lamdadachh = (1-lamdadachh5)/lam;

                for(let v=C+1 ; v<K ;v++){

                    let lamdadach1 = Math.pow(R,v);
                    let dd = v-C;
                    let lamdadach2 = Math.pow(C,dd);
                    let lamdadach3 = lamdadach2*fac1;
                    let lamdadach4 = lamdadach1/lamdadach3;
                    let lamdadach5 = lamdadach4*result;

                    let PR = v-C;
                    t0+=PR*lamdadach5; 
                }

              console.log(t0);  
             let t1 = 0 ; 

              for(let v=0 ; v<C ;v++){

                for(let s=v ; s>=1 ;s--){
                    fac11 = fac11*s;
                }
                let power1 = Math.pow(R,v);
                let R1 =(power1/fac11); 
                let PR = C-v;
                t1+=PR*R1; 
                summ1+= t1;
            }

            console.log(summ1*result);
            console.log(t1);

            let so = summ1*result;
            let L = t0+C-so;


            $(".hat").append(`
            ${t0}
            ${L}
            ${t0/lamdadachh}
            ${L/lamdadachh}

            `);  
        
        
        










        
            }
        
        
        
        
        });          
        







        
        } 
        
        });

});

