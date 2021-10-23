import GitHubButton from 'react-github-btn';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Equivalent Salary Converter
        </a>
        <img
          alt=""
          height="25px"
          className="ml-auto mr-4"
          src="https://www.hitwebcounter.com/counter/counter.php?page=7885621&style=0025&nbdigits=6&type=page&initCount=100"
        ></img>
        <GitHubButton
          href="https://github.com/adixmr/salaryconverter"
          data-icon="octicon-star"
          data-size="large"
          data-show-count
          aria-label="Star adixmr/salaryconverter on GitHub"
        >
          Star
        </GitHubButton>
      </nav>
    </>
  );
}

export default Navbar;
