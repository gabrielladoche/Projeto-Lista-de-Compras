function adicionarItem() {
    var itemInput = document.getElementById("itemInput");
    var listaCompras = document.getElementById("listaCompras");
    var novoItem = itemInput.value.trim();

    if (novoItem !== "") {
        var li = document.createElement("li");
        li.textContent = novoItem;
        li.onclick = function() {
            marcarItemComprado(this);
        };
        listaCompras.appendChild(li);
        itemInput.value = "";
    }
}

function marcarItemComprado(item) {
    if (!item.classList.contains("comprado")) {
        item.classList.add("comprado");
    } else {
        item.classList.remove("comprado");
    }
}