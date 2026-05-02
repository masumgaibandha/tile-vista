import TilesDetails from "@/component/TilesDetails";


const TilesDetailsPage = async({params}) => {
    const {id} = await params; 
    const res = await fetch('https://tile-vista.vercel.app/data.json')
    const tiles = await res.json()
    const tilesDetails = tiles.find(tile => tile.id === id)

    return (
        <div>
           <TilesDetails tile={tilesDetails} />

        </div>
    );
};

export default TilesDetailsPage;