export default function Terms() {
  const items = [
    "1. YOUR ACCOUNT",
    "2. ACCOUNT TERMINATION",
    "3. LIMITED LICENSE",
    "4. VIRTUAL GOODS, GAME CURRENCY AND PURCHASES",
    "5. FEES & TAXES",
    "6. UNSOLICITED IDEA SUBMISSION POLICY",
    "7. USER RULES",
    "8. USER GENERATED CONTENT",
    "9. MONITORING & ANTI-CHEAT",
    "10. UPDATES AND MODIFICATIONS",
    "11. LINKS",
    "12. NOTICE AND PROCEDURE FOR CLAIMS OF COPYRIGHT",
    "13. WARRANTY DISCLAIMER",
    "14. INDEMNIFICATION",
    "15. LIMITATION OF LIABILITY",
    "16. GOVERNING LAW",
    "17. DISPUTE RESOLUTION",
    "18. ADDITIONAL TERMS APPLICABLE TO RIOT SERVICES",
    "19. RIOT LEGAL ENTITIES",
    "20. MISCELLANEOUS",
  ];
  return (
    <div>
      <div className="flex">
        <div className="flex grow justify-center bg-primary p-2">
          <img src="/assets/images/terms.png" />
        </div>
      </div>
      <div className="container px-80 pt-10 text-sm">
        <p className="text-xl font-bold">Last Modified: April 30, 2021</p>
        <p>Greeting to you Farmer,</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          pariatur corrupti nulla nisi fugit omnis quis porro amet, ducimus
          quae, aperiam numquam excepturi repudiandae quasi perspiciatis sequi
          exercitationem doloribus.lore Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis magni tenetur laborum ducimus numquam optio,
          cum voluptas enim earum rerum quis dicta molestias recusandae quisquam
          sunt nulla a illo ipsa!
        </p>

        <li className="py-5">
          Dispute Resolution. If you reside in the United States, please read
          the binding arbitration clause and class action waiver in Part A of
          Section 17. It affects how disputes between us are resolved.
        </li>
        <li className="py-5">
          Dispute Resolution. If you reside in the United States, please read
          the binding arbitration clause and class action waiver in Part A of
          Section 17. It affects how disputes between us are resolved.
        </li>
        <li className="py-5">
          Dispute Resolution. If you reside in the United States, please read
          the binding arbitration clause and class action waiver in Part A of
          Section 17. It affects how disputes between us are resolved.
        </li>
        <li className="py-5">
          Dispute Resolution. If you reside in the United States, please read
          the binding arbitration clause and class action waiver in Part A of
          Section 17. It affects how disputes between us are resolved.
        </li>
        <li className="py-5">
          Dispute Resolution. If you reside in the United States, please read
          the binding arbitration clause and class action waiver in Part A of
          Section 17. It affects how disputes between us are resolved.
        </li>
        <div>
          <p className="text-xl font-bold">Attention Farmers And Customer!</p>
          <p>
            We provide game rating info on our website about age
            appropriateness. We also encourage you to supervise your child’s
            online activities, review the content they are accessing and, as
            appropriate, monitor their social interactions. For more info on
            game ratings and content descriptors, please check your local
            ratings system.
          </p>
        </div>
        <div>
          <p className="text-xl font-bold">TABLE OF CONTENTS</p>
          <ol>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
