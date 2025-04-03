import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"; // Fixed incorrect import

const MapComponent = () => {
    const { id } = useParams();
    const profileId = parseInt(id, 10); // Convert id to number
    const profiles = useSelector((state) => state.UserData.data);


    const selectedProfile = profiles.find((profile, index) => index === profileId);

    return (
        <div className="bg-gray-50 relative w-full h-screen flex justify-center items-center">
            <div className="w-full h-screen md:w-[80%] md:h-[80%]">
                <APIProvider apiKey={'AIzaSyDXxf9fteD2ucDWQFSiuS8Z-Oeip3l2gKg'}>
                    {selectedProfile ? (
                        <Map
                            defaultZoom={5}
                            defaultCenter={{ lat: selectedProfile.lat, lng: selectedProfile.lng }}
                            onCameraChanged={(ev) =>
                                console.log("Camera changed:", ev.detail.center, "Zoom:", ev.detail.zoom)
                            }
                        >
                            <Marker position={{ lat: selectedProfile.lat, lng: selectedProfile.lng }} />
                        </Map>
                    ) : (
                        <p className="text-center">Profile not found</p>
                    )}
                </APIProvider>
            </div>
            <div className="absolute hidden md:block top-30 left-[80vw] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white  rounded-lg shadow-lg p-4 w-[80%] ">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className=" hidden md:block w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <img className=" w-10 h-10 rounded-full" src={selectedProfile.photo} alt="" />
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900">{selectedProfile.name}</h3>
                            <p className="text-sm text-gray-500">Software Engineer</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">{selectedProfile.address}</p>
                    
                </div>
            </div>{ /*will see later*/}
        </div >

    );
};

export default MapComponent;
