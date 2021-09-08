function changeListOrder() {
    list = document.getElementsByTagName("p");
    for (var i = 0; i < list.length; i++) {
        console.log(list[i].innerHTML);
    }
}