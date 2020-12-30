import Alert from '../components/alert'
import Meta from '../components/meta'
import Footer from "@components/Footer";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
