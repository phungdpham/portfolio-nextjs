import Footer from "../footer";
import Navbar from "../nav";

function Layout({children}) {
  return (
    <div className="main">
      <Navbar />
      <div className="min-h-screen">
      {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout