let products = ["mercedes", "audi", "ford", "lamborghini"];

function showProduct() {
  if (products.length === 0) {
    console.log("Không có sản phẩm để hiển thị.");
  } else {
    console.log("Các sản phẩm trong mảng:");
    for (let i = 0; i < products.length; i++) {
      console.log(products[i]);
    }
  }
}
function addProduct() {
  let productName = prompt("Nhập tên sản phẩm bạn muốn thêm:");
  if (productName.length < 5) {
    productName = prompt("Tên sản phẩm phải có ít nhất 5 ký tự. Vui lòng nhập lại:");
  }
  products.push(productName);
  console.log(`Sản phẩm ${productName} đã được thêm vào mảng.`);
  showProduct()
}

function removeProduct() {
  let productName = prompt("Nhập tên sản phẩm cần xóa:");
  let index = products.indexOf(productName);
  if (index !== -1) {
    products.splice(index, 1);
    console.log(`Sản phẩm ${productName} đã được xóa khỏi mảng.`);
    showProduct();
  } else {
    console.log("Không tìm thấy sản phẩm cần xóa.");
  }
}

function updateProduct() {
  let productName = prompt("Nhập tên sản phẩm cần cập nhật:");
  let index = products.indexOf(productName);
  if (index !== -1) {
    let newProductName = prompt(`Tên cũ: ${productName}, Nhập tên sản phẩm muốn thay đổi:`);
    products[index] = newProductName;
    console.log("Sản phẩm đã được cập nhật.");
    showProduct();
  } else {
    console.log("Không tìm thấy sản phẩm cần cập nhật.");
  }
}

function removeAllProduct() {
  const confirm = window.confirm("Remove all product, Are you sure?");
  if (confirm) {
    products = [];
    console.log("Tất cả sản phẩm đã được xóa khỏi mảng.");
    showProduct();
  }
}

showProduct();

addProduct();

removeProduct();

updateProduct();

removeAllProduct();