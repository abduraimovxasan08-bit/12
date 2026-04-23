 let n = Number(prompt("n="))
 for(let i=1; i<=10; i++){
     console.log(i*n);
 }

 let a = Number(prompt("a="))
 if(a%2==0){
   console.log("juft");
   }
else{
    console.log("toq")
 }

let n1 = Number(prompt("n="))
 let s=0
 for(let i=1; i<=n; i++){
    s+=i;
     console.log("yig'indi:",s);
  }

 let a1 = Number(prompt("a="));
let b1 = Number(prompt("b="));
  if (a > b) {
      console.log("kattasi: " + a);
 } else if (b > a) {
    console.log("kattasi: " + b);
  } else {
     console.log(" teng");
 }

  let yosh = Number(prompt("yosh="));
  let yil=2026
 console.log(yil-yosh)

  let a2 = Number(prompt("a="));
  let b = Number(prompt("b="));
  let c = Number(prompt("C="));
   if (a > b&&a>c) {
      console.log("kattasi: " + a);
  } else if (b > a&&b>c) {
      console.log("kattasi: " + b);
  } else if (c > a&&c>b) {
     console.log("kattasi: " + c);
  }  else {
     console.log(" teng");
   }