function myFunction() {
    var filter = document.getElementById("myInput").value.toUpperCase();
    let mytable = document.getElementById("table1");
    let trow = mytable.getElementsByTagName("tr");
    let td = mytable.getElementsByTagName("td");

    for (var i = 0; i < trow.length; i++) {

        let td = trow[i].getElementsByTagName("td")[1];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                trow[i].style.display = "";
            } else {
                trow[i].style.display = 'none';
            }
        }
    }
}
