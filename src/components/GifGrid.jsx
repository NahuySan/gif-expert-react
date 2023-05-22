import { GifItem } from "./GifItem";
import { useFetchGIfs } from "../hooks/useFetchGIfs";

export const GifGrid = ({category}) => {

  const {isLoading, images} = useFetchGIfs(category);
  
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h3>Cargando...</h3>
      }
      <div className="card-grid">
        {
          images.map((image)=>(
              <GifItem 
              key={image.id}
              {...image}/>
          ))
        }
      </div>
    </>
  )
}

