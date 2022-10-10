import Head from 'next/head'
import { Linkedin, Resume, Email } from './../components/Icons'
export default function Home() {
  return (
    <div >
      <Head>
        <title>JAEL IT Consulting</title>
        <meta name="description" content="Website under construction" />
        <meta charset="UTF-8" />
        <meta name="author" content="JAEL IT Consulting"/>
        <meta name="keywords" content="Consulting, IT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className="content container is-centered">
        <div className="brand">
          <h1 className="title">
            JAEL IT Consulting
          </h1>
          <div className="details">
            WEBSITE UNDER CONSTRUCTION
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/aelmoussaoui/" rel="noopener" target="_blank" title="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:contact@jael-itc.be" title="Contact">
              <Email />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
