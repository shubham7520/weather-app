import "../Style/LeftComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import moment from "moment/moment";



export default function LeftComponent({ detail }) {

    return (
        <div className="left">
            <div style={{ position: 'absolute', top: 60, left: 100 }}>testWeatherApp.com</div>
            <div className="middlecomponent">
                <div>
                    <p style={{ fontSize: 100 }}>{Math.floor(detail.main.temp - 273.15)}°</p>
                </div>
                <div className="paraDiv">

                    <div style={{ margin: "0 16px" }}>
                        <div style={{ fontSize: 50 }}>{detail.name}</div>
                        <div>{moment().format('lll')}</div>

                    </div>
                    {/* <div>
                        <FontAwesomeIcon icon={solid('user')} size="2x" />

                        <div style={{ marginTop: '6px' }}>Rainy</div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}