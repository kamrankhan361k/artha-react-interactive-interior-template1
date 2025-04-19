import React from 'react';
import { Link } from '@reach/router';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';


export default () => (
  <div>
      <section className='jumbotron breadcumb h-vh' style={{backgroundImage: `url(${'./img/imghome1.jpg'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-8 mr-auto '>
                <div className='heading'>
                  Choice of Residence
                </div>
                <div className='content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, 
                  nisl non rutrum commodo, sem magna.
                </div>
                <div className="btn" onClick={()=> window.open("/home1", "_self")}>
                  <span className="shine"></span>
                  <span>Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='heading'>
              Choice <span className='br'></span> of Residence
            </div>
            <div className='subheading'>
              According lifestyle
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae diam eleifend, 
              in maximus metus sollicitudin. Quisque vitae sodales lectus. 
              Nam porttitor justo sed mi finibus, vel tristique risus faucibus.
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Quisque vitae sodales lectus, 
              vel tristique risus faucibus.
            </div>
          </div>

        </div>
    </section>

    <section className='container-fluid p-0 black'>
        <div className='row'>

          <div className="col-md-6 pr-md-0">
            <img src="./img/blog.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-5">
            <div className='p-md-5'>
              <div className="subheading">January 14, 2020</div>
              <div className="heading">
                Living Your Dreams
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-5 pb-5">
            <div className='p-md-5'>
              <div className="subheading">January 22, 2020</div>
              <div className="heading">
                Choice of Residence
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmodt temp to the incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis a 
                nostr a exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Link className='btn' to="">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 pl-md-0">
            <img src="./img/blog1.jpg" className="imgslickz" alt="#"/>
          </div>

        </div>
    </section>

    <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Our team</div>
            <div className='heading'>About Our Team</div>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <p className='content'>
                  Curabitur mollis bibendum luctus. 
                  Duis suscipit vitae dui sed suscipit. Vestibulum auctor 
                  nunc vitae diam eleifend, in maximus metus sollicitudin. 
                  Quisque vitae sodales lectus. Nam p
                  orttitor justo sed mi finibus, 
                  vel tristique risus faucibus. 
                </p>
              </div>
            </div>
          </div>
          <Carouselteam />
        </div>
    </section>

    <Bannercontact/>
    <Pricing />
    <Testimony />
    <Footer />

  </div>
);
