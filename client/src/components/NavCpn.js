import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navi() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark navbar-fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">Learn English</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Vocabulary</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Grammar</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search"/>
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navi;