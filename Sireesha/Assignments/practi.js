function PFN(fn,ln){
      function PN(){
            console.log(fn+ln);
      }
      return PN;
}

const ans = PFN(3,4);;[ ]
ans();
// PFN("hi","namaste");
console.log(PFN());



