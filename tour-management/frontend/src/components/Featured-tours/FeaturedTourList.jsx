import React from 'react';
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'

// watch 38:18 part of video after completing this code. or ask julekha!!

const FeaturedTourList = () => {
  return( <>
  {
    tourData?.map(tour=>(
        <Col lg='3' className='mb-4' key={tour.id}>
        <TourCard tour={tour} />
        </Col>
    ))
  }
  </>
    );
};

export default FeaturedTourList;