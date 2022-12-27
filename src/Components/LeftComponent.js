import "../Style/LeftComponent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'


export default function LeftComponent() {
    return (
        <div className="left">
        <div style={{position:'absolute',top:60,left:100}}>monsterBhai.com</div>
            <div className="middlecomponent">
                <div>
               <p style={{fontSize:100}}>08°</p>
               </div>
               <div className="paraDiv">
    
                <div style={{margin:"0 16px"}}>
                    <div style={{fontSize:50}}>London</div>
                    <div>06:05-Sunday, 6 Oct 19</div>

                </div>
                <div>
                <FontAwesomeIcon icon={solid('user')} size="2x" />
                    
                    <div style={{marginTop:'6px'}}>Rainy</div>
                </div>
               </div>
               
            </div>
        </div>
    )
}