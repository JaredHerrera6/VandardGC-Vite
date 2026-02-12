import blockWall1 from "../pictures/blockwall1.JPG"
import blockWall2 from "../pictures/blockwall-2.JPG"
import concretewall1 from "../pictures/concretewall1.jpg"
import concretewall2 from "../pictures/concretewall-2.jpg"
import concretewall3 from "../pictures/concretewall-3.jpg"
import concretewall4 from "../pictures/concretewall-4.jpg"
import masonry1 from "../pictures/Masonry-3.jpg"
import masonry2 from "../pictures/Masonry-11.jpg"

import {v4 as uuidv4} from "uuid"
const WallPicData= [
    {
        id:uuidv4(),
        "image" : blockWall1,
        "alt":"block wall"
    },
    {
        id:uuidv4(),
        "image" : blockWall2,
        "alt":"block wall"
    },
    {
        id:uuidv4(),
        "image" : concretewall1,
        "alt":"Concrete wall "
    },
    {
        id:uuidv4(),
        "image" : concretewall2,
        "alt":"Concrete wall",
    },
    {
        id:uuidv4(),
        "image" : concretewall3,
        "alt":"Concrete wall"
    },
    {
        id:uuidv4(),
        "image" : concretewall4,
        "alt":"Concrete wall"
    },
  
    {
        id:uuidv4(),
        "image" : masonry1,
        "alt":"concrete picture"
    },
    {
        id:uuidv4(),
        "image" : masonry2,
        "alt":"concrete picture"
    },
    

]

export default WallPicData;