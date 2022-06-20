import { getTopItems, getLeastPopularArtists } from '../controllers/spotify-controller';
import { useEffect, useState} from 'react';

export default function UserPage(props){

  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);


  useEffect(() => {
    const getTopArtists = async () => {
        const topItems = await getTopItems(props.accessToken, "artists", "long_term");
        console.log(topItems);
        setTopArtists(topItems);
    }
    const getTopTracks= async () => {
        const topItems = await getTopItems(props.accessToken, "tracks", "long_term");
        console.log(topItems);
        setTopTracks(topItems);
    }
    try{
      getTopArtists();
      getTopTracks();
    }
    catch(error){
      console.log(error);
    }
  }, [])

  return(
    <div>
    </div>
  )
}
