import React from 'react';
import './newsletter.css'

import{Container, Row, Col} from'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'


const Newsletter = () => {
  return(

   <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2> Subscribe now to get useful traveling information..</h2>

                <div className="newsletter__input">
                    <input type="email" placeholder="Enter the email" />
                    <button className="btn newsletter__btn">Subscribe</button>
                </div>
<p>        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
                
                </div></Col>
                <Col lg="6">
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
                </Col>
        </Row>
    </Container>
  </section>
  );
}

export default Newsletter