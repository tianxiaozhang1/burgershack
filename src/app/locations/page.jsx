"use client"
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Image from "next/image";

import localFont from 'next/font/local'
import { APIProvider, Map, MapCameraChangedEvent, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef, MapControl, useMap, MapCameraProps } from '@vis.gl/react-google-maps';

import { Graduate, Patua_One, Inter } from 'next/font/google'
const patua_one = Patua_One({ subsets: ['latin'], weight: ['400'], })
const inter = Inter({ subsets: ['latin'], weight: ['400'], })

const bkBold = localFont({ src: '../../fonts/Flame-Bold.ttf' })
const bkReg = localFont({ src: '../../fonts/Flame-Regular.ttf' })
const bkSans = localFont({ src: '../../fonts/FlameSans-Regular.ttf' })

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogoPNG from '../../images/shacklogo2.png'
import MapScreen from '../../images/MapScreen.png'

import Location1 from '../../images/maps/1.png'
import Location2 from '../../images/maps/2.png'
import Location3 from '../../images/maps/3.png'
import Location4 from '../../images/maps/4.png'
import Location5 from '../../images/maps/5.png'
import Location6 from '../../images/maps/6.png'
import Location7 from '../../images/maps/7.png'
import Location8 from '../../images/maps/8.png'

const DEFAULT_CENTER = { lat: 43.656520438353645, lng: -79.38076436519623 }
const locationButton = `py-1.5 text-base px-3 border-2 rounded-2xl cursor-pointer flex`
const selectedButtons = `border-mainText text-mainText hover:bg-mainText hover:text-stone-100`
const unselectedButtons = `border-stone-400 text-stone-500 hover:bg-stone-400 hover:text-white`

const GoogleMapsAPIKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

const PinIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>
    )
}

const StoreIcon = () => {
    return (
        <svg className="w-5 h-5 mt-0 lg:w-6 lg:h-6 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
            <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
            <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
        </svg>
    )
}

let locationInfo = [
    {name:"Yonge & Dundas", address:"10 Dundas St E Toronto, ON M5B 2G9", schedule:"1", indexSq: 1, image:Location1, latlng:{lat: 43.656520438353645, lng: -79.38076436519623}}, 
    {name:"Yorkville", address:"180 Bloor St W Toronto, ON M5S 1T6", schedule:"1", indexSq: 2, image:Location2, latlng:{lat: 43.66872342576286, lng: -79.39483188088104}}, 
    {name:"Union", address:"65 Front St W, Toronto, ON M5J 1E6", schedule:"1", indexSq: 3, image:Location3, latlng:{lat: 43.64518652961984, lng: -79.38142955303192}}, 
    {name:"Distillery District", address:"6 Case Goods Lane, Toronto, ON M5A 3C4", schedule:"1", indexSq: 4, image:Location4, latlng:{lat: 43.64994450880027, lng: -79.35910820960999}}, 
    {name:"Chinatown", address:"473 Dundas St W, Toronto, ON M5T 1G8", schedule:"1", indexSq: 5, image:Location5, latlng:{lat: 43.65305062634664, lng: -79.39684689044952}}, 
    {name:"Cabbagetown", address:"516 Parliament St Toronto, ON M4X 1P4", schedule:"1", indexSq: 6, image:Location6, latlng:{lat: 43.66573154481952, lng: -79.36877891421318}}, 
    {name:"King & Spadina", address:"435 King St W, Toronto, ON M5V 3M4", schedule:"1", indexSq: 7, image:Location7, latlng:{lat: 43.64526222548787, lng: -79.39548164606094}}, 
    {name:"Sherbourne", address:"236 Sherbourne St, Toronto, ON M5A 3X2", schedule:"1", indexSq: 8, image:Location8, latlng:{lat: 43.65810391009144, lng: -79.37123984098434}}, 
];

