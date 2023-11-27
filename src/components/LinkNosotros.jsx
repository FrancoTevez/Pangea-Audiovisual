import {Link} from "react-router-dom"

function LinkNosotros() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to="/nosotros" className="linksHeader" onClick={scrollToTop}>Nosotros</Link>
  )
}

export default LinkNosotros