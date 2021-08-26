import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="nav">
        <h1> MATH MAGICIANS</h1>
        <div>
          <Link to="/" className="el">Home </Link>
          <Link to="/calculator" className="el">Calculator </Link>
          <Link to="/quote" className="el">Quotes </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