const MarkerWithInfoWindow = ({position, name, address}) => {
    // `markerRef` and `marker` are needed to establish the connection between
    // the marker and infowindow (if you're using the Marker component, you
    // can use the `useMarkerRef` hook instead).
    const [markerRef, marker] = useAdvancedMarkerRef();
  
    const [infoWindowShown, setInfoWindowShown] = useState(false);
  
    // clicking the marker will toggle the infowindow
    const handleMarkerClick = useCallback(
      () => setInfoWindowShown(isShown => !isShown),
      []
    );

    const map = useMap();  
    // if the maps api closes the infowindow, we have to synchronize our state
    const handleClose = useCallback(() => setInfoWindowShown(false), []);
  
    return (
      <>
        <AdvancedMarker
          ref={markerRef}
          position={position}
          onClick={handleMarkerClick}          
        >
            <Image src={LogoPNG} alt="X" className='w-18 xl:w-28' />
        </AdvancedMarker>
  
        {infoWindowShown && (
          <InfoWindow className='' headerContent={<h3 className={`text-mainText text-xl py-1 flex shadow-2xl ${bkReg.className}`}>
            <StoreIcon/>
            {name}
            </h3>} anchor={marker} onClose={handleClose}>
            <div className={`text-mainText`}>
                <h2 className={`font-semibold pt-1 mb-3`}>{address}</h2>
                <div className={`flex ${bkReg.className} space-x-1 text-base`}>
                    <div className='pt-2 pb-2.5 px-4 bg-mainGreen text-mainBG rounded-2xl cursor-pointer'>
                        Open
                    </div>
                    <div className='pt-2 pb-2.5 px-4 bg-mainText text-stone-50 rounded-2xl cursor-pointer'>
                        Order
                    </div>
                    <div className='pt-2 pb-2.5 px-4 bg-[#106898] text-mainBG rounded-2xl cursor-pointer'>
                        Call
                    </div>
                </div>
            </div>
          </InfoWindow>
        )}
      </>
    );
  };

