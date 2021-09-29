function testVariable() {

    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;
    let phone = document.getElementById("txtPhone").value;
    let color = document.getElementById("col").value;
    let gender = document.getElementsByName("gender");

    let gen_val;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gen_val = gender[i].value;
        }
    }

    document.getElementById("p1").innerHTML = name;
    document.getElementById("p2").innerHTML = email;
    document.getElementById("p3").innerHTML = phone;
    document.getElementById("p5").innerHTML = color;
    document.getElementById("p4").innerHTML = gen_val;

}