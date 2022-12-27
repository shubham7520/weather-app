import "../Style/LeftComponent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function LeftComponent() {
    return (
        <div className="left">
            sesha
            <FontAwesomeIcon icon={solid('search')} size="2x" style={{ backgroundColor: 'rgb(77,117,109)' }} />
        </div>
    )
}