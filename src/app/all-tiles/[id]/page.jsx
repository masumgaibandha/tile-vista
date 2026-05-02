import TilesDetails from "@/component/TilesDetails";


const TilesDetailsPage = async({params}) => {
    const {id} = await params; 
    const res = await fetch('https://tile-vista.vercel.app/data.json')
    const tiles = await res.json()
    const tilesDetails = tiles.find(tile => tile.id === id)
    console.log(tilesDetails)
    return (
        <div>
           
            {
                tilesDetails.map(tile => <TilesDetails key={tile.id} tile={tile}></TilesDetails>)
            }
        </div>
    );
};

export default TilesDetailsPage;