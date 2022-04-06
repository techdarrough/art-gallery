import { useState, useEffect  } from "react";


import Gallery from "./components/Gallery";
import ButtonBar from "./components/Buttonbar";

export default function App() {
  let [data, setData ] = useState({})
  let [objectId, setObjectId] = useState(12770)

  useEffect(() => {
    document.title='ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    .then(response => response.json())
    .then(resdata => setData(resdata))
  }, [objectId])

  const handleIterate = (e) => {setObjectId(objectId + Number(e.target.value))
  }

  const displayImage = () => {
    if(!data.primaryImage) {
      return(
        <h2> No Images</h2>
      )
    } return(
      <Gallery objectImg={data.primaryImage} title={data.title} />
    )
  }
return ( 
  <div className="App">
   <h1>{data.title}</h1>
   <div className="App-button">
<ButtonBar handleIterate={handleIterate}/>
   </div>
  </div>
);
  
}