import "../Style/RightComponent.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
function RightComponents(props) {
    const rain = props.detail.rain;


    return (
        <div className="right">
            <FontAwesomeIcon icon={solid('search')} color="rgba(0,0,0,.5)" size="2x" style={{ backgroundColor: 'rgb(130,159,154)', position: 'absolute', right: 0, padding: 16, }} />
            <div className="content">
                <div className="upperComponent">
                    <input className="inputfield" type="text" placeholder="Another Location" />
                </div>
                <div className="middleComponent">
                    <p>Haridwar</p>
                    <p>Varanasi</p>
                    <p>Prayagraj</p>
                    <p>Patna</p>

                </div>
                <hr style={{ height: "2px", borderWidth: 0, color: "gray", backgroundColor: "gray" }} />
                <div className="weatherdetail">
                    <b className="cloud1"> Weather Details</b>
                    <div className="lowerContener">
                        <div className="cloud">
                            <p>Cloud</p>
                            <p className="cloud1">{props.detail?.clouds.all}%</p>
                        </div>
                        <div className="cloud">
                            <p>Humidity</p>
                            <p className="cloud1">{props.detail?.main.humidity}%</p>
                        </div>
                        <div className="cloud">
                            <p>Wind</p>
                            <p className="cloud1"> {props.detail?.wind.speed} km/h</p>
                        </div>

                        {rain ? <div className="cloud">
                            <p>Rain</p>
                            <p className="cloud1">{JSON.stringify(rain).slice(6, -1)}</p>
                        </div> :
                            <div className="cloud">
                                <p>Pressure</p>
                                <p className="cloud1">{props.detail.main.pressure} bp</p>
                            </div>}
                    </div>
                </div>
                <hr style={{ height: "2px", borderWidth: 0, color: "gray", backgroundColor: "gray" }} />
            </div>
        </div>
    )
}


export default RightComponents;