// function retrievedbdata() {
//       var retrieve = document.getElementById("retrievetab1");
//       //Here creating the ajax object
//       var xhttp = new XMLHttpRequest();

//       // creating method for object
//       xhttp.open("GET", "http://192.168.0.227:8080/AllAppointments");
//       // Sending the request for ajax object
//       xhttp.send();

//       xhttp.onreadystatechange = function () {
//             if (xhttp.readyState === 4 && this.status === 200) {
//                   var data = xhttp.responseText;
//                   var data1 = JSON.parse(data);
//                   var tab = ``;

//                   for (var i = 0; i < data1.length; i++) {
//                         tab += `<tr> <td>${data1[i].firstname}+${data1[i].lastname}</td>
//                                            <td>${data1[i].age}</td>
//                                            <td>${data1[i].gender}</td>
//                                            <td>${data1[i].phonenumber}</td>
//                                            <td>${data1[i].date}+"  "+${data1[i].time}</td>
//                                       </tr>`;
//                   }
//                   retrieve.innerHTML = tab;
//             }

//       }
// }

// var gettotaldb = document.getElementById("gettotaldb");
// gettotaldb.addEventListener('click', retrievedbdata);
// function retrievedbdata() {
//       let xhr = new XMLHttpRequest();
//       xhr.onload = function () {
//             var tab = ``;
//             for (var i = 0; i < data.length; i++) {
//                   tab += `<tr>
//             <td>${data[i].id}</td>
//             <td>${data[i].firstname}</td>
//             <td>${data[i].lastname}</td>
//             <td>${data[i].age}</td>
//             <td>${data[i].phonenumber}</td>
//                   </tr>`;
//             }
//             tbody.innerHTML = tab;
//       }

//       xhr.open("GET", "http://192.168.0.227:8080/AllAppointments");
//       xhr.send();
// }


let promise = fetch("http://192.168.0.225:8080/AllAppointments", {
      method: "GET",
});

promise.then((response) => {
      return response.json();
}).then((data1) => {
      var retrieve = document.getElementById("retrievetab1");
      var tab = ``;
      for (var i = 0; i < data1.length; i++) {
            tab += `<tr> <td>${data1[i].firstname}+" "+${data1[i].lastname}</td>
                         <td>${data1[i].age}</td>
                         <td>${data1[i].gender}</td>
                         <td>${data1[i].phonenumber}</td>
                         <td>${data1[i].date}+"  "+${data1[i].time}</td>
                    </tr>`;
      }

      retrieve.innerHTML = tab;
});
