import React from 'react';
// import PropTypes from 'prop-types';

import './businessCard.scss';

const BusinessCard = () => (
  <div id="businessCard">
    <div className="card">
      <div className="wrapper">
        <div className="imageWrapper" />
        <div className="textWrapper">
          <h2>Aslan Caicedo</h2>
          <h4>Desarrollador Full Stack</h4>
          <h5>Especialista en back-end</h5>
        </div>
      </div>
    </div>
    <div className="card">
      <h2>Sobre mi</h2>
      <h4>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quia rerum modi
        facere sint excepturi reiciendis voluptatibus temporibus architecto, molestias
        repellendus officiis omnis dignissimos exercitationem id deserunt rem vitae iusto!
        Quasi provident sunt enim iste magnam quos voluptas tempora fugit nemo corporis
        asperiores laudantium iusto dolor, nulla nobis amet voluptatibus ipsum distinctio
        facere accusamus maxime sed deserunt aut. Non, rem.
        Veniam adipisci, inventore rerum tempore consequuntur obcaecati nemo aperiam earum
        at repudiandae? Molestias dicta minus harum aperiam nisi at soluta, nostrum architecto,
        illum accusantium laboriosam repellendus ea suscipit vero quia?
      </h4>
    </div>
  </div>
);

BusinessCard.propTypes = {

};

export default BusinessCard;
