import AllTilesClient from "@/component/AllTilesClient";

const AllTilesPage = async () => {
  const [tilesRes, categoriesRes] = await Promise.all([
    fetch("https://tile-vista.vercel.app/data.json", { next: { revalidate: 3600 } }),
    fetch("https://tile-vista.vercel.app/category.json", { next: { revalidate: 3600 } }),
  ]);

  const tiles = await tilesRes.json();
  const categories = await categoriesRes.json();

  return <AllTilesClient tiles={tiles} categories={categories} />;
};

export default AllTilesPage;