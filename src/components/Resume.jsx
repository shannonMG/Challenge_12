import '../index.css'

const Resume = () => {
    return (<div className="resume">
    <section className="card">
    <h2 className= "portfolio-title-card">My proficiencies:</h2>
    </section>

    <section className="card">
        <ul className="resume-icon-container">
         
          <img
          src="../images/html-5.png" 
          alt="A portrait or graphic representing me" 
          className="resume-icons"/>

          <img
          src="../images/css-3.png" 
          alt="A portrait or graphic representing me" 
          className="resume-icons"/>

          <img
          src="../images/typescript.png" 
          alt="A portrait or graphic representing me" 
          className="resume-icons"/>

          <img
          src="../images/api.png" 
          alt="A portrait or graphic representing me" 
          className="resume-icons"/>

          <img
          src="../images/react.png" 
          alt="A portrait or graphic representing me" 
          className="resume-icons"/>

          <img
          src="../images/github (1).png" 
          alt="A portrait or graphic representing me" 
          className="resume-icons"/>

          <img
          src="../images/nodejs.png" 
          alt="A portrait or graphic representing me" 
          className=""/>

         <img
          src="../images/javascript.png" 
          alt="A portrait or graphic representing me" 
          className=""/>
        </ul>

        <button type="submit" className="submit-button"> Want to learn more about me? Download my Resume!</button>

      </section>
    </div>);
  };

export default Resume;