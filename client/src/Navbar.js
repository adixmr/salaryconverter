function Navbar() {
  return (
    <>
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Equivalent Salary Converter</a>
    </nav>


    <footer className="footer">
      <div className="container">
        <p className="text-muted float-left">Made with ❤️ by <a href="https://adityarajput.com">Aditya Rajput</a></p>
        <p className="text-muted float-right">
          <a href="https://www.linkedin.com/in/aditya-kumar-rajput/"><i class="bi bi-linkedin mr-3"></i></a>
          <a href="https://www.facebook.com/Aditya.Rajput.XMR/"><i class="bi bi-facebook mr-3"></i></a>
          <a href="https://www.instagram.com/adityaxrajput"><i class="bi bi-instagram mr-3"></i></a>
          <a href="https://github.com/adixmr/salaryconverter"><i class="bi bi-github"></i></a>
        </p>
      </div>
    </footer>
    </>
  );
}

export default Navbar;
