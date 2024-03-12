import { Banner } from "../../Components/Banner/Banner"
import { Gallery } from "../../Components/Gallery/Gallery"

export const GalleryPage = () => {
  return (
    <div className="overflow-hidden ">
      <Banner title={"Gallery"} className={"banner-2"}/>
      <Gallery/>
    </div>
  )
}
