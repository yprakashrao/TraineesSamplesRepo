var disp = function (obj: { fN: string; lN: string }) {
  console.log(obj.fN);
  console.log(obj.lN);
};

disp({ fN: "abc", lN: "def" }); // passing anonymous object 