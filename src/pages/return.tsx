import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Navbar, Footer } from "../components";

export default function Return({ location }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "blue_rectangle.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <main className="w-full h-screen flex flex-col font-poppins">
      <title>MoMo's Refund policy</title>

      <Navbar path={location.pathname} />

      <div className="flex flex-col px-10 lg:px-40 mt-6 mb-20 text-justify">
        <div className="flex flex-col">
          <div className="text-2xl lg:text-4xl">Refund Policy</div>
          <div className="mt-2">
            We strive to provide excellent service to our clients. This Refund
            Policy outlines our guidelines and procedures regarding refunds for
            the financial services we offer. Please read this policy carefully
            before engaging in any transactions with us.
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <ul className="my-4 space-y-4">
            <li>1. Eligibility for Refunds</li>
            <ul className="my-4 space-y-4 ml-4">
              <li>
                1.1 Service-Based Refunds:
                <div className="my-2 space-y-2">
                  Our refund policy applies to specific financial services
                  offered by NEW CREDAGE NIGERIA LIMITED. Financial Services,
                  subject to the terms and conditions agreed upon between the
                  client and our company.
                </div>
                <div className="my-2 space-y-2">
                  Refunds are generally applicable for services that were not
                  satisfactorily delivered or if the client decides to cancel
                  the service within a specified timeframe.
                </div>
              </li>

              <li>
                1.2 Non-Refundable Services:
                <div className="my-2 space-y-2">
                  Certain services, such as consultation fees, administrative
                  charges, or govt. charges, may not be eligible for a refund.
                  These will be clearly communicated to the client prior to
                  engaging in such services.
                </div>
              </li>
            </ul>

            <li>2. Requesting a Refund</li>
            <ul className="my-4 space-y-4 ml-4">
              <li>
                2.1 Notification:
                <div className="my-2 space-y-2">
                  To request a refund, clients must contact our customer support
                  team or designated representative, providing detailed
                  information about the service, reasons for the refund request,
                  and any relevant supporting documentation.
                </div>
                <div className="my-2 space-y-2">
                  Refund requests should be submitted within the specified
                  timeframe outlined in the service agreement or terms and
                  conditions.
                </div>
              </li>

              <li>
                2.2 Assessment:
                <div className="my-2 space-y-2">
                  Once a refund request is received, our team will review the
                  information provided to assess its validity and eligibility
                  for a refund.
                </div>
                <div className="my-2 space-y-2">
                  We may request additional information or clarification to
                  facilitate the evaluation process.
                </div>
              </li>
            </ul>

            <li>3. Refund Processing</li>
            <ul className="my-4 space-y-4 ml-4">
              <li>
                3.1 Refund Decisions:
                <div className="my-2 space-y-2">
                  Refund decisions are made at our sole discretion, based on the
                  assessment of the refund request and compliance with the terms
                  and conditions of the service.
                </div>
                <div className="my-2 space-y-2">
                  We will notify the client of the refund decision and the
                  amount approved for refund, if applicable.
                </div>
              </li>

              <li>
                3.2 Refund Methods:
                <div className="my-2 space-y-2">
                  Approved refunds will be processed using the same payment
                  method used for the original transaction, unless otherwise
                  agreed upon by both parties.
                </div>
                <div className="my-2 space-y-2">
                  Refunds may be subject to deductions for any applicable fees
                  or charges incurred during the refund process.
                </div>
              </li>

              <li>
                3.3 Refund Timeframe:
                <div className="my-2 space-y-2">
                  The time required to process a refund may vary depending on
                  factors such as the payment method, financial institution
                  processing times, and the complexity of the refund request.
                </div>
                <div className="my-2 space-y-2">
                  We will make reasonable efforts to process refunds promptly
                  and keep the client informed about the status of their refund.
                </div>
              </li>
            </ul>

            <li>4. Dispute Resolution</li>
            <div className="my-2 space-y-2">
              If a client is dissatisfied with a refund decision, they may
              contact our customer support team to discuss the matter further.
            </div>
            <div className="my-2 space-y-2">
              We are committed to resolving any disputes or concerns in a fair
              and amicable manner.
            </div>

            <li>5. Changes to the Refund Policy</li>
            <div className="my-2 space-y-2">
              We reserve the right to modify or update this Refund Policy at our
              discretion, with or without prior notice.
            </div>
            <div className="my-2 space-y-2">
              Any changes to the Refund Policy will be effective upon posting
              the revised version on our website or through other appropriate
              communication channels.
            </div>

            <li>6. Contact Information</li>
            <div className="my-2 space-y-2">
              If you have any questions, concerns, or requests regarding our
              Refund Policy, please contact us at:
            </div>
            <div className="my-1 space-y-1">NEW CREDAGE NIGERIA LIMITED.</div>
            <div className="my-1 space-y-1">
              Address: 52B Yakoyo road, Ojodu, Ikeja
            </div>
            <div className="my-1 space-y-1">
              Email:{" "}
              <a href="mailto:support@sportycredit.com">dchibuike1@gmail.com</a>
            </div>
            <div className="my-1 space-y-1">
              Grievances Manager - Adv. Sheetal Patil
            </div>
          </ul>

          <div className="flex flex-col mt-4">
            <div className="mt-2">
              By engaging in financial services with NEW CREDAGE NIGERIA
              LIMITED, you acknowledge and agree to abide by the terms and
              conditions outlined in this Refund Policy.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
