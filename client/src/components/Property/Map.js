import { useState, React} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'       //'../Property/LocationMarker'; 
import LocationInfoBox from './LocationInfoBox'    
//import Loader from '.Loader'
// define constants
//const numOfPropsShow = 10;

const Map = ({ property , center, zoom }) => {

    // console.log('Is it fetching? see below')
    // console.log(property)

    // const storePropertyInfo = () => {
    //     localStorage.setItem("property", JSON.stringify(property))
    // }

    const [load, setLoad] = useState(true)
    const [locationInfo, setLocationInfo] = useState(null)
 
    const markers = property.map((ev) => {
        
            return <LocationMarker lat = {ev.latitude} lng = {ev.longitude} 
            onClick={() => setLocationInfo({ _id: ev._id, town: ev.town, block: ev.block, street_name: ev.street_name, resale_price: ev.resale_price})} />
            
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDudsRZJAg4b86eEptTGXVWdS0u0B4bifs' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

              {/* <LocationMarker lat ={center.lat} lng = {center.lng} /> */}
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}



Map.defaultProps = {
    center: {
        lat: 1.290270,
        lng: 103.851959
    },
    zoom: 12
}

export default Map