import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export default function PackageSection({deliveries}) {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params.parcel_id)

  

  return (
    <div>
        <button onClick={() => navigate(-1)}>go back</button>
    </div>
  )
}
