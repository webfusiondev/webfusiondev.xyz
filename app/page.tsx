import Image from "next/image";
import Link from "next/link";

import IconPark from "./icon-park";
import Nav from "./nav";

export default function Home() {
  return (
    <>
      <main className="min-h-[80vh] md:min-h-screen flex flex-col relative overflow-x-clip">
        <Nav route="home" />
        <section className="py-20 md:py-28 lg:py-32 xl:py-44 px-8 md:px-16 flex flex-col justify-center grow">
          <div className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-5 xl:pl-8">
            Welcome to{" "}
            <span className="bg-brand-green text-brand-black px-4">
              WebFusion
            </span>
          </div>
          <p className="text-xl md:text-2xl xl:text-3xl font-light mb-20 max-w-5xl xl:pl-8">
            At WebFusion, we are dedicated to{" "}
            <span className="text-brand-green">empowering</span>{" "}
            <span className="text-brand-green">developers</span>
            <span className="inline">
              {" "}
              and advancing technology through community-driven initiatives,
              educational programs, and collaborative partnerships{"  "}
            </span>
            <span
              style={{ width: "32.36%" }}
              className="border border-brand-white inline-block align-middle invisible md:visible"
            />
          </p>
          {/* right aligned section */}
          <div className="text-right font-bold text-lg md:text-xl xl:text-2xl text-brand-green">
            Our Mission
          </div>
          <p
            style={{ alignSelf: "flex-end" }}
            className="max-w-xl text-right md:text-lg xl:text-xl font-light"
          >
            To foster innovation, inclusivity, and skill development in the
            rapidly evolving landscape of{" "}
            <span className="font-bold">Web2 and Web3 technologies</span>
          </p>
        </section>
        <svg
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            width: "max(7vw, 48px)",
            maxWidth: "62px",
            transform: "translate(-50%, 50%)",
            zIndex: 0
          }}
          viewBox="0 0 63.5 113.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.75"
            y="0.75"
            width="62"
            height="112"
            rx="31"
            stroke="#00EC97"
            strokeWidth="1.5"
            fill="transparent"
            strokeDasharray="8"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;16;"
              dur="1.5s"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </rect>
          <path
            y="80"
            xmlns="http://www.w3.org/2000/svg"
            d="M 31.75,31.75 31.75,81.75 M 18.75,63.75 31.75,81.75 M 44.75,63.75 31.75,81.75"
            stroke="#00EC97"
            strokeWidth="1.5"
          >
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              path="m 0,-10 v 20"
            />
          </path>
        </svg>

        <Image
          alt="webfusion stripe"
          width={396}
          height={206}
          style={{
            left: 0,
            transform: "translate(-33%, 31.6%)",
            bottom: 0,
            position: "absolute",
            maxWidth: "25vw",
          }}
          src="/pattern-stripe.png"
        />
        <Image
          alt="webfusion stripe"
          width={396}
          height={206}
          style={{
            bottom: 0,
            right: "0",
            transform: "translate(33%, 31.6%)",
            position: "absolute",
            maxWidth: "25vw",
          }}
          src="/pattern-stripe.png"
        />
      </main>
      <section
        className="py-20 xl:py-24 overflow-hidden"
        style={{ backgroundColor: "rgba(150, 150, 150, 0.05)" }}
      >
        <div className="px-12 lg:px-16 xl:px-24 pb-16 text-lg md:text-xl xl:text-2xl">
          <div className="font-medium text-4xl xl:text-6xl mb-9">Events</div>
          <p className="mb-4">
            Discover and participate in a diverse range of events organized or
            sponsored by WebFusion&#8228; From hackathons and bootcamps to
            workshops and webinars, we offer opportunities for developers to
            learn, connect, and showcase their talents&#8228;
          </p>
          <div>
            Join us at{" "}
            <span className="font-bold text-brand-green cursor-pointer">
              upcoming events
            </span>{" "}
            or explore highlights from past gatherings&#8228;
          </div>
        </div>
        <div
          style={{ marginLeft: "-1px", marginRight: "-1px" }}
          className="grid grid-cols-6 events-grid"
        >
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 xl:col-span-2 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              Hackathons
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Engage in intensive coding challenges, collaborate with peers, and
              bring your creative ideas to life within a supportive
              environment&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 xl:col-span-2 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              Bootcamps
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Dive deep into specific topics or technologies through immersive
              learning experiences led by industry experts&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 xl:col-span-2 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              Workshops
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Enhance your skills and knowledge through hands-on sessions
              covering a wide array of subjects relevant to modern development
              practices&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              Webinars
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Stay informed and inspired by attending virtual sessions featuring
              thought leaders, innovators, and pioneers in the tech
              industry&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              In-Person (IRL) Events
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Connect with fellow developers face-to-face at our live events,
              where networking opportunities abound and camaraderie
              thrives&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
        </div>
      </section>
      <section className="mb-28">
        <div className="py-16 grid grid-cols-3 gap-2 md:gap-4 lg:gap-8 xl:gap-10 max-w-6xl mx-auto px-8 xl:px-0">
          <div className="col-span-3 md:col-span-1 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium flex flex-row md:flex-col md:justify-center mb-4 md:mb-0">
            <div>
              Courses <span className="text-brand-green mr-2 md:mr-0">&</span>
            </div>
            <div>Resources</div>
          </div>
          <div className="col-span-3 md:col-span-2 md:text-lg xl:text-xl font-light">
            <p className="mb-4">
              Elevate your expertise with our comprehensive courses and curated
              resources designed to empower developers at every stage of their
              journey&#8228;
            </p>
            <p>
              Whether you&apos;re delving into blockchain technology or honing
              your skills in Web2 development, we provide the tools and guidance
              you need to succeed&#8228;
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            style={{ backgroundColor: "#0F0F0F", margin: "-1px" }}
            className="grid grid-cols-6"
          >
            <div className="border border-secondary px-14 py-16 col-span-6 md:col-span-3 xl:col-span-2">
              <div className="mb-4">
                <IconPark />
              </div>
              <div className="text-xl md:text-2xl xl:text-3xl mb-4 font-bold">
                Developer Courses
              </div>
              <p className="md:text-lg xl:text-xl">
                Expand your knowledge and proficiency in Web2 development
                languages, frameworks, and best practices with our targeted
                curriculum&#8228;
              </p>
            </div>
            <div className="border border-secondary px-14 py-16 col-span-6 md:col-span-3 xl:col-span-2">
              <div className="mb-4">
                <IconPark />
              </div>
              <div className="text-xl md:text-2xl xl:text-3xl mb-4 font-bold">
                Blockchain Courses
              </div>
              <p className="md:text-lg xl:text-xl">
                Gain a deep understanding of blockchain fundamentals, smart
                contract development, decentralized applications (DApps), and
                more through our specialized courses&#8228;
              </p>
            </div>
            <div className="border border-secondary px-14 py-16 col-span-6 md:col-span-3 xl:col-span-2">
              <div className="mb-4">
                <IconPark />
              </div>
              <div className="text-xl md:text-2xl xl:text-3xl mb-4 font-bold">
                Developer Resources
              </div>
              <p className="md:text-lg xl:text-xl">
                Access a wealth of tutorials, documentation, code samples, and
                tools curated to support your ongoing learning and professional
                growth&#8228;
              </p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#0F0F0F" }} className="text-center md:text-lg xl:text-xl py-12">
          <Link style={{ backgroundColor: "#161616" }} className=" border-b border-brand-green p-2" href="courses-and-resources">View Resources</Link>
        </div>
      </section>
      <section className="px-12 lg:px-16 xl:px-24 text-center mb-28">
        <div className="font-medium text-4xl xl:text-6xl mb-9">
          Meet the <span className="text-brand-green">Team</span>
        </div>
        <p className="md:text-lg xl:text-xl font-light max-w-5xl mx-auto mb-12">
          Get to know the passionate individuals driving the mission and vision
          of WebFusion forward&#8228; Our diverse team brings together expertise
          from various domains to create impactful experiences and opportunities
          for developers worldwide&#8228;
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 font-light">
          <div style={{ backgroundColor: "#0F0F0F" }} className="p-8">
            <Image
              alt="kyle walker"
              width={150}
              height={150}
              className="mb-8 mx-auto"
              src="/team/kylewalker.png"
            />
            <div className="font-bold text-lg md:text-xl xl:text-2xl">
              Kyle Walker
            </div>
            <div className="mb-8 text-lg md:text-xl xl:text-2xl">
              Project Manager
            </div>
            <p className="md:text-lg">
              Meet Kyle, a seasoned project manager with a knack for
              orchestrating success&#8228; Precision, strategy, and teamwork
              define his approach to excellence&#8228;
            </p>
          </div>
          <div style={{ backgroundColor: "#0F0F0F" }} className="p-8">
            <Image
              alt="sarah cook"
              width={150}
              height={150}
              className="mb-8 mx-auto"
              src="/team/sarahcook.png"
            />
            <div className="font-bold text-lg md:text-xl xl:text-2xl">
              Sarah Cook
            </div>
            <div className="mb-8 text-lg md:text-xl xl:text-2xl">
              Frontend Developer
            </div>
            <p className="md:text-lg">
              Sarah, a dynamic frontend developer, crafts digital experiences
              that captivate and innovate&#8228; Her code is the canvas for
              user-centric masterpieces&#8228;
            </p>
          </div>
          <div style={{ backgroundColor: "#0F0F0F" }} className="p-8">
            <Image
              alt="james dinero"
              width={150}
              height={150}
              className="mb-8 mx-auto"
              src="/team/jamesdinero.png"
            />
            <div className="font-bold text-lg md:text-xl xl:text-2xl">
              James Dinero
            </div>
            <div className="mb-8 text-lg md:text-xl xl:text-2xl">
              Community Manager
            </div>
            <p className="md:text-lg">
              James, the community manager extraordinaire, cultivates vibrant
              online spaces where connections thrive&#8228; Engagement, empathy,
              and enthusiasm are his guiding principles&#8228;
            </p>
          </div>
        </div>
      </section>
      <section className="px-12 lg:px-16 xl:px-24 mb-24">
        <div className="font-medium text-4xl xl:text-6xl mb-6">
          Partners &amp; <span className="text-brand-green">Sponsors</span>
        </div>
        <p className="md:text-lg xl:text-xl font-light max-w-5xl mb-12">
          We are grateful for the support and collaboration of our esteemed
          partners and sponsors, who share our vision and contribute to the
          success of our initiatives&#8228; Together, we strive to create
          meaningful opportunities and impact within the developer community
        </p>
        <div className="flex justify-between gap-4 max-w-5xld mx-auto flex-wrap">
          <div
            style={{ backgroundColor: "#0F0F0F" }}
            className="p-4 flex justify-center"
          >
            <Link href="https://twitter.com/NEARDevHub" target="_blank">
              <Image
                className="select-none"
                alt="near dev hub"
                width={200}
                height={200}
                style={{
                  maxWidth: "17.5vw",
                }}
                src="/partners/neardevhub.png"
              />
            </Link>
          </div>
          <div
            style={{ backgroundColor: "#0F0F0F" }}
            className="p-4 flex justify-center"
          >
            <Link href="https://twitter.com/nearafrica_" target="_blank">
              <Image
                className="select-none"
                alt="near africa"
                width={200}
                height={200}
                style={{
                  maxWidth: "17.5vw",
                }}
                src="/partners/nearafrica.jpeg"
              />
            </Link>
          </div>
          <div
            style={{ backgroundColor: "#0F0F0F" }}
            className="p-4 flex justify-center"
          >
            <Link href="https://twitter.com/COLDSCOLLECTIVE" target="_blank">
              <Image
                className="select-none"
                alt="colds collective"
                width={200}
                height={200}
                style={{
                  maxWidth: "17.5vw",
                }}
                src="/partners/coldscollective.jpeg"
              />
            </Link>
          </div>
          <div
            style={{ backgroundColor: "#0F0F0F" }}
            className="p-4 flex justify-center"
          >
            <Link href="https://twitter.com/potlock_" target="_blank">
              <Image
                className="select-none"
                alt="potlock"
                width={200}
                height={200}
                style={{
                  maxWidth: "17.5vw",
                }}
                src="/partners/potlock.jpeg"
              />
            </Link>
          </div>
          <div
            style={{ backgroundColor: "#0F0F0F" }}
            className="p-4 flex justify-center"
          >
            <Link href="https://twitter.com/welcomehomeintl" target="_blank">
              <Image
                className="select-none"
                alt="welcomehomeintl"
                width={200}
                height={200}
                style={{
                  maxWidth: "17.5vw",
                }}
                src="/partners/welcomehomeintl.jpeg"
              />
            </Link>
          </div>
        </div>
      </section>
      <footer
        style={{ backgroundColor: "#0F0F0F" }}
        className="py-4 px-12 lg:px-16 xl:px-24 text-center"
      >
        Copyright &copy; 2024 WebFusion
      </footer>
    </>
  );
}
