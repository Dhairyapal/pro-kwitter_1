function addUser() {
    var user = document.getElementById("input1").value;
    localStorage.setItem("User",user);

    window.location="kwitter.room.html";
}