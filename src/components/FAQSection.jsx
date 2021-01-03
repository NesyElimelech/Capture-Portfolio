import React from 'react';

const FAQSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            repudiandae!
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            rerum.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Different Payments Methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus
            ad quasi.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>What Products Do You Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
