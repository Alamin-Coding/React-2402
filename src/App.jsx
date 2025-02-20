import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import image_1 from "./assets/image-1.jpg"
import image_2 from "./assets/image-2.jpg"
import image_3 from "./assets/image-3.jpg"
import image_4 from "./assets/image-4.jpg"

const images = [image_1, image_2]

const menuList = ["Home", "About", "Blog", "Contact"]

const App = () => {
  const [value, setValue] = useState(10)
  return (
    <Fragment>
      <div>App value {value}</div>
      <Navbar menuName={menuList}/>
      <div className="container mx-auto ">
        <div className="grid grid-cols-4 gap-6">
          {images.map((img)=> {
            return <Card image={img} />
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default App