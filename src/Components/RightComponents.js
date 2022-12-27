import "../Style/RightComponent.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
function RightComponents() {
    return (
        <div className="right">
            <div className="content">
                <div className="upperComponent">
                    <p>Another Location</p>
                    <FontAwesomeIcon icon={solid('search')} size="3x" style={{ backgroundColor: 'rgb(77,117,109)' }} />

                </div>
                <hr style={{ height: "2px", borderWidth: 0, color: "gray", backgroundColor: "gray" }} />
                <div>
                    <p>Haridwar</p>
                    <p>Varanasi</p>
                    <p>Prayagraj</p>
                    <p>Patna</p>

                </div>
                <hr style={{ height: "2px", borderWidth: 0, color: "gray", backgroundColor: "gray" }} />
                <div className="weatherdetail">
                    <b> weather detail</b>
                    <div className="cloud">
                        <p>Cloud</p>
                        <p>86%</p>
                    </div>
                    <div className="cloud">
                        <p>Humidity</p>
                        <p>86%</p>
                    </div>
                    <div className="cloud">
                        <p>Wind</p>
                        <p>86%</p>
                    </div>
                    <div className="cloud">
                        <p>Rain</p>
                        <p>86%</p>
                    </div>


                </div>
            </div>
        </div>
    )
}


export default RightComponents;