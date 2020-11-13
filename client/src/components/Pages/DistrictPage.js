import React from 'react';
import './DistrictPage.scss';
import MapPreview from '../Map/MapPreview';
import { Link } from 'react-router-dom';
import HalfPageImage from '../HalfPageImage';



function DistrictPage() {
    return (
        <section id="district">
            <HalfPageImage/>
            <div className="container-fluid district-background">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="description">
                            <h3>Description</h3>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, obcaecati. Magni officia facilis, soluta provident dolorem perferendis sequi quia praesentium eos libero nemo suscipit iusto necessitatibus, doloremque voluptas temporibus aspernatur?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, excepturi. Dicta eligendi totam incidunt quibusdam eveniet, cumque facilis magni voluptatum. Et consequatur doloremque inventore, similique ullam voluptatem quia eum iure.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaque quos fugiat maiores quisquam unde molestiae nostrum! Excepturi dolore asperiores, architecto, odio quaerat obcaecati libero dolorem laboriosam aspernatur corrupti illum?
                            </p>
                            <span>1 km ou 7 km</span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="map-preview">
                            <MapPreview/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="final-button-wrapper d-flex justify-content-center">
                            <Link to="/dutemple/map"><button className="final-button">Commencer la visite du quartier</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DistrictPage;
