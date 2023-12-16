function Addtodo() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
