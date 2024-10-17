import '../index.css'

const Resume = () => {
    return (<div className="resume">
    <section className="">
    <h2 className= "card resume-title-card">My Proficiencies:</h2>
    </section>

    <section className="card">
        <ul className="resume-icon-container">
         
          <img
          src="../images/html-5.png" 
          alt="html icon" 
          className="resume-icons"/>

          <img
          src="../images/css-3.png" 
          alt="css icon" 
          className="resume-icons"/>

          <img
          src="../images/typescript.png" 
          alt="type script icon" 
          className="resume-icons"/>

          <img
          src="../images/api.png" 
          alt="api icon" 
          className="resume-icons"/>

          <img
          src="../images/react.png" 
          alt="react icon" 
          className="resume-icons"/>

          <img
          src="../images/github (1).png" 
          alt="github icon" 
          className="resume-icons"/>

          <img
          src="../images/nodejs.png" 
          alt="node.js icon" 
          className=""/>

         <img
          src="../images/javascript.png" 
          alt="javascript icon" 
          className=""/>
        </ul>

        <button
          type="button"  
          className="resume-button"
              onClick={() => {
              const link = document.createElement('a');
              link.href = '../images/SMastrogiovanniResume2024';  
              link.download = 'S.Mastrogiovanni-Resume.pdf';  
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              }}
>
  Want to learn more about me? Download my Resume!
</button>

      </section>
    </div>);
  };

export default Resume;