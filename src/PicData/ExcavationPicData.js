import demo1 from "../pictures/demo-1.JPG"
import excavation from "../pictures/excavation-1.jpg"
import excavation2 from "../pictures/excavation-2.jpeg"
import trench1 from "../pictures/trench.JPG"
import demo2 from "../pictures/demo-2.jpeg"
import demo3 from "../pictures/demo-3.jpeg"
import demo4 from "../pictures/demo-4.jpeg"
import excavation3 from "../pictures/excavation-3.jpeg"
import excavation4 from "../pictures/excavation-4.jpeg"
import grading from "../pictures/grading-1.jpeg"


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
        "image" : excavation4,
        "alt":"excavation picture"
    },
    {
        id:uuidv4(),
        "image" : grading,
        "alt":"grading picture"
    },
    {
        id:uuidv4(),
        "image" : trench1,
        "alt":"trench picture"
    },
    {
        id:uuidv4(),
        "image" : demo2,
        "alt":"concrete demolition picture"
    },
    {
        id:uuidv4(),
        "image" : demo3,
        "alt":"concrete demolition picture"
    },
    {
        id:uuidv4(),
        "image" : demo4,
        "alt":"concrete demolition picture"
    },
    {
        id:uuidv4(),
        "image" : excavation3,
        "alt":"excavation picture"
    },
  



    
    

]

export default ExcavationPicData;