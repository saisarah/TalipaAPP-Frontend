import { Button, Checkbox, Modal } from "antd";
import { useState, useEffect } from "react";

export default function TermsAndCondition() {
  const [terms, setTerms] = useState("unchecked");
  useEffect(() => {
    console.log(terms);
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Checkbox required className="text-justify">
        Please read these
        <span class="text-primary" onClick={showModal}>
          {" "}
          terms and conditions{" "}
        </span>
        carefully. The following Terms of Use govern your use and access of the
        Platform (defined below) and the use of the Services. By accessing the
        Platform and/or using the Services, you agree to be bound by these Terms
        of Use. If you do not agree to these Terms of Use, do not access and/or
        use this Platform or the Services.
      </Checkbox>

      <Modal
        className="text-justify"
        open={open}
        // title={name}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,

          <Button
            // key="link"
            // href=""
            // onClick={handleOk}
            type="primary"
            loading={loading}
            onClick={() => setTerms("checked")}
          >
            I Agree
          </Button>,
        ]}
      >
        <h1>Terms of Use</h1>
        <p>
          Welcome to the TalipaAPP platform. Please read these terms and
          conditions carefully. The following Terms of Use govern your use and
          access of the Platform (defined below) and the use of the Services. By
          accessing the Platform and/or using the Services, you agree to be
          bound by these Terms of Use. If you do not agree to these Terms of
          Use, do not access and/or use this Platform or the Services.
        </p>
        <p>
          Access to and use of password protected and/or secure areas of the
          Platform and/or use of the Services are restricted to Customers with
          accounts only. You may not obtain or attempt to obtain unauthorized
          access to such parts of this Platform and/or Services, or to any other
          protected information, through any means not intentionally made
          available by us for your specific use.
        </p>
        <p>
          If you are below 18 years old: you must obtain consent from your
          parent(s) or legal guardian(s), their acceptance of these Terms of Use
          and their agreement to take responsibility for: (i) your actions; (ii)
          any charges associated with your use of any of the Services or
          purchase of Products; and (iii) your acceptance and compliance with
          these Terms of Use. If you do not have consent from your parent(s) or
          legal guardian(s), you must stop using/accessing this Platform and
          using the Services.
        </p>
        <h1>1. Definitions & Interpretation</h1>
        <p>
          Unless otherwise defined, the definitions and provisions in respect of
          interpretation set out in Schedule 1 will apply to these Terms of Use.
        </p>
        <h1>2. General use of Services and/or access of Platform</h1>
        <p>
          2.1 Guidelines to the use of Platform and/or Services: You agree to
          comply with any and all the guidelines, notices, operating rules and
          policies and instructions pertaining to the use of the Services and/or
          access to the Platform, as well as any amendments to the
          aforementioned, issued by us, from time to time. We reserve the right
          to revise these guidelines, notices, operating rules and policies and
          instructions at any time and you are deemed to be aware of and bound
          by any changes to the foregoing upon their publication on the
          Platform.
        </p>
        <p>2.2 Restricted activities: You agree and undertake NOT to:</p>
        <p>
          (a) impersonate any person or entity or to falsely state or otherwise
          misrepresent your affiliation with any person or entity;
        </p>
        <p>(b) use the Platform or Services for illegal purposes;</p>
        <p>
          (c) attempt to gain unauthorized access to or otherwise interfere or
          disrupt other computer systems or networks connected to the Platform
          or Services;
        </p>
        <p>
          (d) post, promote or transmit through the Platform or Services any
          Prohibited Materials;
        </p>
        <p>
          (e) interfere with another’s utilization and enjoyment of the Platform
          or Services;
        </p>
        <p>
          (f) use or upload, in any way, any software or material that contains,
          or which you have reason to suspect that contains, viruses, damaging
          components, malicious code or harmful components which may impair or
          corrupt the Platform’s data or damage or interfere with the operation
          of another Customer’s computer or mobile device or the Platform or
          Services; and
        </p>
        <p>
          (g) use the Platform or Services other than in conformance with the
          acceptable use policies of any connected computer networks, any
          applicable Internet standards and any other applicable laws.
        </p>
        <p>
          3.5 Prices of Products: All Listing Prices are subject to taxes,
          unless otherwise stated. We reserve the right to amend the Listing
          Prices at any time without giving any reason or prior notice.
        </p>
        <p>
          3.6 Third Party Vendors: You acknowledge that parties other than
          TalipaAPP (i.e. Third Party-Vendors or Sellers) list and sell Products
          on the Platform. Whether a particular Product is listed for sale on
          the Platform by TalipaAPP or a Third-Party Vendor may be stated on the
          webpage listing that Product. For the avoidance of doubt, each
          agreement entered into for the sale of a Third-Party Vendor’s Products
          to a Customer shall be an agreement entered into directly and only
          between the Third-Party Vendor and the Customer. You further
          acknowledge that Third Party Vendors may utilize paid services offered
          by TalipaAPP to promote their Product listings within your search
          results on the Platform. Such Product listings may be accompanied by a
          “megaphone” logo.
        </p>
        <h1>4. Customers with TalipaAPP accounts</h1>
        <p>
          4.1 Username/Password: Certain Services that may be made available on
          the Platform may require creation of an account with us or for you to
          provide Personal Data. If you request to create an account with us, a
          Username and Password may either be: (i) determined and issued to you
          by us; or (ii) provided by you and accepted by us in our sole and
          absolute discretion in connection with the use of the Services and/or
          access to the relevant Platform. We may at any time in our sole and
          absolute discretion, request that you update your Personal Data or
          forthwith invalidate the Username and/or Password without giving any
          reason or prior notice and shall not be liable or responsible for any
          Losses suffered by or caused by you or arising out of or in connection
          with or by reason of such request or invalidation. You hereby agree to
          change your Password from time to time and to keep the Username and
          Password confidential and shall be responsible for the security of
          your account and liable for any disclosure or use (whether such use is
          authorized or not) of the Username and/or Password. You should notify
          us immediately if you have knowledge that or have reason for
          suspecting that the confidentiality of the Username and/or Password
          has been compromised or if there has been any unauthorized use of the
          Username and/or Password or if your Personal Data requires updating.
        </p>
        <p>
          4.2 Purported use/access: You agree and acknowledge that any use of
          the Services and/or any access to the Platform and any information,
          data or communications referable to your Username and Password shall
          be deemed to be, as the case may be:
        </p>
        <p>
          • (a) access to the relevant Platform and/or use of the Services by
          you; or
        </p>
        <p>
          • (b) information, data or communications posted, transmitted and
          validly issued by you.
        </p>
        <p>
          You agree to be bound by any access of the Platform and/or use of any
          Services (whether such access or use are authorized by you or not) and
          you agree that we shall be entitled (but not obliged) to act upon,
          rely on or hold you solely responsible and liable in respect thereof
          as if the same were carried out or transmitted by you. You further
          agree and acknowledge that you shall be bound by and agree to fully
          indemnify us against any and all Losses attributable to any use of any
          Services and/or or access to the Platform referable to your Username
          and Password.
        </p>
        <h1>5. Intellectual property</h1>
        <p>
          5.1 Ownership: The Intellectual Property in and to the Platform and
          the Materials are owned, licensed to or controlled by us, our
          licensors or our service providers. We reserve the right to enforce
          its Intellectual Property to the fullest extent of the law.
        </p>
        <p>
          5.2 Restricted use: No part or parts of the Platform, or any Materials
          may be reproduced, reverse engineered, decompiled, disassembled,
          separated, altered, distributed, republished, displayed, broadcast,
          hyperlinked, mirrored, framed, transferred or transmitted in any
          manner or by any means or stored in an information retrieval system or
          installed on any servers, system or equipment without our prior
          written permission or that of the relevant copyright owners. Subject
          to Clause 5.3, permission will only be granted to you to download,
          print or use the Materials for personal and non-commercial uses,
          provided that you do not modify the Materials and that we or the
          relevant copyright owners retain all copyright and other proprietary
          notices contained in the Materials.
        </p>
        <p>
          5.3 Trademarks: The Trademarks are registered and unregistered
          trademarks of us or third parties. Nothing on the Platform and in
          these Terms of Use shall be construed as granting, by implication,
          estoppel, or otherwise, any license or right to use (including as a
          meta tag or as a “hot” link to any other website) any Trademarks
          displayed on the Services, without our written permission or any other
          applicable trademark owner.
        </p>
      </Modal>
    </>
  );
}
