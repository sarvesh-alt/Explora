import React from 'react';
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'

// watch 38:18 part of video after completing this code. or ask julekha!!

const FeaturedTourList = () => {
  return (
    <>
    {loading && <h4>Loading...</h4>}
    {error && <h4>{error}</h4>}
    {!loading && !error &&
      featuredTours?.map(tour => (
        <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
          <TourCard tour={tour}/>
        </Col>
      ))}
      </>
    };
  );
  

export default FeaturedTourList;