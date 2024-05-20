import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ActorDetails() {
    const [searchParams] = useSearchParams();
    const [details, setDetails] = useState({}); // Initialize as an object
    const [knownFor, setKnownFor] = useState([]); // Initialize as an array

    let imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    let currentID = searchParams.get('id');

    async function getAllDetails(MediaType) {
        try {
            let { data } = await axios.get(`https://api.themoviedb.org/3/${MediaType}/${currentID}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A&language=en-US`);
            setDetails(data); // Assuming 'data' is an object with the structure you provided
            console.log(knownFor)
        } catch (error) {
            console.error('Error fetching details:', error);
        }
    }
    
    useEffect(() => {
        getAllDetails('person');
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-4 my-4">
                    <div className="displayImg">
                        {details.profile_path && <img src={imgBaseUrl + details.profile_path} className='w-100' alt={details.name} />}
                    </div>
                </div>
                <div className="col-md-8 my-4">
                    <h2>{details.name}</h2>
                    <h3 className='h5 text-muted'>{details.tagline}</h3>

                    <ul className='mt-5'>
                        <li className='list-unstyled mb-3'>Department: {details.known_for_department}</li>
                        <li className='list-unstyled mb-3'>Popularity: {details.popularity}</li>
                        <li className='list-unstyled mb-3'>Gender: {details.gender === 1 ? "Female" : "Male"}</li>
                    </ul>

                </div>
            </div>
        </>
    );
}
