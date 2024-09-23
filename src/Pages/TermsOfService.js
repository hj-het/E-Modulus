import React from 'react';
import "../Style/TermsOfService.css"

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>
      
      <section>
        <h2 className="main-point">1. Acceptance of Terms</h2>
        <p>By using E Modulus services, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
      </section>

      <section>
        <h2 className="main-point">2. User Accounts</h2>
        <p>To access certain services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, and you agree to notify us immediately of any unauthorized use of your account.</p>
      </section>

      <section>
        <h2 className="main-point">3. Service Usage</h2>
        <p>Our services are designed to help you grow YouTube video views. You acknowledge that: 
           <ul>
              <li><span className="roman-bold">I</span> We are not affiliated with YouTube.</li>
              <li><span className="roman-bold">II</span> We cannot guarantee specific results such as increased subscribers or YouTube revenue.</li>
              <li><span className="roman-bold">III</span> All interactions and engagements generated through our service comply with YouTube’s terms of service.</li>
           </ul>
        </p>
      </section>

      <section>
        <h2 className="main-point">4. Prohibited Activities</h2>
        <p>You agree not to use our services for any illegal activities or to violate YouTube’s community guidelines. This includes:
           <ul>
              <li><span className="roman-bold">I</span> Uploading copyrighted material without permission.</li>
              <li><span className="roman-bold">II</span> Using bots, fake accounts, or other automated systems to inflate views.</li>
              <li><span className="roman-bold">III</span> Engaging in harassment, spam, or any fraudulent activities.</li>
           </ul>
        </p>
      </section>

      <section>
        <h2 className="main-point">5. Payments and Refunds</h2>
        <p>Payments must be made in full when selecting a service package. Refunds are only issued in accordance with our <a href="refund-policy-url" className="red-url">refund policy</a>. Chargebacks and payment disputes are strictly prohibited and will result in the termination of your account.</p>
      </section>

      <section>
        <h2 className="main-point">6. Privacy Policy</h2>
        <p>Your use of the E Modulus services is also governed by our <a href="privacy-policy-url" className="red-url">Privacy Policy</a>, which outlines how we collect, use, and protect your personal information.</p>
      </section>

      <section>
        <h2 className="main-point">7. Disclaimer of Warranties</h2>
        <p>Our services are provided “as is” without any warranty of any kind, either express or implied. We make no guarantees that the service will meet your specific expectations or that it will be uninterrupted or error-free.</p>
      </section>

      <section>
        <h2 className="main-point">8. Termination of Service</h2>
        <p>We reserve the right to terminate or suspend your access to our services at any time, without notice, if you violate these Terms of Service or engage in activities that harm E Modulus or other users.</p>
      </section>

      <section>
        <h2 className="main-point">9. Changes to Terms</h2>
        <p>We reserve the right to update these Terms of Service at any time. Any changes will be posted on this page, and your continued use of the service indicates acceptance of the modified terms.</p>
      </section>

      <section>
        <h2 className="main-point">10. Contact Information</h2>
        <p>For any questions or concerns regarding these terms, please contact us at <a href="mailto:support@emodulus.com" className="red-url">support@emodulus.com</a>.</p>
      </section>
    </div>
  );
};

export default TermsOfService;