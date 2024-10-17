import React from 'react';
import '../index.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <nav className="icon-container">
        {/* GitHub Icon */}
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="icon-link"
        >
          <svg
            height="50"
            width="50"
            viewBox="0 0 152 152"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="_77.github" data-name="77.github">
                <path
                  d="M76 0a76 76 0 1 0 76 76 76 76 0 0 0-76-76zm35.23 94.36c-6 12-22.5 11.72-34.31 11.72-12 0-29.48.42-35.72-11.72a33.27 33.27 0 0 1 -3.2-14.89 26.81 26.81 0 0 1 6.57-17.8 24.32 24.32 0 0 1 -1.22-7.67c0-3.37.78-5.06 2.31-8.12 7.17 0 11.76 1.41 17.23 5.64a61.29 61.29 0 0 1 14-1.56 55 55 0 0 1 12.73 1.44c5.38-4.19 10-5.52 17.07-5.52 1.59 3.12 2.31 4.78 2.31 8.12a23.87 23.87 0 0 1 -1.22 7.55 24.68 24.68 0 0 1 4.76 8.45 30.15 30.15 0 0 1 1.46 9.5c0 4.97-.51 10.27-2.77 14.86z"
                />
              </g>
            </g>
          </svg>
        </a>

        {/* Email Icon */}
        <a
          href="mailto:shannonmastrogiovanni@gmail.com"
          aria-label="Email"
          className="icon-link"
        >
          <svg
            height="50"
            width="50"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0zm162.5 355.241v-190.263l-95.137 95.131zm-304.676 3.876h284.358l-86.908-86.908-33.123 33.118a8.563 8.563 0 0 1-6.05 2.5h-32.2a8.553 8.553 0 0 1-6.051-2.5l-33.122-33.118-86.908 86.908zm-20.324-194.145v190.274l95.137-95.137zm312.906-12.089h-300.806l137.844 137.844h25.117z"
              
            />
          </svg>
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/shannon-mastrogiovanni-b27439320/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="icon-link"
        >
          <svg
            height="50"
            width="50"
            viewBox="0 0 152 152"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="_10.linkedin" data-name="10.linkedin">
                <path
                  d="M76 0a76 76 0 1 0 76 76 76 76 0 0 0-76-76zm-19.34 111.43a2.57 2.57 0 0 1-2.57 2.57h-10.92a2.56 2.56 0 0 1-2.57-2.57v-45.79a2.57 2.57 0 0 1 2.57-2.57h10.92a2.57 2.57 0 0 1 2.57 2.57zm-8-52.67a10.38 10.38 0 1 1 10.34-10.39 10.38 10.38 0 0 1-10.37 10.39zm65.12 52.88a2.36 2.36 0 0 1-2.36 2.36h-11.75a2.36 2.36 0 0 1-2.36-2.36v-21.48c0-3.21.93-14-8.38-14-7.22 0-8.69 7.42-9 10.75v24.78a2.36 2.36 0 0 1-2.34 2.31h-11.34a2.35 2.35 0 0 1-2.36-2.36v-46.2a2.36 2.36 0 0 1 2.36-2.37h11.34a2.37 2.37 0 0 1 2.41 2.37v4c2.68-4 6.66-7.13 15.13-7.13 18.78 0 18.67 17.54 18.67 27.17z"
                  
                />
              </g>
            </g>
          </svg>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
