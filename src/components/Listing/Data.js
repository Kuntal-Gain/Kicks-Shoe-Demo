import shoe1 from "./assets/shoe1.png"
import shoe2 from "./assets/shoe2.png"
import shoe3 from "./assets/shoe3.png"
import shoe4 from "./assets/shoe4.png"
import shoe5 from "./assets/shoe5.png"
import shoe6 from "./assets/shoe6.png"
import shoe7 from "./assets/shoe7.png"
import shoe8 from "./assets/shoe8.png"

const type = ["Casual", "Runners", "Hiking", "Sneakers", "Basketball", "Golf", "Outdoor"];

const gender = ["Male", "Female"]

const color = ["#4A69E2", "#FFA52F", "#232321", "#234D41", "#353336", "#F08155", "#C9CCC6", "#00FF00", "#925513", "#BB8056"]


const Size = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47]


const refine = ["Mens", "Casual"]

const Shoedata = [
    {
        "id": 1,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe1,
        "tag": "New",
        "bagd": "#FFA52F",
        "color": "#232321"
    },
    {
        "id": 2,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe2,
        "tag": "New","bagd": "#FFA52F",
        "color": "#232321"
    },
    {
        "id": 3,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe3,
        "tag": "New",
        "bagd": "#FFA52F",
        "color": "#232321"
    },
    {
        "id": 4,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe4,
        "tag": "New",
        "bagd": "#FFA52F",
        "color": "#232321"
    },
    {
        "id": 5,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe5, "tag": "New",
        "bagd": "#FFA52F",
        "color": "#232321"
    },
    {
        "id": 6,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe6,
        "tag" : "New",
        "bagd": "#FFA52F",
        "color": "#232321"
    },
    {
        "id": 7,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe7,
        "tag" : "New",
        "bagd": "#4A69E2",
        "color": "#FFFFFF"
    },
    {
        "id": 8,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe8,
        "tag" : "20%off",
        "bagd": "#FFA52F",
        "color": "#232321"
    },
    {
        "id": 9,
        "title": "ULTRABOOST 1.0 MIAMI GREEN",
        "price": "$125",
        "image": shoe1,
        "tag" : "New",
        "bagd": "#4A69E2",
        "color": "#FFFFFF"
    }

]

export { type, Shoedata, gender, refine, Size, color }