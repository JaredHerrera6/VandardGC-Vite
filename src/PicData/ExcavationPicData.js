import demo1 from "../pictures/demo-1.JPG"
import excavation from "../pictures/excavation-1.jpg"
import excavation2 from "../pictures/excavation-2.jpeg"
import trench1 from "../pictures/trench.JPG"


import {v4 as uuidv4} from "uuid"
const ExcavationPicData = [
    {
        id:uuidv4(),
        "image" : demo1,
        "alt":"demo picture"
    },
    {
        id:uuidv4(),
        "image" : excavation,
        "alt":"excavation picture"
    },
     {
        id:uuidv4(),
        "image" : excavation2,
        "alt":"excavation picture"
    },
    {
        id:uuidv4(),
        "image" : trench1,
        "alt":"trench picture"
    },

    
    

]

export default ExcavationPicData;