import "../Style/Home.css"
import RightComponents from "./RightComponents";
import LeftComponent from "./LeftComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { res } from "./weather";
function Home() {
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=haridwar&appid=ddf7b73c9dabb31f70c91c29fa267797`).then(res => {
    //         setData(res.data);
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])




    return (
        <div className="home">
            <LeftComponent detail={res} />
            <RightComponents detail={res} />
        </div>
    )
}

export default Home;