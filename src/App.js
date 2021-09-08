

import ProfilPhoto from './component/Profil/ProfilPhoto';
import FullName from './component/Profil/FullName';
import Address from './component/Profil/Address';

function App() {
  return (
    <>
   <div>
  <div className="card-header ">
    <h3 className="d-flex p-2 bd-highlight justify-content-center border border-dark">Employee Directory</h3>
  </div>
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <ul className="list-group border">
    <li className="list-group-item border">
      <div className="d-flex ">
        <div className="rounded-circle border me-2">
          <ProfilPhoto/>
        </div>
        <div className="m-3">
          <FullName/>
          <Address/>
        </div>
      </div>
    </li>
    <li className="list-group-item border">
      <div className="d-flex">
        <div className="rounded-circle border me-2">
        <ProfilPhoto/>
        </div>
        <div className="m-3">
        <FullName/>
          <Address/>
        </div>
      </div>
    </li>
    <li className="list-group-item border">
      <div className="d-flex">
        <div className="rounded-circle border me-2">
        <ProfilPhoto/>
        </div>
        <div className="m-3">
        <FullName/>
          <Address/>
        </div>
      </div>
    </li>
  </ul>
</div>

    </>
  );
}

export default App;
