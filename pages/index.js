import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import CanvasHero from '../components/CanvasHero'
import CanvasServices from '../components/CanvasServices'
import Overlay1 from '../components/Overlay1'

import { motion } from "framer-motion"

{/* ---------------------- Animations ---------------------- */}
const variants = {
hidden: { opacity: 0 },
visible: { opacity: 1 },
start: { y: "50px" },
end: { y: "0px" }
}

export default function Home() {
return (

<div>

  {/* ---------------------- Head ---------------------- */}

  <Head>
    <title>Bespoke Programming | Freelance Web Developer</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/logo.svg" />
  </Head>

  {/* ---------------------- Canvas ---------------------- */}
  <CanvasHero />
  <CanvasServices />

  {/* ---------------------- Hero ---------------------- */}
  <section id='hero'>

    <Overlay1 />

    <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 1 }} className="div1">
      <h1>I Solve Business <br />Problems <br /> Through Medium <br />of Web <br />Development.</h1>
    </motion.div>

    <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 1, delay: 0.2 }}
      className="div2">
      <p className='gradientBorder'>I am a web developer who builds custom web-applications right from consulting,
        development, maintenance and
        support.</p>
      <Link href="/quote"><button>Get A Free Quote</button></Link>
    </motion.div>

    <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 1, delay: 0.4 }}
      className="div3">
      <p>Scroll down</p>
      <Image className='arrowDown' src="/svg/triangleDown.svg" alt="arrow down" width={22} height={34} />
    </motion.div>

  </section>

  {/* ---------------------- My Services ---------------------- */}
  <section id="myServices">

    <h3 className="heading">My <br />Services</h3>

    <div className="div2">
      <Image className='logo' src="/svg/servicesLanding.svg" alt="logo" width={60} height={60} />
      <h4>Landing Page <abbr className='purple'>⇀</abbr></h4>
      <p>A standalone web page that a person lands on after clicking through from an email, ad, or other digital
        location.</p>
    </div>

    <div className="div3">
      <Image className='logo' src="/svg/servicesSPA.svg" alt="logo" width={60} height={60} />
      <h4>Single Page Application <abbr className='purple'>⇀</abbr></h4>
      <p>A website that interacts with the user by dynamically rewriting the current web page with new data from the web
        server, instead of the default method of a web browser loading entire new pages.</p>
    </div>

    <div className="div4">
      <Image className='logo' src="/svg/servicesBespoke.svg" alt="logo" width={60} height={60} />
      <h4>Bespoke Website <abbr className='purple'>⇀</abbr></h4>
      <p>Sometimes ideas go beyond what existing systems are capable of. A tailor-made solution make your ideas a
        reality. </p>
    </div>

  </section>

  {/* ---------------------- Quote ---------------------- */}
  <section id="quote">

    <h2 className='quote'>All applications are <abbr className='purple'>hand-coded </abbr>from scratch <abbr
        className='magenta'>without
        using </abbr>any Content Management System.</h2>

  </section>

  {/* ---------------------- My Process ---------------------- */}
  <section id="myProcess">

    <h3 className="heading">My <br />Process</h3>

    <div className="div2">
      <Image className='logo' src="/svg/processPlanning.svg" alt="logo" width={60} height={60} />
      <h4 className="number">01</h4>
      <h4>Gathering information & planning</h4>
      <p>I define your goals and make schedule for the project. I then make requirement for documents, wireframe of
        pages and sitemap.</p>
    </div>

    <div className="div3">
      <Image className='logo' src="/svg/processBuild.svg" alt="logo" width={60} height={60} />
      <h4 className="number">02</h4>
      <h4>Build</h4>
      <p>I design the website that support good looks and responsive layout.
        Then, I build HTML templates, CSS styles and add functionality to the site.</p>
    </div>

    <div className="div4">
      <Image className='logo' src="/svg/processTesting.svg" alt="logo" width={60} height={60} />
      <h4 className="number">03</h4>
      <h4>Testing</h4>
      <p>When the build is finalized I will need to test it to make sure that everything is working correctly. <br />I
        launch the beta release and check both: the page speed and w3c validation.</p>
    </div>

    <div className="div5">
      <Image className='logo' src="/svg/processLaunch.svg" alt="logo" width={60} height={60} />
      <h4 className="number">04</h4>
      <h4>Launch & Maintenance</h4>
      <p>Once both parties are happy, website is then unveiled to the awaiting public. Upon request, I keep up to date
        website with content and technologies.</p>
    </div>

  </section>

  {/* ---------------------- Featured Work ---------------------- */}
  <section id="featuredWork">

    <h3 className="heading">Featured <br />Work</h3>
    <h4>Selected Projects</h4>

    <div className="div2">
      <h4><abbr className='purple'>000</abbr> Personal Portfolio</h4>
      <p>This is my personal portfolio website.</p>
      <p className='whiteText'>Technologies used:</p>
      <p>Html, CSS, Sass, JavaScript, Three.js</p>
    </div>

    <div className="div3">
      <h4><abbr className='purple'>001</abbr> Second Project</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <p className='whiteText'>Technologies used:</p>
      <p>Html, CSS, Sass, JavaScript, Three.js</p>
    </div>

    <div className="div4">
      <h4><abbr className='purple'>002</abbr> Third Project</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <p className='whiteText'>Technologies used:</p>
      <p>Html, CSS, Sass, JavaScript, Three.js</p>
    </div>

  </section>

  {/* ---------------------- Quote ---------------------- */}
  <section id="quote">

    <h2 className='quote'>Ready to make your <abbr className='purple'>idea </abbr>come to <abbr className='magenta'>life
      </abbr>?</h2>

  </section>

</div>
)
}