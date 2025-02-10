var editFormData;

function getFormData(){
      return {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value
      }
}

function clearFormData() {
      document.getElementById("name").value = "" ;
      document.getElementById("email").value = "";
}

function SetFormData(name, email) {
      document.getElementById("name").value = name;
      document.getElementById("email").value = email;
}

function SetSuccesMessage(message) {
      document.getElementById("message").innerHTML = message;
}

function editDataCall(id) {
      fetch("" + id, {
            method: "GET"
      }).then((res) => res.json()).then((response) => {
            console.log("Edit info", response);
            editFormData = response[0];
            SetFormData(editFormData.name,editFormData.email)

      })
}

function submitForm(){
      if(!editFormData) addUser();
      else editData();
}

function addUser() {
      let payload = getFormData();                  
      fetch("http://192.168.0.227:8080/addUsers", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
      }).then((res) => res.json()).then((response) => {
            SetSuccesMessage(response.message);
            clearFormData();
            getData();                   
      })

}

function editData() {
      var formData = getFormData();
      formData['id'] = editFormData._id;
      fetch("http://192.168.0.225:8080/edit", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json"
            },
            body:JSON.stringify(formData)
      }).then((res) => res.json()).then((response) => {
            SetSuccesMessage(response.message);
            clearFormData();
            getData();
      });
}

function deleteData(id) {     
      fetch(""+id).then((res) => res.json()).then(
            (response) => {
            SetSuccesMessage(response.message);
            getData();
      });
}

function getData() {
      fetch("http://192.168.0.227:8080/users").then(
            (res) => res.json()
            ).then((response) => {
            var tmpData = "";
            console.log(response);
            console.log(response.length);
            var tr=[];
            for (var i = 0; i < response.length; i++)  {
                  tr.push('<tr>');
			tr.push('<td>' + response[i].name + '</td>');
			tr.push('<td>' + response[i].email + '</td>');
                  tr.push('<td><button class=\'btn btn-primary\' onclick=editDataCall('+response[i].name+')>Edit</button></td>');
			tr.push('<td><button class=\'btn btn-primary\' onclick=deleteData('+response[i].name+')>Delete</button></td>');
			tr.push('</tr>');
            }
            $('table').append($(tr.join('')));
            
            
      })
} ;