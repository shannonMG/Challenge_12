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

        <button
          type="button"  // Change to "button" so it doesn't submit a form
          className="resume-button"
              onClick={() => {
              const link = document.createElement('a');
              link.href = '../images/SMastrogiovanniResume2024';  // Replace with your actual PDF file path
              link.download = 'S.Mastrogiovanni-Resume.pdf';  // Name the file to be downloaded
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