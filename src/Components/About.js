import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image1 from './images/Maui.jpg';
import image2 from './images/Kauai.jpg';
import image3 from './images/BigIsland.jpg';
import image4 from './images/Molokai.jpg';
import image5 from './images/Oahu.jpg';
import image6 from './images/Lanai.jpg';

export const About = () => {
  return (
    <>
    <Container>
        <Row>
            <div>
                <h1>More About Hawaii</h1>
        
                <div id="2024-List" class="container text-center mb-5 fs-4">

                    <div class="bg-secondary text-white text-center mb-4"><h3>Which Hawaiian Island is the Best to Visit?</h3></div>

                    <div class="row">
                        <div class="col-lg-2 text-primary">#1 Maui</div>
                        <div class="col-lg-2 text-secondary">#2 Kaua'i</div>
                        <div class="col-lg-2 text-success">#3 Hawaii - The Big Island</div>
                        <div class="col-lg-2 text-danger">#4 Molokai</div>
                        <div class="col-lg-2 text-warning">#5 Oahu</div>
                        <div class="col-lg-2 text-info">#6 Lanai</div>
                    </div>
                </div>
                <div class="container text-center mb-5 fs-2">
                    <div class="row">
                        <div class="my-2 col-lg-4 col-md-4 col-sm-12">
                        <div id="card-1" class="card bg-secondary">
            
                        <Image src={image1} class="card-img-top" alt="Picture of Maui" />
                        <div class="card-body">
                        <h5 class="card-title">Maui</h5>
                        <p class="card-text">Maui encompasses a striking spectrum of landscapes and experiences; known for its beaches, tropical landscapes, and unique biology.</p>
                        <a href="#" class="btn btn-primary">More Info</a>
                       
                        </div> 
                    </div>  
                </div>

                <div class="my-2 col-lg-4 col-md-4 col-sm-12">
                    <div id="card-2" class="card bg-secondary">
                        <Image src={image2} class="card-img-top" alt="Picture of Kauai" />
                        <div class="card-body">
                            <h5 class="card-title">Kauai</h5>
                            <p class="card-text"><br></br>Kauai is the oldest of the main Hawaiian Islands; known for its rainforests, swamps, valleys, waterfalls, and white sand beaches for exploring.</p>
                            <a href="#" class="btn btn-primary">More Info</a>
                        </div>  
                    </div>     
                </div>

                <div class="my-2 col-lg-4 col-md-4 col-sm-12">
                    <div id="card-3" class="card bg-secondary">
                        <Image src={image3} class="card-img-top" alt="Picture of The Big Island" />
                        <div class="card-body">
                            <h5 class="card-title">Big Island</h5>
                            <p class="card-text"><br></br>The Big Island is the youngest and largest of the Hawaiian Islands; especially has activities like hiking, scuba diving and snorkeling to enjoy.</p>
                            <a href="#" class="btn btn-primary">More Info</a>
                        </div>  
                    </div>
                </div>


                <div class="my-2 col-lg-4 col-md-4 col-sm-12">
                    <div id="card-4" class="card bg-secondary">
                        <Image src={image4} class="card-img-top" alt="Picture of Molokai" />
                        <div class="card-body">
                            <h5 class="card-title">Molokai</h5>
                            <p class="card-text">Molokai is home to the highest sea cliffs in the world; has preserved its slow paced, laid-back lifestyle and connection to the past.</p>
                            <a href="#" class="btn btn-primary">More Info</a>
                        </div> 
                    </div>
                </div>


                <div class="my-2 col-lg-4 col-md-4 col-sm-12">
                    <div id="card-5" class="card bg-secondary">
                        <Image src={image5} class="card-img-top" alt="Picture of Oahu" />
                        <div class="card-body">
                        <h5 class="card-title">Oahu</h5>
                        <p class="card-text">Oahu is home to about two-thirds of the state's population; known as "The Gathering Place" and is a popular destination for tourists.</p>
                        <a href="#" class="btn btn-primary">More Info</a>
                        </div> 
                    </div>
                </div>


                <div class="my-2 col-lg-4 col-md-4 col-sm-12">
                    <div id="card-6" class="card bg-secondary">
                        <Image src={image6} class="card-img-top" alt="Picture of Lanai" />
                        <div class="card-body">
                            <h5 class="card-title">Lanai</h5>
                            <p class="card-text">Lanai is the smallest inhabited island that's publicly accessible; known for its aloha spirit, tightly knit community, and unique offerings.</p>
                            <a href="#" class="btn btn-primary">More Info</a>
                        </div> 
                    </div>
                </div>
            </div></div></div>
        </Row>
    </Container> 
    </>
  )
}