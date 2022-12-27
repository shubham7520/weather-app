import "../Style/Home.css"
import RightComponents from "./RightComponents";
import LeftComponent from "./LeftComponent";
function Home() {
    return (
        <div className="home">
            <LeftComponent />
            <RightComponents />
        </div>
    )
}

export default Home;