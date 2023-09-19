document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("description").value;
  
    var product = {
      name: name,
      price: price,
      description: description
    };
  
    addProductToList(product);
    clearForm();
  });
  
  function addProductToList(product) {
    var productList = document.getElementById("productList");
  
    var productItem = document.createElement("div");
    productItem.innerHTML = "<h3>" + product.name + "</h3>" +
                            "<p><strong>Preço:</strong> R$" + product.price + "</p>" +
                            "<p><strong>Descrição:</strong> " + product.description + "</p>";
  
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.addEventListener("click", function() {
      deleteProduct(productItem);
    });
  
    productItem.appendChild(deleteButton);
    productList.appendChild(productItem);
  }
  
  function deleteProduct(productItem) {
    var productList = document.getElementById("productList");
    productList.removeChild(productItem);
  }
  
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
  }
  