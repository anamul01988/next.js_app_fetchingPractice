import Products from "@/components/UI/Products";

// export const getData = async () => {
//   const res = await fetch("http://localhost:5000/watches", {
//     cache: "force-cache", //dile o hoy na dile default cache kore rakhbe
//   });
//   const data = await res.json();
//   return data;
// };

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache", //dile o hoy na dile default cache kore rakhbe
    next: {
      revalidate: 5,
    }, //isr  "ISR" stands for "Incremental Static Regeneration. er kaj sesh revalidate hoye gelo
  });
  const data = await res.json();
  console.log("data", data);
  // const data = await getData();
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {data?.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
