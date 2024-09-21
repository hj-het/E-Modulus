import React, { useEffect } from 'react';
import './Steps.css';

const Steps = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.step-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Cleanup observer on unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="stepcontainer">
      <div className="step-section">
        <div className="step-number">
          <h2>Step 1</h2>
        </div>
        <div className="step-content">
          <h1>How E-Modulus Works?</h1>
          <p>Start by Choosing | What Do You Need as YouTube Growth Service</p>
          <ul>
            <li>
              <strong>Strict it Rich</strong> | YouTube Subscribers In this
              package, subscribers will be directed to your account immediately
              after you make a purchase.
            </li>
            <li>
              <strong>Better Late Than Never</strong> | YouTube Subscribers This
              package will gradually direct subscribers to your YouTube account,
              instead of all at once.
            </li>
            <li>
              <strong>Turbo Likes</strong> These are the immediate likes for
              your chosen video content.
            </li>
            <li>
              <strong>Spreading Likes</strong> These are the gradually provided
              likes for your perfectly designed content.
            </li>
            <li>
              <strong>%100 Genuinely Fast Views</strong> Get the most valued
              views as fast and as safe as you can.
            </li>
            <li>
              <strong>%100 Genuinely Slow Views</strong> Sometimes it's best to
              get them one by one.
            </li>
          </ul>
        </div>
      </div>

      <div className="step-section reverse">
        <div className="step-number">
          <h2>Step 2</h2>
        </div>
        <div className="step-content">
          <h1>How E-Modulus Delivers?</h1>
          <p>You Choose the Package | We Do the Work Instantly</p>
          <ul>
            <li>
              <strong>Instant Results</strong> | Once you make a purchase, you will see the subscribers flow into your account right away.
            </li>
            <li>
              <strong>Customized Growth</strong> | Choose from various packages that best suit your channel's needs and watch the results happen.
            </li>
            <li>
              <strong>Reliable Service</strong> | We ensure that all delivered subscribers and views are authentic and organic.
            </li>
          </ul>
        </div>
      </div>

      <div className="step-section">
        <div className="step-number">
          <h2>Step 3</h2>
        </div>
        <div className="step-content">
          <h1>Final Step</h1>
          <p>Enjoy the Growth | Reap the Benefits of E-Modulus</p>
          <ul>
            <li>
              <strong>Analyze Growth</strong> | Track your progress and watch your channel grow.
            </li>
            <li>
              <strong>Plan Next Steps</strong> | Continue using E-Modulus for sustained success.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Steps;