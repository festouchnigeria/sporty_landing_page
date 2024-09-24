import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Navbar, Footer } from "../components";

export default function Terms({ location }) {
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
      <title>MoMo's Privacy</title>

      <Navbar path={location.pathname} />

      <div className="flex flex-col px-10 lg:px-40 mt-6 mb-20 text-justify">
        <div className="flex flex-col">
          <div className="text-2xl lg:text-4xl">
            Our Privacy Policy
          </div>
          <div className="mt-2">
            This privacy policy explains why we collect data, what data we
            collect, how we store and transfer the data, how we use the data, as
            well as who we may share the data with. By accepting our privacy
            policy you authorize us to collect and process data in accordance
            with this Privacy Policy. 
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="mt-4 text-2xl lg:text-3xl">Why We Collect Data:</div>

          <div className="mt-2">
            We collect certain data in order to properly and adequately provide
            the service to you. We also collect data in order to verify your
            identity.
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="mt-4 text-2xl lg:text-3xl">The Data We Collect:</div>

          <div className="mt-2">
            When you register for the Service, we will collect the following
            (but not limited to), your telephone number as well as your name,
            age, Bank Verification Number (BVN), email address, your user
            information, account information, inventory of installed
            applications, your image (upload, storage and use) information,
            transaction information and the variables derived from the above
            information or other contact information. We may use your inventory
            of installed application to assess your habit of using financial
            apps and for risk control purposes. We may also use your stored
            fingerprint saved when you launch the app. Also, the information we
            collect from your images, including location data, date of creation,
            and other properties of the image will be reviewed when credit is
            granted. With the above information, we may cross-check your
            identity with third parties including the people you have provided
            as your emergency contacts and guarantors.
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="mt-4 text-2xl lg:text-3xl">
            How We Transfer And Store Data:
          </div>

          <div className="mt-1 mb-4">
            Your personal and installed application information may be collected
            by our respective third-party service providers and stored in a
            database maintained by the designated service provider
          </div>

          <div className=" text-2xl lg:text-3xl mt-5">
            Who We Share Data With:
          </div>
          <div className="mt-1">
            We may share your data with third parties in certain circumstances.
            We may, for example, share data with:
          </div>
          <ul className="my-4 space-y-4">
            <li>
              i. Credit bureaus, in requesting credit histories or reporting
              loan defaults;{" "}
            </li>
            <li>
              ii. Collections agencies, responsible for recovering overdue
              loans;{" "}
            </li>
            <li>
              iii. Government bodies and law enforcement agencies, to comply
              with the law;
            </li>
            <li>
              iv. Professional advisers, to enforce or defend our legal rights
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