function Locations() {
    const [highlightLocation, setHighlightLocation] = useState(1)
    const handleButtonClick = (location) => {
        setHighlightLocation(location.indexSq);
        setCameraProps({
            center: location.latlng,
            zoom: 18
          })
    }

    const INITIAL_CAMERA = {
        center: { lat: 43.65853019109113, lng: -79.38165879271946 },
        zoom: 14
      };

    const [cameraProps, setCameraProps] = useState(INITIAL_CAMERA)
    const handleCameraChange = useCallback(ev => setCameraProps(ev.detail))
    
    const categoryBanner = "h-18 md:h-20 lg:h-22 xl:h-32 2xl:h-42 text-2xl lg:text-3xl xl:text-4xl flex justify-center items-center cursor-default"

    return (
        <div className='h-dvh w-full flex flex-col justify-between bg-stone-100 overflow-hidden'>
            <APIProvider apiKey={GoogleMapsAPIKey}>
            <Header/>

            <div className={`bg-mainText ${bkReg.className} ${categoryBanner}`}>
                <div className='text-mainBG'>Locations</div>
            </div>

            {/* SCREEN SHOT GRID SOLUTION */}             
            <div className='overflow-y-scroll w-full h-full flex justify-center z-20'>
                <div className='mt-4 mb-2  lg:mt-4 px-6 lg:max-w-6xl lg:px-2 xl:px-0 xl:max-w-7xl mx-auto grid gap-y-2 md:gap-y-2 md:grid md:grid-cols-1  lg:grid-cols-2 lg:scale-100 md:gap-x-2 lg:grid xl:grid-cols-3 lg:gap-x-3 xl:gap-3'> 
                        {locationInfo.map((location, i) => {
                            return (
                                <div key={i} className={`bg-white text-xl mx-0 border-2 cursor-pointer md:w-[400px] ${location.indexSq === highlightLocation ? "border-mainText" : "border-stone-200"} rounded-xl w-full px-3 py-3 ${bkReg.className}`}
                                    onClick={(e)=>{handleButtonClick(location)}}
                                >
                                    <div className='flex'>
                                        
                                        <div className={`flex ${location.indexSq === highlightLocation ? "text-mainText" : "text-stone-600"}`}>
                                            <div className='mt-0.5'><StoreIcon/></div>
                                            <div className='cursor-pointer'>{location.name}</div>
                                        </div>
                                        <div className={`hidden 2xl:flex ${location.indexSq === highlightLocation ? "bg-mainGreen" : "bg-[#779649]"} text-base py-0.5 px-2 rounded-xl ml-2 mt-0.25 text-stone-50`}>Open Now</div>
                                    </div>
                                    <div className={`text-mainText mt-1`}>

                                        <div className='flex'>
                                            <div className={`${location.indexSq === highlightLocation ? "text-[#4994C4]" : "text-[#106898]"} mt-1 mr-1`}><PinIcon/></div>
                                            <h2 className={`font-semibold pt-1 text-base text-stone-600 cursor-pointer leading-4 mt-1 ${patua_one.className}`}>{location.address}</h2>
                                        </div>

                                        <div className={`flex ${bkReg.className} space-x-1 mt-2`}>
                                            <div className={`hidden 2xl:flex ${locationButton} ${location.indexSq === highlightLocation ? `${selectedButtons}` : `${unselectedButtons}`}`}>
                                                <div className='mt-0'>Visit Us</div>
                                            </div>

                                            <div className={` 2xl:hidden text-stone-50 ${locationButton} border-0 ${location.indexSq === highlightLocation ? "bg-mainGreen" : "bg-[#779649]"}`}>
                                                <div className='mt-0'>Open</div>
                                            </div>

                                            <div className={`${locationButton} ${location.indexSq === highlightLocation ? `${selectedButtons}` : `${unselectedButtons}`}`}>
                                                <div className='hidden 2xl:flex'>Order Online</div>
                                                <div className='2xl:hidden'>Order</div>
                                            </div>

                                            <div className={`${locationButton} ${location.indexSq === highlightLocation ? `${selectedButtons}` : `${unselectedButtons}`}`}>
                                                <div className='hidden 2xl:flex'>Call Us</div>
                                                <div className='2xl:hidden'>Call</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`w-full mt-4 rounded-lg border-2 overflow-hidden ${location.indexSq === highlightLocation ? `border-[#8c5134]` : `border-stone-200`}`}>
                                        <Image
                                            src={location.image}
                                            className="w-full"
                                            alt={location.name}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    
                </div>
            </div>
            
            {/* SPACE FILLER */}
            <div className='w-full h-4 lg:h-6 z-10'></div>

            {/* LIVE MAP SOLUTION - HIDDEN   */}
            <div className='hidden lg:justify-center h-full w-full lg:w-[1020px] xl:w-[1278px] 2xl:w-[1532px] mx-auto overflow-hidden lg:py-4'> 
            {/* lg:flex */}
                {/* LIVE MAP SOLUTION LEFT COLUMN */}
                <div className='flex lg:w-1/3 xl:w-1/4 h-full mr-2 overflow-y-scroll'>
                    <div className='px-2 space-y-2 w-[400px] mx-auto'>
                        <div className={`bg-mainText text-2xl text-center py-3 rounded-xl text-mainBG mt-4 lg:mt-0 ${bkReg.className}`}>Restaurants</div>
                        {locationInfo.map((location, i) => {
                            return (
                                <div key={i} className={`bg-white text-xl w-full border-2 cursor-pointer ${location.indexSq === highlightLocation ? "border-mainText" : "border-stone-200"} rounded-xl w-full px-3 py-3 ${bkReg.className}`}
                                    onClick={(e)=>{handleButtonClick(location)}}
                                >
                                    <div className='flex'>
                                        
                                        <div className={`flex ${location.indexSq === highlightLocation ? "text-mainText" : "text-stone-600"}`}>
                                            <div className='mt-0.5'><StoreIcon/></div>
                                            <div className='cursor-pointer'>{location.name}</div>
                                        </div>
                                        <div className={`hidden 2xl:flex ${location.indexSq === highlightLocation ? "bg-mainGreen" : "bg-[#779649]"} text-base py-0.5 px-2 rounded-xl ml-2 mt-0.25 text-stone-50`}>Open Now</div>
                                    </div>
                                    <div className={`text-mainText mt-1`}>

                                        <div className='flex'>
                                            <div className={`${location.indexSq === highlightLocation ? "text-[#4994C4]" : "text-[#106898]"} mt-1 mr-1`}><PinIcon/></div>
                                            <h2 className={`font-semibold pt-1 text-base text-stone-600 cursor-pointer leading-4 xl:mt-1 ${patua_one.className}`}>{location.address}</h2>
                                        </div>

                                        <div className={`flex ${bkReg.className} space-x-1 mt-2`}>
                                            <div className={`hidden 2xl:flex ${locationButton} ${location.indexSq === highlightLocation ? `${selectedButtons}` : `${unselectedButtons}`}`}>
                                                <div className='mt-0'>Visit Us</div>
                                            </div>

                                            <div className={` 2xl:hidden text-stone-50 ${locationButton} border-0 ${location.indexSq === highlightLocation ? "bg-mainGreen" : "bg-[#779649]"}`}>
                                                <div className='mt-0'>Open</div>
                                            </div>

                                            <div className={`${locationButton} ${location.indexSq === highlightLocation ? `${selectedButtons}` : `${unselectedButtons}`}`}>
                                                <div className='hidden 2xl:flex'>Order Online</div>
                                                <div className='2xl:hidden'>Order</div>
                                            </div>

                                            <div className={`${locationButton} ${location.indexSq === highlightLocation ? `${selectedButtons}` : `${unselectedButtons}`}`}>
                                                <div className='hidden 2xl:flex'>Call Us</div>
                                                <div className='2xl:hidden'>Call</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* TEMPORARY FULL SCREEN IMAGE SOLUTION */}
                <div className='hidden relative overflow-hidden h-full shadow-sm w-full lg:w-2/3 xl:w-3/4  lg:rounded-3xl lg:border-4 lg:border-[#8c5134]'>
                    <div className='scale-150 flex justify-center items-center'>
                        <Image
                            src={MapScreen}
                            alt="Map"
                            className='object-none scale-150'
                        />
                    </div>
                </div>
                
                {/* LIVE MAP SOLUTION */}
                <div className='overflow-hidden h-full shadow-sm w-full lg:w-2/3 xl:w-3/4 mb-16 lg:rounded-3xl lg:border-4 lg:border-[#8c5134]'>
                    <Map
                    id="gmap"
                        mapId="4f80392ebc568740"
                        defaultZoom={15}
                        {...cameraProps} 
                        onCameraChanged={handleCameraChange}
                    >
                        <MarkerWithInfoWindow position={{lat: 43.656520438353645, lng: -79.38076436519623}} name="Yonge & Dundas" address="10 Dundas St E Toronto, ON M5B 2G9"/>
                        <MarkerWithInfoWindow position={{lat: 43.66872342576286, lng: -79.39483188088104}} name="Yorkville" address="180 Bloor St W Toronto, ON M5S 1T6" />
                        <MarkerWithInfoWindow position={{lat: 43.64518652961984, lng: -79.38142955303192}} name="Union" address="65 Front St W, Toronto, ON M5J 1E6" />
                        <MarkerWithInfoWindow position={{lat: 43.64994450880027, lng: -79.35910820960999}} name="Distillery District" address="6 Case Goods Lane, Toronto, ON M5A 3C4" />
                        <MarkerWithInfoWindow position={{lat: 43.65305062634664, lng: -79.39684689044952}} name="Chinatown" address="473 Dundas St W, Toronto, ON M5T 1G8" />
                        <MarkerWithInfoWindow position={{lat: 43.66573154481952, lng: -79.36877891421318}} name="Cabbagetown" address="516 Parliament St Toronto, ON M4X 1P4" />
                        <MarkerWithInfoWindow position={{lat: 43.64526222548787, lng: -79.39548164606094}} name="King & Spadina" address="435 King St W, Toronto, ON M5V 3M4" />
                        <MarkerWithInfoWindow position={{lat: 43.65810391009144, lng: -79.37123984098434}} name="Sherbourne" address="236 Sherbourne St, Toronto, ON M5A 3X2" />
                    </Map>
                </div>
            </div>

            <Footer/>
            </APIProvider>
        </div>
    )
}

export default Locations