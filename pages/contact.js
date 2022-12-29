import Contact from "../src/components/contact";
import Header from "../src/components/header";
import Layout from "../src/components/layout";
import Banner from "../src/images/codingbg.jpeg"

function ContactUs() {
  return (
    <Layout>
       <Header 
        title="Contact"
        content=""
        pageBanner={Banner}
      />
      <Contact />
    </Layout>
  )
}

export default ContactUs