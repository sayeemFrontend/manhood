import React, { useCallback, useRef, useState } from 'react';
import "@reach/combobox/styles.css"
import { mapStyles } from "./mapStyles"
import usePlacesAutoComplete, { getGeoCode, getLatLng } from "use-places-autocomplete"
import { Combobox, ComboboxInput, ComboboxPopover, ComboxList, ComboboxOption } from "@reach/combobox"
import { GoogleMap, Marker, useLoadScript, Data, InfoWindow } from "@react-google-maps/api"
const libraries = ["places"]
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
}
const center = {
    lat: 23.810331,
    lng: 90.412521,
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

export default function AppTwo() {
    const [markers, setMarkers] = useState([])
    const [selected, setSelected] = useState(null)

    const onMapClick = useCallback((e) => {
        setMarkers(current => [...current, {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Data()
        }])


    }, [])
    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map

    }, [])

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
        libraries,
    })
    if (loadError) return "Eroor loading"
    if (!isLoaded) return "loading maps"
    return (
        < div >
            <div className="" style={{ color: "red", fontSize: "10px", position: "absolute", font: "20px", zIndex: "10" }}>hrere logo will be adeed</div>
            <Search />
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8}
                center={center}
                options={options}
                onClick={onMapClick} onLoad={onMapLoad}
            >
                {markers.map(marker => (
                    <Marker key={marker.time}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => setSelected(marker)}
                    />
                ))}

                {selected ? <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => setSelected(null)}
                >
                    <div>sasa</div>
                </InfoWindow>
                    : null}

            </GoogleMap>
        </div >
    );
}

function Search() {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutoComplete({
        requestOptions: {
            location: {
                lat: () => 23.810331,
                lng: () => 90.412521,
            },
            radius: 200 * 200,
        }
    })
    return (
        <div className="" style={{ color: "red", fontSize: "10px", position: "absolute", font: "20px", zIndex: "10" }}>
            <Combobox onSelect={(address) => console.log("sasasasas", address)}>
                <ComboboxInput value={value} onChange={(e) => {
                    setValue(e.target.value)

                }}
                    disabled={!ready} placeholder="Enter a adeesss" />
                <ComboboxPopover >
                    {status === "ok" &&
                        data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />))}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}