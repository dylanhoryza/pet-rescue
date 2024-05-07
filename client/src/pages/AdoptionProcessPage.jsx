import React from 'react';
import '../styles/adoptionprocess.css';
import { Link } from 'react-router-dom';

export default function AdoptionProcess() {
  return (
    <div className='adoption-process-container'>
      <div className='process-section'>
        <div className='service-title'>
          <h1 className='services-header'>
            Adoption <span>Process</span>
          </h1>
        </div>

        <div className='container'>
          <div className='row about-container'>
            <div className='col-md-12'>
              <div class='card about-card'>
                <div class='card-body'>
                  <p class='card-text' id='about-bio'>
                    Regal Dane Rescue currently serves Arizona and most
                    recently, we have expanded to the Albuquerque, New Mexico
                    area. We do not adopt outside of these areas. We do our very
                    best to match the right Dane to the right family by finding
                    out as much as possible about you, the Potential Adoptive
                    Family, before placing a dog.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='for-you-section'>
        <div className='service-title'>
          <h1 className='services-header'>
            Is a Great Dane <span>For You</span>
          </h1>
        </div>
        <div className='container'>
          <div className='row about-container'>
            <div className='col-md-12'>
              <div class='card about-card-2'>
                <div class='card-body'>
                  <h4>
                    Visit our Dane Education page and educate yourself as much
                    as possible about the breed.
                  </h4>
                  <ul className='ul-facts'>
                    <li>
                      If you have any questions, please contact us. Talk it over
                      with everyone in your household, and make sure that
                      everyone feels the same way about adopting a rescue dog.
                    </li>
                    <li>
                      Think about your schedule and decide when and if you will
                      have time to spend with your dog. Who will be responsible
                      for taking care of the dog? Finally, take a look at your
                      home. Where will the dog sleep? Where will the dog eat?
                    </li>
                    <li>
                      Once you have considered all the aspects of adding a
                      large, loving, active companion to your home, it’s time to
                      think about whether you want to commit to adopting a Great
                      Dane.​
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='other-info-section'>
        <div className='service-title-2'>
          <h1 className='services-header-2'>
            Other <span>Information</span>
          </h1>
        </div>
        <div className='container'>
          <div className='row about-container'>
            <div className='col-md-12'>
              <div class='card about-card-5'>
                <div class='card-body'>
                  <p class='card-text' id='about-bio'>
                    Complete our mobile-friendly Adoption Application. There is
                    a $25.00 Administration Fee that is non-refundable. If you
                    are accepted to adopt, this fee will be applied toward the
                    adoption donation. We reserve the right to refuse any
                    application for any reason.​
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div class='card about-card-3'>
                <div class='card-body'>
                  <h4>
                    A Regal Dane Representative will contact you after your
                    references are checked, to setup a Meet & Greet.
                  </h4>
                  <ul className='ul-facts'>
                    <li>
                      The representative will set up a time with you for your
                      whole family to meet the adoptable dog at the foster's
                      house.
                    </li>
                    <li>
                      We require that all members of your family be present at
                      this Meet & Greet to make sure the adoptable dog fits with
                      everyone in your family.
                    </li>
                    <li>
                      If you feel that the adoptable dog is not the right dog
                      for you, or, if the foster family feels this particular
                      dog may not be the right fit for your family, we will
                      begin the process again to find the perfect dog for your
                      family.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div class='card about-card-3'>
                <div class='card-body'>
                  <h4>Home Check and Meet & Greet with Family Pets</h4>
                  <p>
                    After the initial Meet & Greet has been completed, a Regal
                    Dane Rescue representative contact you for a home visit. The
                    representative will come to your home to ensure the home is
                    a suitable environment for a Great Dane. At this time, a
                    Meet & Greet will be done with all of your current pets, to
                    make sure all of them get along.
                  </p>
                </div>
              </div>
              <div class='card about-card-4'>
                <div class='card-body'>
                  <h4>Click to View Our Adoptable Danes</h4>
                  <div className='button-container'>
                    <Link to='/adopt/danes'>
                      <button className='watch-btn'>View</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
