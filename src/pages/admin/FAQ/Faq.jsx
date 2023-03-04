import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Collapse, Space } from "antd";

export default function Faq() {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div>
      <div className="flex">
        <div className="flex grow justify-center py-8 text-5xl font-bold">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="flex px-40">
        <div className="flex grow pt-4 ">
          <Space direction="vertical w-full py-10 border-none">
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="Terms of Use"
                key="1"
              >
                <h3>Terms of Use</h3>
                <p>
                  Welcome to the TalipaAPP platform. Please read these terms and
                  conditions carefully. The following Terms of Use govern your
                  use and access of the Platform (defined below) and the use of
                  the Services. By accessing the Platform and/or using the
                  Services, you agree to be bound by these Terms of Use. If you
                  do not agree to these Terms of Use, do not access and/or use
                  this Platform or the Services. Access to and use of password
                  protected and/or secure areas of the Platform and/or use of
                  the Services are restricted to Customers with accounts only.
                  You may not obtain or attempt to obtain unauthorized access to
                  such parts of this Platform and/or Services, or to any other
                  protected information, through any means not intentionally
                  made available by us for your specific use. If you are below
                  18 years old: you must obtain consent from your parent(s) or
                  legal guardian(s), their acceptance of these Terms of Use and
                  their agreement to take responsibility for: (i) your actions;
                  (ii) any charges associated with your use of any of the
                  Services or purchase of Products; and (iii) your acceptance
                  and compliance with these Terms of Use. If you do not have
                  consent from your parent(s) or legal guardian(s), you must
                  stop using/accessing this Platform and using the Services.
                </p>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="1. Definitions & Interpretation"
                key="1"
              >
                <p>
                  Unless otherwise defined, the definitions and provisions in
                  respect of interpretation set out in Schedule 1 will apply to
                  these Terms of Use.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="2. General use of Services and/or access of Platform"
                key="1"
              >
                <p>
                  2.1 Guidelines to the use of Platform and/or Services: You
                  agree to comply with any and all the guidelines, notices,
                  operating rules and policies and instructions pertaining to
                  the use of the Services and/or access to the Platform, as well
                  as any amendments to the aforementioned, issued by us, from
                  time to time. We reserve the right to revise these guidelines,
                  notices, operating rules and policies and instructions at any
                  time and you are deemed to be aware of and bound by any
                  changes to the foregoing upon their publication on the
                  Platform. <br />
                  2.2 Restricted activities: You agree and undertake NOT to: (a)
                  impersonate any person or entity or to falsely state or
                  otherwise misrepresent your affiliation with any person or
                  entity; (b) use the Platform or Services for illegal purposes;
                  (c) attempt to gain unauthorized access to or otherwise
                  interfere or disrupt other computer systems or networks
                  connected to the Platform or Services; (d) post, promote or
                  transmit through the Platform or Services any Prohibited
                  Materials; (e) interfere with another’s utilization and
                  enjoyment of the Platform or Services; (f) use or upload, in
                  any way, any software or material that contains, or which you
                  have reason to suspect that contains, viruses, damaging
                  components, malicious code or harmful components which may
                  impair or corrupt the Platform’s data or damage or interfere
                  with the operation of another Customer’s computer or mobile
                  device or the Platform or Services; and (g) use the Platform
                  or Services other than in conformance with the acceptable use
                  policies of any connected computer networks, any applicable
                  Internet standards and any other applicable laws.
                  <br /> 2.3 Availability of Platform and Services: We may, from
                  time to time and without giving any reason or prior notice,
                  upgrade, modify, suspend or discontinue the provision of or
                  remove, whether in whole or in part, the Platform or any
                  Services and shall not be liable if any such upgrade,
                  modification, suspension or removal prevents you from
                  accessing the Platform or any part of the Services.
                  <br />
                  2.4 Right, but not obligation, to monitor content: We reserve
                  the right, but shall not be obliged to: (a) monitor, screen or
                  otherwise control any activity, content or material on the
                  Platform and/or through the Services. We may in our sole and
                  absolute discretion, investigate any violation of the terms
                  and conditions contained herein and may take any action it
                  deems appropriate; (b) prevent or restrict access of any
                  Customer to the Platform and/or the Services; (c) report any
                  activity it suspects to be in violation of any applicable law,
                  statute or regulation to the appropriate authorities and to
                  co-operate with such authorities; and/or (d) to request any
                  information and data from you in connection with your use of
                  the Services and/or access of the Platform at any time and to
                  exercise our right under this paragraph if you refuse to
                  divulge such information and/or data or if you provide or if
                  we have reasonable grounds to suspect that you have provided
                  inaccurate, misleading or fraudulent information and/or data.
                  <br />
                  2.5 Privacy Policy: Your use of the Services and/or access to
                  the Platform is also subject to the Privacy Policy as set out
                  Here.
                  <br />
                  2.6 Terms & Conditions of Sale: Purchases of any Product would
                  be subject to the Terms & Conditions Of Sale.
                  <br />
                  2.7 Additional terms: In addition to these Terms of Use, the
                  use of specific aspects of the Materials and Services, more
                  comprehensive or updated versions of the Materials offered by
                  us or our designated sub-contractors, may be subject to
                  additional terms and conditions, which will apply in full
                  force and effect.
                </p>

                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="3. Use of Services"
                key="1"
              >
                <p>
                  3.1 Application of this Clause: In addition to all other terms
                  and conditions of these Terms of Use, the provisions in this
                  Clause 3 are the additional specific terms and conditions
                  governing your use of the Services.
                  <br /> 3.2 Restrictions: Use of the Services is limited to
                  authorized Customers that are of legal age and who have the
                  legal capacity to enter into and form contracts under any
                  applicable law. Customers who have breached or are in breach
                  of the terms and conditions contained herein and Customers who
                  have been permanently or temporarily suspended from use of any
                  of the Services may not use the Services even if they satisfy
                  the requirements of this Clause 3.2.
                  <br /> 3.3 General terms of use: You agree: (a) to access
                  and/or use the Services only for lawful purposes and in a
                  lawful manner at all times and further agree to conduct any
                  activity relating to the Services in good faith; and (b) to
                  ensure that any information or data you post or cause to
                  appear on the Platform in connection with the Services is
                  accurate and agree to take sole responsibility for such
                  information and data.
                  <br />
                  3.4 Product description: While we endeavor to provide an
                  accurate description of the Products, we do not warrant that
                  such description is accurate, current or free from error.
                  <br />
                  3.5 Prices of Products: All Listing Prices are subject to
                  taxes, unless otherwise stated. We reserve the right to amend
                  the Listing Prices at any time without giving any reason or
                  prior notice.
                  <br />
                  3.6 Third Party Vendors: You acknowledge that parties other
                  than TalipaAPP (i.e. Third Party-Vendors or Sellers) list and
                  sell Products on the Platform. Whether a particular Product is
                  listed for sale on the Platform by TalipaAPP or a Third-Party
                  Vendor may be stated on the webpage listing that Product. For
                  the avoidance of doubt, each agreement entered into for the
                  sale of a Third-Party Vendor’s Products to a Customer shall be
                  an agreement entered into directly and only between the
                  Third-Party Vendor and the Customer. You further acknowledge
                  that Third Party Vendors may utilize paid services offered by
                  TalipaAPP to promote their Product listings within your search
                  results on the Platform. Such Product listings may be
                  accompanied by a “megaphone” logo.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="4. Customers with TalipaAPP accounts"
                key="1"
              >
                <p>
                  4.1 Username/Password: Certain Services that may be made
                  available on the Platform may require creation of an account
                  with us or for you to provide Personal Data. If you request to
                  create an account with us, a Username and Password may either
                  be: (i) determined and issued to you by us; or (ii) provided
                  by you and accepted by us in our sole and absolute discretion
                  in connection with the use of the Services and/or access to
                  the relevant Platform. We may at any time in our sole and
                  absolute discretion, request that you update your Personal
                  Data or forthwith invalidate the Username and/or Password
                  without giving any reason or prior notice and shall not be
                  liable or responsible for any Losses suffered by or caused by
                  you or arising out of or in connection with or by reason of
                  such request or invalidation. You hereby agree to change your
                  Password from time to time and to keep the Username and
                  Password confidential and shall be responsible for the
                  security of your account and liable for any disclosure or use
                  (whether such use is authorized or not) of the Username and/or
                  Password. You should notify us immediately if you have
                  knowledge that or have reason for suspecting that the
                  confidentiality of the Username and/or Password has been
                  compromised or if there has been any unauthorized use of the
                  Username and/or Password or if your Personal Data requires
                  updating.
                  <br />
                  4.2 Purported use/access: You agree and acknowledge that any
                  use of the Services and/or any access to the Platform and any
                  information, data or communications referable to your Username
                  and Password shall be deemed to be, as the case may be: • (a)
                  access to the relevant Platform and/or use of the Services by
                  you; or • (b) information, data or communications posted,
                  transmitted and validly issued by you. You agree to be bound
                  by any access of the Platform and/or use of any Services
                  (whether such access or use are authorized by you or not) and
                  you agree that we shall be entitled (but not obliged) to act
                  upon, rely on or hold you solely responsible and liable in
                  respect thereof as if the same were carried out or transmitted
                  by you. You further agree and acknowledge that you shall be
                  bound by and agree to fully indemnify us against any and all
                  Losses attributable to any use of any Services and/or or
                  access to the Platform referable to your Username and
                  Password.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="5. Intellectual property"
                key="1"
              >
                <p>
                  5.1 Ownership: The Intellectual Property in and to the
                  Platform and the Materials are owned, licensed to or
                  controlled by us, our licensors or our service providers. We
                  reserve the right to enforce its Intellectual Property to the
                  fullest extent of the law.
                  <br />
                  5.2 Restricted use: No part or parts of the Platform, or any
                  Materials may be reproduced, reverse engineered, decompiled,
                  disassembled, separated, altered, distributed, republished,
                  displayed, broadcast, hyperlinked, mirrored, framed,
                  transferred or transmitted in any manner or by any means or
                  stored in an information retrieval system or installed on any
                  servers, system or equipment without our prior written
                  permission or that of the relevant copyright owners. Subject
                  to Clause
                  <br />
                  5.3, permission will only be granted to you to download, print
                  or use the Materials for personal and non-commercial uses,
                  provided that you do not modify the Materials and that we or
                  the relevant copyright owners retain all copyright and other
                  proprietary notices contained in the Materials. 5.3
                  Trademarks: The Trademarks are registered and unregistered
                  trademarks of us or third parties. Nothing on the Platform and
                  in these Terms of Use shall be construed as granting, by
                  implication, estoppel, or otherwise, any license or right to
                  use (including as a meta tag or as a “hot” link to any other
                  website) any Trademarks displayed on the Services, without our
                  written permission or any other applicable trademark owner.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="6. Our limitation of responsibility and liability"
                key="1"
              >
                <p>
                  6.1 No representations or warranties: The Services, the
                  Platform and the Materials are provided on an “as is” and “as
                  available” basis. All data and/or information contained in the
                  Platform, the Services or the Materials are provided for
                  informational purposes only. No representations or warranties
                  of any kind, implied, express or statutory, including the
                  warranties of non-infringement of third party rights, title,
                  merchantability, satisfactory quality or fitness for a
                  particular purpose, are given in conjunction with the
                  Platform, the Services or the Materials. Without prejudice to
                  the generality of the foregoing, we do not warrant: (a) the
                  accuracy, timeliness, adequacy, commercial value or
                  completeness of all data and/or information contained in the
                  Platform, the Services or the Materials; (b) that the
                  Platform, the Services or that any of the Materials will be
                  provided uninterrupted, secure or free from errors or
                  omissions, or that any identified defect will be corrected;
                  (c) that the Platform, the Services or the Materials are free
                  from any computer virus or other malicious, destructive or
                  corrupting code, agent, program or macros; and (d) the
                  security of any information transmitted by you or to you
                  through the Platform or the Services, and you accept the risk
                  that any information transmitted or received through the
                  Services or the Platform may be accessed by unauthorized third
                  parties and/or disclosed by us or our officers, employees or
                  agents to third parties purporting to be you or purporting to
                  act under your authority. Transmissions over the Internet and
                  electronic mail may be subject to interruption, transmission
                  blackout, delayed transmission due to internet traffic or
                  incorrect data transmission due to the public nature of the
                  Internet.
                  <br />
                  6.2 Exclusion of liability: TalipaAPP Indemnitees shall not be
                  liable to you for any Losses whatsoever or howsoever caused
                  (regardless of the form of action) arising directly or
                  indirectly in connection with: (a) any access, use and/or
                  inability to use the Platform or the Services; (b) reliance on
                  any data or information made available through the Platform
                  and/or through the Services. You should not act on such data
                  or information without first independently verifying its
                  contents; (c) any system, server or connection failure, error,
                  omission, interruption, delay in transmission, computer virus
                  or other malicious, destructive or corrupting code, agent
                  program or macros; and (d) any use of or access to any other
                  website or webpage linked to the Platform, even if we or our
                  officers or agents or employees may have been advised of, or
                  otherwise might have anticipated, the possibility of the same.
                  <br />
                  6.3 At your own risk: Any risk of misunderstanding, error,
                  damage, expense or Losses resulting from the use of the
                  Platform is entirely at your own risk and we shall not be
                  liable therefor.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="7. Hyperlinks, and alerts"
                key="1"
              >
                <p>
                  7.1 Hyperlinks: For your convenience, we may include
                  hyperlinks to other websites or content on the Internet that
                  are owned or operated by third parties. Such linked websites
                  or content are not under our control and we are not liable for
                  any errors, omissions, delays, defamation, libel, slander,
                  falsehood, obscenity, pornography, profanity, inaccuracy or
                  any other objectionable material contained in the contents, or
                  the consequences of accessing, any linked website. Any
                  hyperlinks to any other websites or content are not an
                  endorsement or verification of such websites or content and
                  you agree that your access to or use of such linked websites
                  or content is entirely at your own risk.
                  <br />
                  7.2 Promotions: We may attach banners, java applets and/or
                  such other materials to the Platform for the purposes of
                  promoting our or our Third-Party Vendors’ products and/or
                  services. For the avoidance of doubt, you shall not be
                  entitled to receive any payment, fee and/or commission in
                  respect of any such promotional materials.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="8. Your submissions and information"
                key="1"
              >
                <p>
                  8.1 Submissions by you: You grant us a non-exclusive license
                  to use the materials or information that you submit to the
                  Platform and/or provide to us, including but not limited to,
                  questions, reviews, comments, and suggestions (collectively,
                  “Submissions”). When you post comments or reviews to the
                  Platform, you also grant us the right to use the name that you
                  submit or your Username in connection with such review,
                  comment, or other content. You shall not use a false e-mail
                  address, pretend to be someone other than yourself or
                  otherwise mislead us or third parties as to the origin of any
                  Submissions. We may, but shall not be obligated to, publish,
                  remove or edit your Submissions.
                  <br />
                  8.2 Consent to receive e-mails: You give your full, free, and
                  unequivocal consent and authority to the collection,
                  processing and use by us of any information provided by you
                  (including Personal Data) for the purposes of sending
                  informational and promotional e-mails and any and all
                  communications, notices, updates and other information to
                  you,. Your agreement to the provisions of this Clause 8.2
                  shall constitute your consent for the purpose of the
                  provisions of any spam control laws (whether in Philippines or
                  elsewhere). You may subsequently opt out of receiving
                  promotional e-mails by clicking on the appropriate hyperlink
                  in any promotional e-mail.
                  <br />
                  8.3 TalipaAPP may, from time to time, be required by
                  government agencies to disclose certain information in
                  connection with any audit or investigation. You understand
                  that we are not required to contest any demand made by an
                  (government) authority for such information. Privacy Policy:
                  You acknowledge that you have read and agree to the Privacy
                  Policy set out Here. and consent to our collection, use and
                  disclosure of your Personal Data for the purposes as set out
                  in the Privacy Policy.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="9. Termination"
                key="1"
              >
                <p>
                  9.1 Termination by us: In our sole and absolute discretion, we
                  may with immediate effect terminate your use of the Platform
                  and/or Services and/or disable your Username and Password. We
                  may bar access to the Platform and/or Services (or any part
                  thereof) for any reason whatsoever, including a breach of any
                  of these Terms of Use or where if we believe that you have
                  violated or acted inconsistently with any terms or conditions
                  set out herein, or if in our opinion or the opinion of any
                  regulatory authority, it is not suitable to continue providing
                  the services relating to the Platform.
                  <br />
                  9.2 Termination by you: You may terminate these Terms of Use
                  by giving seven days’ notice in writing to us.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel className="text-xl shadow-sm" header="10. Notices" key="1">
                <p>
                  10.1 Notices from us: All notices or other communications
                  given to you if: (a) communicated through any print or
                  electronic media as we may select will be deemed to be
                  notified to you on the date of publication or broadcast; or
                  (b) sent by post or left at your last known address will be
                  deemed to be received by you on the day following such posting
                  or on the day when it was so left. 10.2 Notices from you: You
                  may only give notice to us in writing sent to our designated
                  address or e-mail address, and we shall be deemed to have
                  received such notice only upon receipt. While we endeavor to
                  respond promptly to notices from you, we cannot guarantee that
                  we will always respond with consistent speed. 10.3 Other
                  modes: Notwithstanding Clauses 10.1 and
                  <br />
                  10.2, we may from time to time designate other acceptable
                  modes of giving notices (including but not limited to e-mail
                  or other forms of electronic communication) and the time or
                  event by which such notice shall be deemed given.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel className="text-xl shadow-sm" header="11. General" key="1">
                <p>
                  11.1 Cumulative rights and remedies: Unless otherwise provided
                  under these Terms of Use, the provisions of these Terms of Use
                  and our rights and remedies under these Terms of Use are
                  cumulative and are without prejudice and in addition to any
                  rights or remedies we may have in law or in equity, and no
                  exercise by us of any one right or remedy under these Terms of
                  Use, or at law or in equity, shall (save to the extent, if
                  any, provided expressly in these Terms of Use or at law or in
                  equity) operate so as to hinder or prevent our exercise of any
                  other such right or remedy as at law or in equity.
                  <br />
                  11.2 No waiver: Our failure to enforce these Terms of Use
                  shall not constitute a waiver of these terms, and such failure
                  shall not affect the right later to enforce these Terms of
                  Use. We would still be entitled to use our rights and remedies
                  in any other situation where you breach these Terms of Use.
                  <br />
                  11.3 Severability: If at any time any provision of these Terms
                  of Use shall be or shall become illegal, invalid or
                  unenforceable in any respect, the legality, validity and
                  enforceability of the remaining provisions of this Agreement
                  shall not be affected or impaired thereby, and shall continue
                  in force as if such illegal, invalid or unenforceable
                  provision was severed from these Terms of Use. 11.4 Rights of
                  third parties: A person or entity who is not a party to these
                  Terms of Use shall have no right under any legislation in any
                  jurisdiction to enforce any term of these Terms of Use,
                  regardless of whether such person or entity has been
                  identified by name, as a member of a class or as answering a
                  particular description. For the avoidance of doubt, nothing in
                  this Clause shall affect the rights of any permitted assignee
                  or transferee of these Terms of Use.
                  <br />
                  11.5 Governing law: Use of the Platform and/or the Services
                  and these Terms of Use shall be governed by and construed in
                  accordance with Philippine law. If any dispute arises in
                  connection with these Terms of Use, the Parties shall attempt,
                  in fair dealing and in good faith, to settle such dispute. If
                  the Parties are not able to reach an amicable settlement
                  pursuant to the preceding section they shall try to agree on
                  an appropriate ADR proceeding (for example mediation,
                  conciliation, expert determination, dispute board,
                  adjudication). If they do not reach agreement on the
                  appropriate ADR proceeding within 14 days after failure of the
                  settlement negotiations or if the dispute is not settled
                  through an ADR proceeding within a period of two months after
                  initiation of the ADR preceding, each Party may initiate an
                  arbitration proceeding pursuant to the following paragraph.
                  All disputes arising out of or in connection with the present
                  contract, including any question regarding its existence,
                  validity or termination, shall be finally settled in
                  accordance with the rules of the Philippine Dispute Resolution
                  Center, Inc. (“PDRCI”) for the time being in force, which
                  rules are deemed incorporated by reference into this clause.
                  The arbitral tribunal shall consist of three arbitrators to be
                  chosen in accordance with the rules of the PDRCI. The seat of
                  arbitration shall be the Philippines. The procedural law of
                  this seat applicable to commercial arbitration proceedings
                  shall apply where the Rules are silent. The language to be
                  used in the arbitration proceedings shall be English. 11.6
                  Injunctive relief: We may seek immediate injunctive relief if
                  we make a good faith determination that a breach or
                  non-performance is such that a temporary restraining order or
                  other immediate injunctive relief is the only appropriate or
                  adequate remedy.
                  <br />
                  11.7 Amendments: We may by notice through the Platform or by
                  such other method of notification as we may designate (which
                  may include notification by way of e-mail), vary the terms and
                  conditions of these Terms of Use, such variation to take
                  effect on the date we specify through the above means. If you
                  use the Platform or the Services after such date, you are
                  deemed to have accepted such variation. If you do not accept
                  the variation, you must stop access or using the Platform and
                  the Services and terminate these Terms of Use. Our right to
                  vary these Terms of Use in the manner aforesaid will be
                  exercised with may be exercised without the consent of any
                  person or entity who is not a party to these Terms of Use.
                  <br />
                  11.8 Correction of errors: Any typographical, clerical or
                  other error or omission in any acceptance, invoice or other
                  document on our part shall be subject to correction without
                  any liability on our part.
                  <br />
                  11.9 Currency: Money references under these Terms of Use shall
                  be in Philippines Peso.
                  <br />
                  11.10 Language: In the event that these Terms of Use is
                  executed or translated in any language other than English
                  (“Foreign Language Version”), the English language version of
                  these Terms of Use shall govern and shall take precedence over
                  the Foreign Language Version.
                  <br />
                  11.11 Entire agreement: These Terms of Use shall constitute
                  the entire agreement between you and us relating to the
                  subject matter hereof and supersedes and replaces in full all
                  prior understandings, communications and agreements with
                  respect to the subject matter hereof. 11.12 Binding and
                  conclusive: You acknowledge and agree that any records
                  (including records of any telephone conversations relating to
                  the Services, if any) maintained by us or our service
                  providers relating to or in connection with the Platform and
                  Services shall be binding and conclusive on you for all
                  purposes whatsoever and shall be conclusive evidence of any
                  information and/or data transmitted between us and you. You
                  hereby agree that all such records are admissible in evidence
                  and that you shall not challenge or dispute the admissibility,
                  reliability, accuracy or the authenticity of such records
                  merely on the basis that such records are in electronic form
                  or are the output of a computer system, and you hereby waive
                  any of your rights, if any, to so object.
                  <br />
                  11.13 Sub-contracting and delegation: We reserve the right to
                  delegate or sub-contract the performance of any of our
                  functions in connection with the Platform and/or Services and
                  reserve the right to use any service providers, subcontractors
                  and/or agents on such terms as we deem appropriate.
                  <br />
                  11.14 Assignment: You may not assign your rights under these
                  Terms of Use without our prior written consent. We may assign
                  our rights under these Terms of Use to any third party.
                  <br />
                  11.15 Force Majeure: We shall not be liable for
                  non-performance, error, interruption or delay in the
                  performance of its obligations under these Terms of Use (or
                  any part thereof) or for any inaccuracy, unreliability or
                  unsuitability of the Platform's and/or Services’ contents if
                  this is due, in whole or in part, directly or indirectly to an
                  event or failure which is beyond our reasonable control.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <h1 className="text-xl">SHEDULE</h1>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="Definitions and Interpretation"
                key="1"
              >
                <p>
                  1. Definitions. Unless the context otherwise requires, the
                  following expressions shall have the following meanings in
                  these Terms of Use:
                  <br />
                  1.1 “Customer” has the same meaning as in the Terms &
                  Conditions of Sale.
                  <br />
                  1.2 “Intellectual Property” means all copyright, patents,
                  utility innovations, trademarks and service marks,
                  geographical indications, domain names, layout design rights,
                  registered designs, design rights, database rights, trade or
                  business names, rights protecting trade secrets and
                  confidential information, rights protecting goodwill and
                  reputation, and all other similar or corresponding proprietary
                  rights and all applications for the same, whether presently
                  existing or created in the future, anywhere in the world,
                  whether registered or not, and all benefits, privileges,
                  rights to sue, recover damages and obtain relief or other
                  remedies for any past, current or future infringement,
                  misappropriation or violation of any of the foregoing rights.
                  <br />
                  1.3 “TalipaAPP Indemnitees” means TalipaAPP and all of its
                  respective officers, employees, directors, agents, contractors
                  and assigns.
                  <br />
                  1.4 “Listing Price” means the price of Products listed for
                  sale to Customers, as stated on the Platform.
                  <br />
                  1.5 “Losses” means all penalties, losses, settlement sums,
                  costs (including legal fees and expenses on a solicitor-client
                  basis), charges, expenses, actions, proceedings, claims,
                  demands and other liabilities, whether foreseeable or not.
                  <br />
                  1.6 “Materials” means, collectively, all web pages on the
                  Platform, including the information, images, links, sounds,
                  graphics, video, software, applications and other materials
                  displayed or made available on the Platform and the
                  functionalities or services provided on the Platform.
                  <br />
                  1.7 “Order” means your order for Products sent through the
                  Platform in accordance with the Terms & Conditions of Sale.
                  <br />
                  1.8 “Password” refers to the valid password that a Customer
                  who has an account with TalipaAPP may use in conjunction with
                  the Username to access the relevant Platform and/or Services.
                  <br />
                  1.9 “Personal Data” means data, whether true or not, that can
                  be used to identify, contact or locate you. Personal Data can
                  include your name, e-mail address, billing address, shipping
                  address, phone number and credit card information. “Personal
                  Data” shall be deemed to include any data that you have
                  provided to us when placing an Order, regardless of whether
                  you have an account with us.
                  <br />
                  1.10 “Platform” means (a) both the web and mobile versions of
                  the website operated and/or owned by TalipaAPP which is
                  presently located at the following URL: www.TalipaAPP .com.ph;
                  and (b) the mobile applications made available from time to
                  time by TalipaAPP , including Android versions.
                  <br />
                  1.11 “Privacy Policy” means the privacy policy set out Here.
                  <br />
                  1.12 “Product” means a product (including any installment of
                  the product or any parts thereof) available for sale to
                  Customers on the Platform.
                  <br />
                  1.13 “Prohibited Material” means any information, graphics,
                  photographs, data and/or any other material that: (a) contains
                  any computer virus or other invasive or damaging code, program
                  or macro; (b) infringes any third-party Intellectual Property
                  or any other proprietary rights; (c) is defamatory, libelous
                  or threatening; (d) is obscene, pornographic, indecent,
                  counterfeited, fraudulent, stolen, harmful or otherwise
                  illegal under the applicable law; and/or (e) is or may be
                  construed as offensive and/or otherwise objectionable, in our
                  sole opinion.
                  <br />
                  1.14 “Services” means services, information and functions made
                  available by us at the Platform.
                  <br />
                  1.15 “Submission” is as defined in Clause 8.1 of these Terms
                  of Use.
                  <br />
                  1.16 “Terms & Conditions of Sale” means the terms and
                  conditions governing a Customer’s purchase of the Products and
                  are set out Here.
                  <br />
                  1.17 “Terms of Use” means the recitals, Clauses 1 to 12 and
                  any Schedules to these terms and conditions.
                  <br />
                  1.18 “Trademarks” means the trademarks, service marks, trade
                  names and logos used and displayed on the Platform, including
                  the TalipaAPP trademark, which is property of Hagilap.
                  <br />
                  1.19 “Username” refers to the unique login identification name
                  or code which identifies a Customer who has an account with
                  TalipaAPP .
                  <br />
                  1.20 “you” and “your” refer to the individuals over the age of
                  18 or otherwise under the supervision of a parent or legal
                  guardian. 2. Interpretation: Any reference in these Terms of
                  Use to any provision of a statute shall be construed as a
                  reference to that provision as amended, re-enacted or extended
                  at the relevant time. In the Agreement, whenever the words
                  “include”, “includes” or “including” are used, they will be
                  deemed to be followed by the words “without limitation”.
                  Unless expressly indicated otherwise, all references to a
                  number of days mean calendar days, and the words “month” or
                  “monthly” as well as all references to a number of months
                  means calendar months. Clause headings are inserted for
                  convenience only and shall not affect the interpretation of
                  these Terms of Use. In the event of a conflict or
                  inconsistency between any two or more provisions under these
                  Terms of Use, whether such provisions are contained in the
                  same or different documents, such conflict or inconsistency
                  shall be resolved in favor of TalipaAPP and the provision
                  which is more favorable to TalipaAPP shall prevail.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <p className="text-xl"> Terms & conditions of Sale</p>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="1. Definitions & Interpretation"
                key="1"
              >
                <p>
                  Unless otherwise defined, the definitions and provisions in
                  respect of interpretation set out in Schedule 1 will apply to
                  these Terms & Conditions of Sale.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="2. Purchase of Products"
                key="1"
              >
                <p>
                  2.1 Your compliance: You agree to comply with any and all the
                  guidelines, notices, operating rules and policies and
                  instructions pertaining to the purchase of Products through
                  the Platform, as well as any amendments to the aforementioned,
                  issued by TalipaAPP (whether as part of use of the Platform or
                  in relation to the purchase of Products, on behalf of Seller),
                  from time to time. TalipaAPP reserves the right to revise
                  these guidelines, notices, operating rules and policies and
                  instructions at any time and you are deemed to be aware of and
                  bound by any changes to the foregoing upon their publication
                  on the Platform.
                  <br />
                  2.2 Sellers: Products are sold by “Sellers”. TalipaAPP may be
                  a “Seller” for selected Products. “Seller” may also refer to a
                  party other than TalipaAPP (such party referred to in these
                  Terms & Conditions of Sale as a “Third Party Vendor”). Whether
                  a particular Product is listed for sale on the Platform by
                  TalipaAPP or a Third-Party Vendor may be stated on the webpage
                  listing that Product. Products sold to you by Sellers will be
                  governed by individual Customer Contracts (more details below
                  in Clause 2.6) which:
                  <br />
                  2.2.1 for Products sold by Third-Party Vendors, shall be
                  agreements entered into directly and only between the
                  Third-Party Vendor and you; and
                  <br />
                  2.2.2 for Products sold by TalipaAPP, shall be agreements
                  entered into directly and only between TalipaAPP and you.
                  <br />
                  2.3 Product description: While Seller endeavors to provide an
                  accurate description of the Products, neither TalipaAPP nor
                  Seller warrants that such description is accurate, current or
                  free from error. In the event that the Product you receive is
                  of a fundamentally different nature from the Product as
                  described on the Platform and which you have ordered, Clause 6
                  of these Terms & Conditions of Sale shall apply.
                  <br />
                  2.4 Placing your Order: You may place an Order by completing
                  the Order form on the Platform and clicking on the “Submit
                  Order button. Seller will not accept Orders placed in any
                  other manner. You shall be responsible for ensuring the
                  accuracy of the Order.
                  <br />
                  2.5 All Orders will be deemed to be irrevocable and
                  unconditional upon transmission through the Platform and
                  Seller shall be entitled (but not obliged) to process such
                  Order(s) without your further consent and without any further
                  reference or notice to you. Nevertheless, in certain
                  circumstances as stated in Clause 8, you may request to cancel
                  or amend the Order which Seller will endeavor to give effect
                  to on a commercially reasonable effort basis. However,
                  notwithstanding the foregoing, Seller is not obliged to give
                  effect to any request to cancel or amend any Order. The
                  details regarding the cancellation process and policy of
                  TalipaAPP can be accessed Here.
                  <br />
                  2.6 Seller’s reservation of rights in respect of Orders: All
                  Orders shall be subject to Seller’s acceptance in its sole
                  discretion and each Order accepted by Seller (such accepted
                  Order to be referred to as a “Customer Contract”) shall
                  constitute a separate contract. You acknowledge that unless
                  you receive a notice from TalipaAPP confirming your Order,
                  Seller shall not be party to any legally binding agreements or
                  promises made between Seller and you for the sale or other
                  dealings with the Product(s) and accordingly Seller shall not
                  be liable for any Losses which may be incurred as a result.
                  For the avoidance of doubt, Seller reserves the right to
                  decline to process or accept any Order received from or
                  through the Platform in its absolute discretion. Please note
                  that there are cases when an order cannot be processed for
                  various reasons. TalipaAPP You may be asked to provide
                  additional verifications or information, including but not
                  limited to phone number and address, before we accept the
                  order
                  <br />
                  2.7 Termination by Seller in the event of pricing error:
                  Seller reserves the right to terminate the Customer Contract,
                  in the event that a Product has been mispriced on the
                  Platform, in which event TalipaAPP shall, on behalf of Seller,
                  notify you of such cancellation. . Seller or TalipaAPP shall
                  have such right to terminate such Customer Contract whether or
                  not Products have been dispatched or are in transit and
                  whether payment has been charged to you. Upon termination of
                  the Customer Contract under this clause, the Seller shall
                  refund the payment charged to you for the Product, subject to
                  the process and timelines of payment providers and/or payment
                  partners, as provided under clause 5.6.2 below.
                  <br />
                  2.8 Product Warranty: The warranties with respect to a Product
                  (“Product Warranty”) sold under a Customer Contract shall be
                  as stated by Seller via the Platform, under the
                  “Specifications” tab in the field “Product Warranty” for the
                  relevant Product, and shall be limited by the terms and
                  conditions therein. The warranties and conditions, remedies
                  for breach of warranty or condition, or other terms stated in
                  the Product Warranty are, unless expressly prohibited by
                  applicable mandatory law, in lieu of all other terms,
                  warranties and conditions, whether expressed or implied,
                  statutory or otherwise. Except as expressly provided in such
                  Product Warranty, Seller excludes (unless expressly prohibited
                  by applicable mandatory law) all other express or implied
                  terms, warranties or conditions with respect to the Products
                  supplied.
                  <br />
                  2.9 Customer’s acknowledgement: You acknowledge and warrant
                  that you have not relied on any term, condition, warranty,
                  undertaking, inducement or representation made by or on behalf
                  of Seller which has not been stated expressly in a Customer
                  Contract or upon any descriptions or illustrations or
                  specifications contained in any document including any
                  catalogues or publicity material produced by either TalipaAPP
                  or Seller. You also acknowledge and agree that to the extent
                  allowed under Philippine law, the exclusion of warranties,
                  exclusion of liability and exclusion of remedies in these
                  Terms & Conditions of Sale and Customer Contracts allocate
                  risks between the parties and permit Seller to provide the
                  Products at lower fees or prices than Seller otherwise could
                  and you agree that such exclusions on liability are
                  reasonable. 2.10 No representations or warranties: Without
                  prejudice to the generality of the foregoing Clause 2.9 and to
                  the extent allowed under Philippine law:
                  <br />
                  2.10.1 no condition is made or to be implied nor is any
                  warranty given or to be implied as to the life or wear of the
                  Products supplied or that they will be suitable for any
                  particular purpose or use under any specific conditions,
                  notwithstanding that such purpose or conditions may be known
                  or made known to Seller;
                  <br />
                  2.10.2 any actions arising from the breach of any warranty or
                  representation, or any right to damages, whether express or
                  implied, shall be extinguished if an action is not brought
                  against TalipaAPP within six months from the date of delivery,
                  or from the scheduled delivery of the Product.
                  <br />
                  2.10.3 TalipaAPP shall not be liable for any indirect,
                  incidental, special, consequential or exemplary damages,
                  including, but not limited to, damages for loss of profits,
                  goodwill, intangible losses, and any other type of damages
                  caused by any breach of a Third Party Vendor’s implied or
                  express warranty on the Products;
                  <br />
                  2.10.4 for products shipped internationally, please note that
                  any manufacturer warranty may not be valid; manufacturer
                  service options may not be available; product manuals,
                  instructions and safety warnings may not be in destination
                  country languages; the products (and accompanying materials)
                  may not be designed in accordance with destination country
                  standards, specifications, and labelling requirements;
                  <br />
                  2.10.5 Seller is not liable for any Losses suffered by any
                  third party directly or indirectly caused by repairs or
                  remedial work carried out without TalipaAPP prior written
                  approval and the Customer shall indemnify Seller against all
                  Losses arising out of such claims;
                  <br />
                  2.10.6 Seller shall be under no liability under the above
                  warranty (or any other warranty, condition or guarantee) if
                  the total price for the Products has not been paid in cleared
                  funds by the due date for payment; and
                  <br />
                  2.10.7 To the extent allowed under Philippine law, Seller
                  shall be under no liability whatsoever in respect of any
                  defect in the Products arising after the expiry of the
                  applicable Product Warranty, if any. 2.11 Intellectual
                  Property:
                  <br />
                  2.11.1 Unless the prior written consent of TalipaAPP has been
                  obtained, the Customer shall not remove or alter the trade
                  marks, logos, copyright notices, serial numbers, labels, tags
                  or other identifying marks, symbols or legends affixed to any
                  Products.
                  <br />
                  2.11.2 Where software applications, drivers or other computer
                  programs and/or all other design details, technical handbooks
                  or manuals, drawing or other data (all collectively referred
                  to as “Product Materials”) are supplied to the Customer by
                  Seller in connection with the Order, the use and retention of
                  the Product Materials are subject to the terms and conditions
                  of license or use (such as end-user licenses, restrictions or
                  conditions of use) as may be prescribed by Seller or its
                  licensors and must not be used other than strictly in
                  accordance with such terms and conditions.
                  <br />
                  2.11.3 The Customer agrees and acknowledges that the Product
                  Materials shall remain the property of Seller or its
                  licensors. The Customer further agrees that any and all
                  Intellectual Property embodied in or relating to the Product
                  Materials shall remain the sole and exclusive property of
                  Seller or its licensors. Unless otherwise expressly provided
                  in the Order or the prior written consent of TalipaAPP has
                  been obtained, the Customer undertakes to return the Product
                  Materials and/or any copies thereof upon TalipaAPP request.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="3. Delivery of Products"
                key="1"
              >
                <p>
                  3.1 Address: Delivery of the Products shall be made to the
                  address you specify in your Order either by Seller or by
                  (TalipaAPP or its agents) on behalf of Seller.
                  <br />
                  3.2 Shipping & packing charges: Shipping and packing charges
                  shall be as set out in the Order.
                  <br />
                  3.3 Tracking: You may track the status of the delivery at the
                  “Order Tracking” page of the Platform.
                  <br />
                  3.4 Delivery timeframe: You acknowledge that delivery of the
                  Products is subject to availability of the Products. Seller
                  will make every reasonable effort to deliver the Product to
                  you within the delivery timeframe stated on the relevant page
                  on which the Product is listed, but you acknowledge that while
                  stock information on the Platform is updated regularly, it is
                  possible that in some instances a Product may become
                  unavailable between updates. All delivery timeframes given are
                  estimates only and delays can occur. If the delivery of your
                  Product is delayed Seller will inform you accordingly via
                  e-mail and your Product will be dispatched as soon as it
                  becomes available to Seller. The time for delivery shall not
                  be of the essence, and Seller (nor any of its agents) shall
                  not be liable for any delay in delivery whatsoever caused.
                  <br />
                  3.5 Deemed receipt: In the event you do not receive the
                  Product by the projected delivery date and provided that you
                  inform TalipaAPP within 3 days immediately from such projected
                  delivery date, Seller will try, to the best of Seller’s
                  ability, to locate and deliver the Product. If TalipaAPP does
                  not hear from you within 3 days from such projected delivery
                  date, you shall be deemed to have received the Product subject
                  to your rights under Philippine law.
                  <br />
                  3.6 Customer’s failure to take delivery: If the Customer fails
                  to take delivery of the Products (otherwise than by reason of
                  any cause beyond the Customer's reasonable control or by
                  reason of Seller’s fault) then without prejudice to any other
                  right or remedy available to Seller, Seller may terminate the
                  Customer Contract.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="4. Prices of Products"
                key="1"
              >
                <p>
                  4.1 Listing Price: The price of the Products payable by a
                  Customer shall be the Listing Price at the time at which the
                  Order placed by the Customer is transmitted to Seller (through
                  the Platform). TalipaAPP and/or Seller is determined to
                  provide the most accurate pricing information on the platform
                  to its customers. However, errors may still occur, such as
                  cases when the price of an item is not displayed correctly on
                  the website. As such, TalipaAPP and/or Seller reserves the
                  right to refuse or cancel any order. In the event that an item
                  is mispriced, TalipaAPP may, at its own discretion, either
                  contact you for instructions or cancel your order and notify
                  you of such cancellation. TalipaAPP shall have the right to
                  refuse or cancel any such orders whether or not the order has
                  been confirmed and your credit card or bank account charged.
                  <br />
                  4.2 Taxes: All Listing Prices are subject to taxes, unless
                  otherwise stated. Seller reserves the right to amend the
                  Listing Prices at any time without giving any reason or prior
                  notice.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel className="text-xl shadow-sm" header="5. Payment" key="1">
                <p>
                  5.1 General: You may pay for the Product using any of the
                  payment methods prescribed by TalipaAPP from time to time.
                  When you place an Order, actual payment will be only charged
                  upon Seller’s acceptance of your Order and formation of a
                  Customer Contract. All payments shall be made to TalipaAPP,
                  either accepting payment in its own right or as Seller’s agent
                  (where Seller is a Third-Party Vendor). You acknowledge that
                  TalipaAPP is entitled to collect payments from you on behalf
                  of Third Party Vendors.
                  <br />
                  5.2 Additional terms: The payment methods may be subject to
                  additional terms as prescribed by TalipaAPP from time to time.
                  <br />
                  5.3 Payment methods: You agree that you are subject to the
                  applicable user agreement of your payment method. You may not
                  claim against Seller or any of its agents (which may include
                  TalipaAPP), for any failure, disruption or error in connection
                  with your chosen payment method. TalipaAPP reserves the right
                  at any time to modify or discontinue, temporarily or
                  permanently, any payment method without notice to you or
                  giving any reason.
                  <br />
                  5.4 Invoicing: Seller may invoice you upon the due date of any
                  payment under a Customer Contract.
                  <br />
                  5.5 Failure to pay: If the Customer fails to make any payment
                  pursuant to the terms and conditions of the payment method
                  elected or payment is cancelled for any reason whatsoever,
                  then without prejudice to any other right or remedy available
                  to Seller, Seller shall be entitled to cancel the Customer
                  Contract or suspend delivery of the Products until payment is
                  made in full.
                  <br />
                  5.6 Refund of Payment: 5.6.1 All refunds shall be made via the
                  original payment mechanism and to the person who made the
                  original payment, except for Cash on Delivery, where refunds
                  may be made via bank transfer or store credit into the
                  individual’s bank account provided that complete and accurate
                  bank account details are provided to us.
                  <br />
                  5.6.2 We offer no guarantee of any nature for the timeliness
                  of the refunds reaching your account. The processing of
                  payment may take time and it is subject to the respective
                  banks and/or payment provider internal processing timeline.
                  <br />
                  5.6.3 All costs associated with the refund process imposed by
                  the processing bank and/or payment provider shall be borne by
                  us.
                  <br />
                  5.6.4 All refunds are conditional upon our acceptance of a
                  valid return of the Product. 5.6.5 We reserve the right to
                  modify the mechanism of processing refunds at any time without
                  notice. 5.6.6. The guidelines regarding the refunds process of
                  TalipaAPP can be accessed Here.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="6. Returns/Repairs/Replacements"
                key="1"
              >
                <p>
                  6.1 Return Policy: All returns must be done in accordance with
                  the instructions set out in the Return Policy Here. Seller is
                  not obliged to agree to any return unless all such
                  instructions are followed to Seller’s and TalipaAPP
                  satisfaction. Should Seller agree to the return, Seller will
                  deliver the replacement Product to your specified address.
                  <br />
                  6.2 Permitted returns: Subject to Clause 6.1, within 14 days
                  and/or 7 days, depending on the product, from the date of
                  delivery of the Product, you may return a Product when you:
                  6.2.1 receive a product that is fundamentally different in
                  nature from the Product specified in the Customer Contract;
                  6.2.2 receive a faulty or damaged Product;
                  <br />
                  6.2.3 receive a product that is not as advertised on the
                  platform;
                  <br />
                  6.2.4 wrong item is delivered; 6.2.5 receive a product that
                  has missing parts/items; or 6.2.6 receive a product that does
                  not fit (for fashion items).
                  <br />
                  6.3 Repair, replacement or price reduction: As an alternative
                  to returning faulty or damaged Products under Clause 6.2, a
                  Customer may request for a repair or replacement of such
                  Products. Such request shall be irrevocable upon notification
                  of the request to TalipaAPP and the Customer may not later
                  elect for a return under Clause 6.2. Where the Products have
                  not been repaired or replaced within a reasonable time,
                  TalipaAPP may, at its sole discretion, grant to the Customer a
                  reduction of the price in proportion to the reduced value of
                  the Products, provided that under no circumstance shall such
                  reduction exceed 15 per cent. (15%) of the price of the
                  affected Products. Upon repair, replacement or price reduction
                  being made as aforesaid, the Customer shall have no further
                  claim against Seller.
                  <br />
                  6.4 Replacement Products: When TalipaAPP has provided
                  replacement Products or given the Customer a refund, the
                  non-conforming Products or parts thereof shall become Seller’s
                  property and upon request such Products or parts thereof
                  should be shipped back to Seller.
                  <br />
                  6.5 Risk of damage or loss: Risk of damage to or loss of the
                  Products shall pass to the Customer at the time of delivery,
                  or if the Customer wrongfully fails to take delivery of the
                  Products, the time when Seller (via TalipaAPP or TalipaAPP
                  agents) has tendered delivery of the Products.
                  <br />
                  6.6 In cases where the customer refuses to take possession of
                  the product without sufficient cause or justification, or
                  returns the item without sufficient cause or justification, as
                  provided under Clause 6, TalipaAPP a will safely keep the item
                  for a period of fifteen (15) days, reckoned from the date
                  TalipaAPP receives the product from customer. After the lapse
                  of such period, the product or item is deemed abandoned by
                  customer, and TalipaAPP or Seller may dispose of the product
                  or item. Notwithstanding the foregoing, TalipaAPP will use its
                  best efforts to return the product to the Customer within the
                  time frame provided.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="7. Questions and complaints"
                key="1"
              >
                <p>
                  If you have any questions or complaints, please contact
                  TalipaAPP using the “Contact Us” page on the Platform.
                  TalipaAPP will liaise with Sellers on your questions and
                  complaints.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="8. Termination"
                key="1"
              >
                <p>
                  8.1 Cancellation by you: You may cancel the Customer Contract
                  before Seller dispatches the Products under such Customer
                  Contract by written notice to TalipaAPP at ”Contact Us” page
                  on the Platform, subject to Clause
                  <br />
                  2.5. If the Products have already been dispatched, you may not
                  cancel the Customer Contract but may only return the Products
                  in accordance with Clause 6.
                  <br />
                  8.2 Cancellation by Seller: Without prejudice to any other
                  right of termination elsewhere in these Terms & Conditions of
                  Sale, Seller, or TalipaAPP acting on Seller’s behalf, may stop
                  any Products in transit, suspend further deliveries to the
                  Customer and/or terminate the Customer Contract with immediate
                  effect by written notice to the Customer on or at any time
                  after the occurrence of any of the following events:
                  <br />
                  8.2.1 the Products under the Customer Contract being
                  unavailable for any reason;
                  <br />
                  8.2.2 the Customer being in breach of an obligation under the
                  Customer Contract; 8.2.3 the Customer passing a resolution for
                  its winding up or a court of competent jurisdiction making an
                  order for the Customer’s winding up or dissolution;
                  <br />
                  8.2.4 the making of an administration order in relation to the
                  Customer or the appointment of a receiver over or an
                  encumbrancer taking possession of or selling any of the
                  Customer’s assets; or 8.2.5 the Customer making an arrangement
                  or composition with its creditors generally or applying to a
                  Court of competent jurisdiction for protection from its
                  creditors.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="9. Risk and property of the Goods"
                key="1"
              >
                <p>
                  9.1 Risk of damage to or loss of the Goods shall pass to the
                  Customer at the time of delivery or if the Customer wrongfully
                  fails to take delivery of the Goods, the time when has
                  tendered delivery of the Goods.
                  <br />
                  9.2 Notwithstanding delivery and the passing of risk in the
                  Goods or any other provision of these Conditions the property
                  in the Goods shall not pass to the Customer until TalipaAPP
                  has received in cash or cleared funds payment in full of the
                  price of the Goods and all other goods agreed to be sold by
                  TalipaAPP to the Customer for which payment is then due. For
                  cross-border transactions or for products shipped from abroad
                  or overseas, the contract of sale is deemed to have been
                  entered into or perfected in the place where the Seller is
                  located.
                  <br />
                  9.3 Until such time as the property in the Goods passes to the
                  Customer, the Customer shall hold the Goods as TalipaAPP
                  fiduciary agent and bailee and shall keep the Goods separate
                  from those of the Customer.
                  <br />
                  9.4 The Customer agrees with TalipaAPP that the Customer shall
                  immediately notify TalipaAPP of any matter from time-to-time
                  affecting TalipaAPP title to the Goods and the Customer shall
                  provide TalipaAPP with any in-formation relating to the Goods
                  as TalipaAPP may require from time to time.
                  <br />
                  9.5 Until such time as the property in the Goods passes to the
                  Customer (and provided the Goods are still in existence and
                  have not been resold) TalipaAPP shall be entitled at any time
                  to demand the Customer to deliver up the Goods to TalipaAPP
                  and in the event of non-compliance. TalipaAPP reserves its
                  right to take legal action against the Customer for the
                  delivery up the Goods and also reserves its right to seek
                  damages and all other costs including but not limited to legal
                  fees against the Customer.
                  <br />
                  9.6 The Customer shall not be entitled to pledge or in any way
                  charge by way of security for any indebtedness any of the
                  Goods which remain the property of TalipaAPP but if the
                  Customer does so all moneys owing by the Customer to TalipaAPP
                  shall (without prejudice to any other right or remedy of
                  TalipaAPP) forthwith become due and payable.
                  <br />
                  9.7 If the provisions in this Condition 9 are not effective
                  according to the law of the country in which the Goods are
                  located, the legal concept closest in nature to retention of
                  title in that country shall be deemed to apply mutatis
                  mutandis to give effect to the underlying intent expressed in
                  this condition, and the Customer shall take all steps
                  necessary to give effect to the same.
                  <br />
                  9.8 The Customer shall indemnify TalipaAPP, all of its
                  respective officers, employees, directors, agents and
                  contractors against all loss damages costs expenses and legal
                  fees incurred by the Customer in connection with the assertion
                  and enforcement of TalipaAPP rights under this condition.sss
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="10. Limitation of liability"
                key="1"
              >
                <p>
                  10.1 Sole remedies of customer: The remedies set out in Clause
                  6 are the Customer’s sole and exclusive remedies for
                  non-conformity of or defects in the products.
                  <br />
                  10.2 Maximum Liability: Notwithstanding any other provision of
                  these terms & conditions of sale, Seller’s maximum cumulative
                  liability to you or to any other party for all losses under,
                  arising out of or relating to the sale of products under each
                  customer contract, will not exceed the sums that you have paid
                  to Seller under such customer contract.
                  <br />
                  10.3 Exclusion of liability: TalipaAPP indemnitees shall not
                  be liable to you for any losses whatsoever or howsoever caused
                  (regardless of the form of action) arising directly or
                  indirectly in connection with: (i) amounts due from other
                  users of the platform in connection with the purchase of any
                  product; (ii) the sale of the products to you, or its use or
                  resale by you; and (iii) any defect arising from fair wear and
                  tear, willful damage, misuse, negligence, accident, abnormal
                  storage and or working conditions, alteration or modification
                  of the products or failure to comply with Seller’s
                  instructions on the use of the products (whether oral or
                  written).
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel className="text-xl shadow-sm" header="11. General" key="1">
                <p>
                  11.1 References to “TalipaAPP”: References to “TalipaAPP” in
                  these Terms and Conditions of Sale apply both to TalipaAPP
                  actions on its own behalf as Seller and/or as the operator of
                  the Platform or as the agent of Third-Party Vendors as Sellers
                  in respect of each and every Customer Contract.
                  <br />
                  11.2 Right to subcontract: Third Party Vendors or Sellers
                  shall be entitled to delegate and/or subcontract any rights or
                  obligations under these Terms & Conditions of Sale to
                  TalipaAPP or any of TalipaAPP ’s designated service providers,
                  subcontractors and/or agents.
                  <br />
                  11.3 Cumulative rights and remedies: Unless otherwise provided
                  under these Terms & Conditions of Sale, the provisions of
                  these Terms & Conditions of Sale and Seller’s rights and
                  remedies under these Terms & Conditions of Sale are cumulative
                  and are without prejudice and in addition to any rights or
                  remedies Seller may have in law or in equity, and no exercise
                  by Seller of any one right or remedy under these Terms &
                  Conditions of Sale, or at law or in equity, shall (save to the
                  extent, if any, provided expressly in these Terms & Conditions
                  of Sale or at law or in equity) operate so as to hinder or
                  prevent Seller’s exercise of any other such right or remedy as
                  at law or in equity.
                  <br />
                  11.4 Warranties: The implied warranty under the New Civil Code
                  of the Philippines against hidden defects and the rights of a
                  consumer under Title III, Chapter III of the Consumer Act of
                  the Philippines shall apply.
                  <br />
                  11.5 No waiver: Seller’s failure to enforce these Terms &
                  Conditions of Sale shall not constitute a waiver of these
                  terms, and such failure shall not affect the right later to
                  enforce these Terms & Conditions of Sale. Seller would still
                  be entitled to use its rights and remedies in any other
                  situation where you breach these Terms & Conditions of Sale.
                  <br />
                  11.6 Severability: If at any time any provision of these Terms
                  & Conditions of Sale shall be or shall become illegal, invalid
                  or unenforceable in any respect, the legality, validity and
                  enforceability of the remaining provisions of this Agreement
                  shall not be affected or impaired thereby, and shall continue
                  in force as if such illegal, invalid or unenforceable
                  provision was severed from these Terms & Conditions of Sale.
                  <br />
                  11.7 Rights of third parties: A person or entity who is not a
                  party to these Terms & Conditions of Sale shall have no right
                  under any legislation in any jurisdiction to enforce any term
                  of these Terms & Conditions of Sale, regardless of whether
                  such person or entity has been identified by name, as a member
                  of a class or as answering a particular description. For the
                  avoidance of doubt, nothing in this Clause shall affect the
                  rights of any permitted assignee or transferee of these Terms
                  & Conditions of Sale.
                  <br />
                  11.8 Governing law: These Terms & Conditions of Sale shall be
                  governed by, and construed in accordance with the laws of
                  Philippines. 11.9 If any dispute arises in connection with
                  these Terms of Use, the Parties shall attempt, in fair dealing
                  and in good faith, to settle such dispute. If the Parties are
                  not able to reach an amicable settlement pursuant to the
                  preceding section, they shall try to agree on an appropriate
                  ADR proceeding (for example mediation, conciliation, expert
                  determination, dispute board, adjudication). If they do not
                  reach agreement on the appropriate ADR proceeding within 14
                  days after failure of the settlement negotiations or if the
                  dispute is not settled through an ADR proceeding within a
                  period of two months after initiation of the ADR preceding,
                  each Party may initiate an arbitration proceeding pursuant to
                  the following paragraph. All disputes arising out of or in
                  connection with the present contract, including any question
                  regarding its existence, validity or termination, shall be
                  finally settled in accordance with the rules of the Philippine
                  Dispute Resolution Center, Inc. (“PDRCI”) for the time being
                  in force, which rules are deemed incorporated by reference
                  into this clause. The arbitral tribunal shall consist of three
                  arbitrators to be chosen in accordance with the rules of the
                  PDRCI. The seat of arbitration shall be the Philippines. The
                  procedural law of this seat applicable to commercial
                  arbitration proceedings shall apply where the Rules are
                  silent. The language to be used in the arbitration proceedings
                  shall be English.
                  <br />
                  11.10 Injunctive relief: Seller may seek immediate injunctive
                  relief if Seller makes a good faith determination that a
                  breach or non-performance is such that a temporary restraining
                  order or other immediate injunctive relief is the only
                  appropriate or adequate remedy.
                  <br />
                  11.11 Amendments: Seller may by notice issued jointly with
                  TalipaAPP through the Platform or by such other method of
                  notification as Seller may designate solely through TalipaAPP
                  (which may include notification by way of e-mail), vary the
                  terms and conditions of these Terms & Conditions of Sale, such
                  variation to take effect on the date Seller specifies through
                  the above means. If you use the Platform or the Services after
                  such date, you are deemed to have accepted such variation. If
                  you do not accept the variation, you must stop access or using
                  the Platform and the Services and terminate these Terms &
                  Conditions of Sale. Seller’s right to vary these Terms &
                  Conditions of Sale in the manner aforesaid will be exercised
                  with the joint involvement of TalipaAPP (either via the Portal
                  or such other means as TalipaAPP prescribes) and subject to
                  the foregoing, may be exercised without the consent of any
                  person or entity who is not a party to these Terms &
                  Conditions of Sale. The version of Terms & Conditions of Sale
                  applicable to any particular Order is the latest version in
                  force.
                  <br />
                  11.12 Correction of errors: Any typographical, clerical or
                  other error or omission in any acceptance, invoice or other
                  document on Seller’s part shall be subject to correction
                  without any liability on Seller’s part.
                  <br />
                  11.13 Currency: Money references under these Terms &
                  Conditions of Sale shall be in Philippines Pesos.
                  <br />
                  11.14 Language: In the event that these Terms & Conditions of
                  Sale is executed or translated in any language other than
                  English (“Foreign Language Version”), the English language
                  version of these Terms & Conditions of Sale shall govern and
                  shall take precedence over the Foreign Language Version. 11.15
                  Entire agreement: These Terms & Conditions of Sale shall
                  constitute the entire agreement between you and Seller
                  relating to the subject matter hereof and supersedes and
                  replaces in full all prior understandings, communications and
                  agreements with respect to the subject matter hereof. 11.16
                  Binding and conclusive: You acknowledge and agree that any
                  records (including records of any telephone conversations
                  relating to the Services, if any) maintained by Seller or its
                  service providers relating to or in connection with the
                  Platform and Services shall be binding and conclusive on you
                  for all purposes whatsoever and shall be conclusive evidence
                  of any information and/or data transmitted between Seller and
                  you. You hereby agree that all such records are admissible in
                  evidence and that you shall not challenge or dispute the
                  admissibility, reliability, accuracy or the authenticity of
                  such records merely on the basis that such records are in
                  electronic form or are the output of a computer system, and
                  you hereby waive any of your rights, if any, to so object.
                  <br />
                  11.17 Subcontracting and delegation: TalipaAPP reserves the
                  right to delegate or subcontract the performance of any of its
                  functions in connection with the performance of its
                  obligations under these Terms & Conditions of Sale and
                  reserves the right to use any service providers,
                  subcontractors and/or agents on such terms as TalipaAPP deems
                  appropriate.
                  <br />
                  11.18 Assignment: You may not assign your rights under these
                  Terms & Conditions of Sale without Seller’s prior written
                  consent. Seller may assign its rights under these Terms &
                  Conditions of Sale to any third party.
                  <br />
                  11.19 Force Majeure: Neither TalipaAPP nor Seller shall be
                  liable for non-performance, error, interruption or delay in
                  the performance of its obligations under these Terms &
                  Conditions of Sale (or any part thereof) or for any
                  inaccuracy, unreliability or unsuitability of the Platform's
                  and/or Services’ contents if this is due, in whole or in part,
                  directly or indirectly to an event or failure which is beyond
                  TalipaAPP or Seller’s reasonable control.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <p className="text-xl">Schedule 1</p>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="Definitions and Interpretation"
                key="1"
              >
                <p>
                  1. Definitions. Unless the context otherwise requires, the
                  following expressions shall have the following meanings in
                  these Terms of Use:
                  <br />
                  1.1 “Business Day” means a day (excluding Saturdays and
                  Sundays) on which banks generally are open for business in
                  Philippines.
                  <br />
                  1.2 “Customer” means an authorized user of the Platform and/or
                  the Services.
                  <br />
                  1.3 “Customer Contract” shall be as defined in Clause 2.6.
                  <br />
                  1.4 “Intellectual Property” means all copyright, patents,
                  utility innovations, trademarks and service marks,
                  geographical indications, domain names, layout design rights,
                  registered designs, design rights, database rights, trade or
                  business names, rights protecting trade secrets and
                  confidential information, rights protecting goodwill and
                  reputation, and all other similar or corresponding proprietary
                  rights and all applications for the same, whether presently
                  existing or created in the future, anywhere in the world,
                  whether registered or not, and all benefits, privileges,
                  rights to sue, recover damages and obtain relief or other
                  remedies for any past, current or future infringement,
                  misappropriation or violation of any of the foregoing rights.
                  <br />
                  1.5 “TalipaAPP Indemnitees” means TalipaAPP , its affiliates
                  and all of its respective officers, employees, directors,
                  agents, contractors and assigns.
                  <br />
                  1.6 “Listing Price” means the price of Products listed for
                  sale to Customers, as stated on the Platform.
                  <br />
                  1.7 “Losses” means all losses, settlement sums, costs
                  (including legal fees and expenses on a solicitor-client
                  basis), charges, expenses, actions, proceedings, claims,
                  demands and other liabilities, whether foreseeable or not.
                  <br />
                  1.8 “Order” means your order for Products sent through the
                  Platform in accordance with the Terms & Conditions of Sale.
                  <br />
                  1.9 “Password” refers to the valid password that a Customer
                  who has an account with TalipaAPP may use in conjunction with
                  the Username to access the relevant Platform and/or Services.
                  <br />
                  1.10 “Personal Data” means data, whether true or not, that can
                  be used to identify, contact or locate you. Personal Data can
                  include your name, e-mail address, billing address, shipping
                  address, phone number and credit card information.
                  <br />
                  1.11 “Platform” means (a) both the web and mobile versions of
                  the website operated and/or owned by TalipaAPP which is
                  presently located at the following URL: www.TalipaAPP .com.ph;
                  and (b) the mobile applications made available from time to
                  time by TalipaAPP , including the Android versions.
                  <br />
                  1.12 “Product” means a product (including any installment of
                  the product or any parts thereof) available for sale to
                  Customers on the Platform.
                  <br />
                  1.14 “Product Warranty” means the warranty provided for a
                  product sold on the platform.
                  <br />
                  1.15 “Return Policy” means the return policy set out Here.
                  <br />
                  1.16 “Third Party Vendor” means a seller which, with TalipaAPP
                  ’s permission, uses the Platform and/or Services to sell
                  Products to Customers, and excludes TalipaAPP .
                  <br />
                  1.17 “Seller” means a seller of Products as described in
                  Clause 2.3, and includes a Third Party Vendor.
                  <br />
                  1.18 “Services” means services, information and functions made
                  available by Seller at the Platform.
                  <br />
                  1.19 “Terms & Conditions of Sale” means Clauses 1 to 11 and
                  any Schedules to these terms and conditions.
                  <br />
                  1.20 “Terms of Use” means the Terms And Conditions governing
                  the Customer’s use of the Platform and/or Services.
                  <br />
                  1.21 “Trademarks” means the trademarks, service marks, trade
                  names and logos used and displayed on the Platform, including
                  the TalipaAPP trademark, which is property of Hagilap. 1.22
                  “Username” refers to the unique login identification name or
                  code which identifies a Customer who has an account with
                  TalipaAPP .
                  <br />
                  1.23 “you” and “your” refer to the individuals over the age of
                  18 or otherwise under the supervision of a parent or legal
                  guardian. 2. Interpretation: Any reference in these Terms &
                  Conditions of Sale to any provision of a statute shall be
                  construed as a reference to that provision as amended,
                  re-enacted or extended at the relevant time. In these Terms &
                  Conditions of Sale, whenever the words “include”, “includes”
                  or “including” are used, they will be deemed to be followed by
                  the words “without limitation”. Unless expressly indicated
                  otherwise, all references to a number of days mean calendar
                  days, and the words “month” or “monthly” as well as all
                  references to a number of months means calendar months. Clause
                  headings are inserted for convenience only and shall not
                  affect the interpretation of these Terms & Conditions of Sale.
                  In the event of a conflict or inconsistency between any two or
                  more provisions under these Terms & Conditions of Sale,
                  whether such provisions are contained in the same or different
                  documents, such conflict or inconsistency shall be resolved in
                  favor of TalipaAPP and the provision which is more favorable
                  to TalipaAPP shall prevail.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse>
              <Panel
                className="text-xl shadow-sm"
                header="TALIPAAPP  PAYMENT PROTECTION POLICY"
                key="1"
              >
                <p>
                  This TalipaAPP Payment Protection Policy (“Policy”)
                  supplements the TalipaAPP Terms of Use with regard to your
                  TalipaAPP Account. If any matter is not provided for in this
                  Policy but is provided for in the TalipaAPP Terms, the
                  provisions of the TalipaAPP Terms shall prevail. If there is a
                  conflict between the provisions of this Policy and the
                  provisions of TalipaAPP Terms, the provisions of this Policy
                  shall prevail to the extent of such conflict. Unless otherwise
                  expressly provided herein, the capitalized terms shall have
                  the same meanings as set forth in the TalipaAPP Terms. This
                  Policy is a legal agreement between you and TalipaAPP
                  E-Services Philippines, Inc. By using your TalipaAPP Account,
                  you agree to be bound by the terms of this Policy.
                  <br />
                  1.1 Protection against Unauthorized Transactions. TalipaAPP
                  will provide you with compensation for Unauthorized
                  Transactions (defined below), provided that you comply with
                  the procedures set out within the Policy. An "Unauthorized
                  Transaction" occurs when, because of a fraudulent take-over of
                  the TalipaAPP Account: Notwithstanding the foregoing, you have
                  an obligation to ensure the safety and security of your
                  TalipaAPP Account. If you authorize someone to access your
                  account by providing them with your login information or
                  otherwise, and they conduct transactions without your
                  knowledge or permission, you shall be responsible for all
                  consequences arising from such use.
                  <br />
                  1.2 Notify TalipaAPP a. You should immediately notify
                  TalipaAPP if you believe there has been an Unauthorized
                  Transaction or unauthorized access to your TalipaAPP Account.
                  To be eligible for compensation under this Policy, you must
                  notify us within 60 days from the date an Unauthorized
                  Transaction first appears in your account. b. You should
                  regularly log into your account and review your order history
                  to ensure that there has not been an Unauthorized Transaction.
                  TalipaAPP will send you an e-mail through the-mail address you
                  have provided to notify you of every transaction made in your
                  account. You should check these transaction confirmation
                  messages to ensure that each transaction has been authorized
                  by you and the information in your account is accurate. c. If
                  an Unauthorized Transaction appears in your account, please
                  contact TalipaAPP Customer Service through the contact us page
                  (https://www.TalipaAPP.com.contact). You will need to provide
                  a complete set of information and/or documentation, in
                  accordance with the requirements set out on that page and as
                  requested by us, in order for the investigation to begin.
                  TalipaAPP will only initiate an investigation upon receipt of
                  all information/documents.
                  <br />
                  1.3 Actions taken by TalipaAPP upon receipt of notification a.
                  Once you notify us and provide us with a complete set of the
                  necessary information and/or documents that we request, we
                  will do the following: (a) We will conduct an investigation
                  and determine whether there has been an Unauthorized
                  Transaction. (b) TalipaAPP will complete the investigation
                  within 2 working days from the date where all necessary
                  information and/or documents were received by us. (c) We will
                  inform you of our decision once we complete the investigation.
                  <br />
                  1.4 Scope of protection a. The following types of transactions
                  are excluded from the scope of coverage of our TalipaAPP
                  Payment Protection Policy: (a) Disputes on genuine
                  transactions, such as non-receipt of the item you have
                  purchased; (b) Where we determine that there has been fraud or
                  negligence on behalf of the Customer. For example, if we
                  determine that you have willfully provided your account
                  credentials to third parties, have acted fraudulently or have
                  failed to take all steps and precaution in protecting your
                  account; (c) Where we determine that you have a proven track
                  record of engaging in and/or abetting fraudulent activity
                  and/or disputes of unauthorized transactions; (d) Where the
                  Unauthorized Transaction took place under unforeseeable
                  circumstances, including but not limited to natural disasters,
                  outbreak of war, terrorist incidents, civil unrest, which are
                  beyond TalipaAPP ’s reasonable control; (e) Where the
                  Unauthorized Transaction took place as a result of any
                  terminal or system (including TalipaAPP and Alipay) being
                  impacted by, including and not limited to, hacking attempts,
                  bank system upgrades/malfunctions, telco downtime etc., which
                  you were aware before the Unauthorized Transaction took place;
                  (f) ‘Compromises arising from 3rd party partners’: The
                  Unauthorized Payment was the result of a compromise by a 3rd
                  party partner such as a partner bank; or (g) Any regulatory or
                  legal restriction that prevents the reimbursement to be made
                  to the Customer.
                </p>
                <div className="flex">
                  <div className="flex grow justify-center">
                    <Button type="text">
                      <EditOutlined />
                    </Button>
                    <Button type="text">
                      <DeleteOutlined />
                    </Button>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </Space>
        </div>
      </div>
    </div>
  );
}
