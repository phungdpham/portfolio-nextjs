import Header from "../src/components/header"
import Layout from "../src/components/layout"
import Projects from "../src/components/projects"
import Banner from "../src/images/codingbg.jpeg"

function About() {
  return (
    <Layout>
      <Header 
        title="Projects"
        content=""
        pageBanner={Banner}
      />
      <Projects />
    </Layout>
  )
}

export default About