import "../Style/Home.css"
import RightComponents from "./RightComponents";
import LeftComponent from "./LeftComponent";
import axios from "axios";
import { useEffect, useState } from "react";
function Home() {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("delhi");

    console.log(search);

    const getData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ddf7b73c9dabb31f70c91c29fa267797`).then(res => {
            setData(res.data);
            console.log("ravi", res.data);
        }).catch((err) => {
            if (err.response.status === 404) {
                alert('please enter a valid city name');
            }
            if (err.response.status === 400) {
                alert('please enter a valid cityname')
            }
        })
    }

    useEffect(() => {
        getData();
    }, [search])

    if (!data) return (
        <div className="home"></div>
    )

    return (
        <div className="home">
            <LeftComponent detail={data} />
            <RightComponents detail={data} setSearch={setSearch} />
        </div>
    )
}

export default Home;