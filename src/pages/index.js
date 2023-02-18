import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css"
const API_KEY = "c2fbb01aa56f8dbd521e4b5bcc4db320"
const Home = () => {
    const [getWether, setWether] = useState([])
    const[city,setcity]=useState("danang")
    const [click,setclick]=useState(false)
    useEffect(() => {
        const getWether = async () => {
            const res = await axios({
                method: "get",
                url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
            });

            setWether(res.data.weather[0]);
        }
        getWether();
    }, [click]);
    // console.log(getWether);
    return (
        <>
            <div className="container">
                <div className="top">
                    <input type="text" onChange={(e) =>setcity(e.target.value)}  />
                    <button onClick={() =>setclick(pre => !pre)}>Tìm</button>
                    <h2 className="poison">
                        19 độ C
                    </h2>
                    <img src={`http://openweathermap.org/img/wn/${getWether.icon}@2x.png`} alt=""></img>
                    <div className="desc">{getWether.description}</div>
                </div>
            </div>
        </>
    );
}

export default Home;