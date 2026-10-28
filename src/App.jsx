import './style.css';
import HeaderContainer from './components/HeaderContainer';
function App() {


  return (
    <>
    <HeaderContainer/>
    <FormContainer/>
    <ListContainer/>

     <section id="headerContainer">
    <h1>
      Student Directory
    </h1>
    <small>
      Show list of Student
    </small>
  </section>
  

  <section id="formContainer">
    <form id="studentform">

      <div className="input-field">
        <label htmlFor="name">Student Name</label>
        <input type="text" name="name" id="name"/>
      </div>

      <div className="input-field">
        <label htmlFor="program">Program</label>
        <input type="text" name="program" id="program"/>
      </div>

      <div>
        <button type="submit"> Add Student </button>
      </div>

    </form>
  </section>
  
  <section id="listContainer">
    
  </section>

    </>
  )
}

export default App
