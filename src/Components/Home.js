import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image from './images/HawaiiMap.jpg';

export const Home = () => {
  return (
    <>
        <Container>
            <Row>
                <div id="main-container" class="container pt-2 pb-5 bg-light">
                    <div class="text-center"> 
                    <Image src={image} class="img-fluid" alt="Hawaii Map" />
                    </div> <br></br><br></br>

            
                    <div>
                    <h2 class="p-3 mb-2 bg-primary text-white text-center">Hawaii - The Country's Most Diverse States</h2><br></br><br></br>
                    </div>
            
                    <div>
                        <p class="container mb-5 fs-4 text-center">Hawaii is an island state of the United States, in the Pacific Ocean about 2,000 miles (3,200 km) southwest of the U.S. mainland. 
                            It is the only state not on the North American mainland, the only state that is an archipelago, and the only state in the tropics.
                        </p> <br></br>
                        <p class="container mb-5 fs-4 text-center">Hawaii consists of 137 volcanic islands that comprise almost the entire Hawaiian archipelago (the exception, which is outside the state, is Midway Atoll). 
                            Spanning 1,500 miles (2,400 km), the state is physiographically and ethnologically part of the Polynesian subregion of Oceania.
                            Hawaii's ocean coastline is consequently the fourth-longest in the U.S., at about 750 miles (1,210 km).
                        </p> <br></br>
                        <p class="container mb-5 fs-4 text-center">
                            The eight main islands, from northwest to southeast, are Niʻihau, Kauaʻi, Oʻahu, Molokaʻi, Lānaʻi, Kahoʻolawe, Maui, and Hawaiʻi, after which the state is named; the latter is often called the "Big Island" or "Hawaii Island" to avoid confusion with the state or archipelago. 
                            The uninhabited Northwestern Hawaiian Islands make up most of the Papahānaumokuākea Marine National Monument, the largest protected area in the U.S. and the fourth-largest in the world.
                        </p> <br></br>
                        <p class="container mb-5 fs-4 text-center">
                            Of the 50 U.S. states, Hawaii is the eighth-smallest in land area and the 11th-least populous; but with 1.4 million residents, it ranks 13th in population density. 
                            Two-thirds of Hawaii residents live on O'ahu, home to the state's capital and largest city, Honolulu. Hawaii is among the country's most diverse states, owing to its central location in the Pacific and over two centuries of migration. 
                        </p> <br></br>
                        <p class="container mb-5 fs-4 text-center">
                            As one of only six majority-minority states, it has the only Asian American plurality, the largest Buddhist community,and largest proportion of multiracial people in the U.S.
                            Consequently, Hawaii is a unique melting pot of North American and East Asian cultures, in addition to its indigenous Hawaiian heritage.
                        </p> <br></br>
                    </div>
                </div>
            </Row>
        </Container> 
    </>
  )
}
