import Image from "next/image";
import { redirect } from "next/navigation";


const TilesDetails = ({tile: tilesDetails}) => {


  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
       
        <div className="border rounded-xl p-2 relative aspect-square w-full">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={tilesDetails.image}
            alt="Ceramic Blue Tile"
            className="rounded-2xl object-cover"
          />
        </div>

      
        <div>
          <h2 className="text-3xl font-bold mb-4">{tilesDetails.title}</h2>

          <p className="mb-4 text-gray-600">
            {tilesDetails.description}
          </p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Category:</span> {tilesDetails.category}
            </p>
            <p>
              <span className="font-semibold">Material:</span> {tilesDetails.material}
            </p>
            <p>
              <span className="font-semibold">Dimensions:</span> {tilesDetails.dimensions}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${tilesDetails.price}
            </p>
            <p>
              <span className="font-semibold">Stock:</span> {tilesDetails.inStock}
              <span className="text-green-600">Available</span>
            </p>
          </div>

          <button className="btn btn-primary mt-6">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default TilesDetails;
