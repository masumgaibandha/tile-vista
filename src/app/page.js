import Banner from "@/component/Banner";
import FeaturedTiles from "@/component/FeaturedTiles";
import LatestTiles from "@/component/LatestTiles";


export default function Home() {
  return (
    <div>
      <Banner/>
      <LatestTiles/>
      <FeaturedTiles/>
    </div>
  );
}
