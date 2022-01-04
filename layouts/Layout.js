import Navbar from "./navs/Navbar";
import Footer from "./navs/Footer";

export default function Layout(props) {
  const blog = props.blog;

  return (
    <div>
      <Navbar title={props.title} blog={blog} />
      {props.children}
      <Footer />
    </div>
  );
}
