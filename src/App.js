function App() {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" >
            <div className="card-body p-5">
              <h6 className="mb-3">Awesome Todo List</h6>
              <form className="d-flex justify-content-center align-items-center mb-4">
                  <input type="text" id="form3" className="form-control" placeholder="Enter Note..." />
                <button type="submit" className="btn btn-primary  ms-2">Add</button>
              </form>
              <ul className="list-group mb-0">
                
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                  <div className="d-flex align-items-center">
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    Morbi leo risus
                  </div>
                  <a href="#!" title="Remove item">
                    <i className="fas fa-times text-primary">ss</i>
                  </a>
                </li>
              </ul>
  
            </div>
          </div>
  
        </div>
      </div>
    </div>

  );
}
export default App;