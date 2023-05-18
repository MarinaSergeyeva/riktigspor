import userData from "../../userData";

export async function getAllProducts() {
  if (userData.allProducts.length === 0) {
    const response = await fetch("https://dummyjson.com/products?limit=6")
      .then((res) => {
        if (!res.ok) {
          throw new Error(response.status);
        }
        return res.json();
      })
      .then((data) => {
        userData.allProducts = [...data.products];
        console.log("userData", userData);
      })
      .catch((error) => console.log("error", error));
  }
}
