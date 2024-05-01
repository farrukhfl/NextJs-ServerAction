import { addProductToDatabase } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";
import { Product } from "@/typings";


export default async function Home() {
  const res = await fetch('https://65d629eaf6967ba8e3bd9e32.mockapi.io/Products', {
    cache: "no-cache",
    next:{
      tags: ["products"],
    }
  })
  const products: Product[] = await res.json()

  

  return (
  <main>
    <h1 className="text-center font-bold text-3xl">Product warehouse</h1>

    <AddProductButton />

    <form action={addProductToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
      <input name="product" type="text" placeholder="Enter product name" 
      className="border border-gray-200 p-2 rounded-md"/>
      <input name="price" type="text" placeholder="Enter product price"
      className="border border-gray-200 p-2 rounded-md"/>
      <button className="bg-blue-500 text-white p-2 border rounded-md">Add product</button>
    </form>
    <h2 className="font-bold p-5">List of Products</h2>

    <div className="flex flex-wrap gap-5">      
    {products.map((product) => (
      <div key={product.id} className="p-5 shadow">
        <p>{product.product}</p>
        <p>${product.price}</p>
      </div>
    ))}
    </div>

  </main>
  );
}
