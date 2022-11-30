import "../App.css";


function AddClient() {
    return (
      <div>
        <h1 className="title">Client Name Edit Resources</h1>
        <form>
          <div className="field">
            <label className="label">First Name:</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Last Name:</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Phone Number:</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"></input>
            </div>
          </div>
          
<div className="field">
  <label className="label">Email:</label>
  <div className="control">
    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"></input>
  </div>
</div>


<button className="button is-large is-responsive">
  Add Client 
</button>

          
          
        </form> 

      </div>
    );
}

export default AddClient;