import { useState } from "react"
import { useEffect } from "react"
import { getImages } from "./helpers/getImages"

export const InicioRoutes = () => {

  const [photos, setPhotos] = useState([])
  const loadImages = async () => {

    const res = await getImages()
    console.log(res.data.photos)
    setPhotos(res.data.photos)
  }
  useEffect(() => {
    loadImages();
  }, [])

  return (
    <>
      {photos.map(photo =>

        <div>
          <picture>
            <source srcset={photo.src.landscape} type="image/svg+xml" />
            <img src={photo.src.landscape} class="img-rounded mx-auto d-block img-thumbnail" alt="..." />
          </picture>
        </div>

      )}
    </>
  )
}