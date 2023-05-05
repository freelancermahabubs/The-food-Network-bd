import React from "react";
import { Link } from "react-router-dom";
import SecondNavBar from "../Sheard/SecondNavBar/SecondNavBar";

const Terms = () => {
  return (
    <>
      <SecondNavBar />

      <div className="my-container">
        <h2 className="lg:text-6xl">Our Terms and Conditions</h2>
        <p>
          This document is an electronic record in terms of Information
          Technology Act, 2000 and rules there under as applicable and the
          amended provisions pertaining to electronic records in various
          statutes as amended by the Information Technology Act, 2000. <br />
          1. ACCEPTANCE OF TERMS OF USE Please read the following terms and
          conditions as these terms of use ( “Terms”) constitute a legally
          binding agreement between you and the Company regarding your use of
          the Site and any services offered by the Company including but not
          limited to delivery of specialised content via the Site, any mobile or
          internet connected device or otherwise (the "the Service"). “User” or
          “You”: means any person who access or avail this site of the Company
          for the purpose of hosting, publishing, sharing, transacting,
          displaying or uploading information or views and includes other
          persons jointly participating in using the site of the Company By
          accessing the Site or Service and/or by clicking "I agree", you agree
          to be bound by these Terms. You hereby represent and warrant to the
          Company that you are at least eighteen (18) years of age or above and
          are capable of entering, performing and adhering to these Terms and
          that you agree to be bound by the following terms and conditions.
          While individuals under the age of 18 may utilize the Service of the
          site, they shall do so only with the involvement & guidance of their
          parents and/or legal guardians, under such Parent /Legal guardian’s
          registered account. You agree to register prior to uploading any
          content and/or comment and any other use or services of this Site and
          provide your details including but not limited to complete name, age,
          email address, residential address, contact number. The Company
          reserves the right, at its discretion, to change, modify, add, or
          remove portions of these Terms at any time by posting the amended
          Terms. Please check these Terms periodically for changes. Your
          continued use of the site or Services after the posting of changes
          constitutes your binding acceptance of such changes. In addition, when
          using any particular services, you may be subject to any posted
          guidelines, rules, product requirements or sometimes additional terms
          applicable to such services. All such guidelines, rules, product
          requirements or sometimes additional terms are hereby incorporated by
          reference into the Terms. YOUR ACCESS OR USE OF THE SITE OR SERVICE
          SHALL MEAN THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY THE
          TERMS. BY ACCESSING OR USING ANY WEBSITE OR SERVICES YOU ALSO
          REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY AS PER APPLICABLE LAW
          (INCLUDING BUT NOT LIMITED TO AGE REQUIREMENT) TO ACCEPT THE TERMS ON
          BEHALF OF YOURSELF AND/OR ANY OTHER PERSON YOU REPRESENT IN CONNECTION
          WITH YOUR USE OF THE SITE OR SERVICES. IF YOU DO NOT AGREE TO THE
          TERMS, YOU ARE NOT AUTHORIZED TO USE THE SITE OR SERVICES. <br /> 2.
          CONTENT OWNERSHIP AND LIMITED LICENSE • “Company Content” means
          Company proprietary content, including but not limited to, Company
          trademarks and logos made available through the Site and Services,
          excluding Third Party Content and User Submissions. • “Third Party
          Content” You may be able to access, review, display or use third party
          services, resources, content or information via the Site or the
          Services.
        </p>
        <p>
          Go Back to <Link to="/singup">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Terms;
