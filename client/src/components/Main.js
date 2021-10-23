import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState({});
  const [from, setFrom] = useState('IN');
  const [to, setTo] = useState('US');
  const [salary, setSalary] = useState('100000');
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      /*
       * Replace with your production API base URL if deploying on a server
       * Otherwise default localhost:3001 will be taken from package.json
       */
      const proxy = '';
      setLoading(true);
      const countries = await axios.get(`${proxy}/list`);
      setCountries(countries.data);

      try {
        const { data } = await axios.get(`${proxy}/api/${from}/${to}`);
        setData(data);
      } catch (error) {
        setError(true);
        console.error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [from, to]);

  const handleTo = (e) => setTo(e.target.value);
  const handleFrom = (e) => setFrom(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);

  return (
    <div className="jumbotron">
      <div className="container">
        <h1>Equivalent Salary Converter Using PPP!</h1>
        <p>
          A salary of INR 45k is roughly equal to $600 but if you move from
          India to USA, can $600 give you the same standard of living? Can you
          purchase the same goods and services for $600 that you used to get for
          INR 45k in India? The answer is NO.
          <br />
          <br />
          Using the concept of PPP (Purchasing Power Parity), we can get a more
          accurate estimate for the conversion. Let's get started!
        </p>
        <form>
          <div className="form-group row">
            <label
              htmlFor="from"
              style={{ fontWeight: 'bold' }}
              className="col-4 col-form-label"
            >
              Current Country
            </label>
            <div className="col-8">
              <select
                id="from"
                name="from"
                onChange={handleFrom}
                className="custom-select"
                required="required"
              >
                {Object.keys(countries).map((key) => (
                  <option key={key} value={key}>
                    {countries[key]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4 col-form-label font-weight-bold">
              Current Salary (in {data.currency && data.currency.from})
            </label>
            <div className="col-8">
              <input
                id="text"
                name="text"
                onChange={handleSalary}
                type="text"
                value={salary}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-4 col-form-label font-weight-bold">
              Target Country
            </label>
            <div className="col-8">
              <select
                id="to"
                name="to"
                onChange={handleTo}
                value={to}
                className="custom-select"
              >
                {Object.keys(countries).map((key) => (
                  <option key={key} value={key}>
                    {countries[key]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        {!loading && !error && (
          <div className="text-center mt-5 alert alert-info" role="alert">
            According to PPP, a salary of{' '}
            <strong>
              {' '}
              {data.currency && data.currency.from} {data.conversion && salary}
            </strong>{' '}
            in <strong>{data.country && data.country.from}</strong> is
            equivalent to{' '}
            <strong>
              {' '}
              {data.currency && data.currency.from}{' '}
              {data.conversion && (data.conversion.factor * salary).toFixed(2)}
            </strong>{' '}
            or{' '}
            <strong>
              {' '}
              {data.currency && data.currency.to}{' '}
              {data.conversion &&
                (
                  data.conversion.factor *
                  data.conversion.direct *
                  salary
                ).toFixed(2)}
            </strong>{' '}
            in <strong>{data.country && data.country.to}.</strong>
            <br />
            That's{' '}
            <strong>
              {data.conversion && data.conversion.factor.toFixed(2)}x
            </strong>{' '}
            times the amount you make in{' '}
            <strong>{data.country && data.country.from}</strong>
          </div>
        )}
        {loading && (
          <div className="text-center">
            <button className="mt-5 btn btn-primary" type="button" disabled>
              <span
                className="mr-1 spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </button>
          </div>
        )}
        {!loading && error && (
          <div class="alert alert-danger text-center" role="alert">
            Something went wrong. Please try again later.
          </div>
        )}
      </div>
      <div class="container mt-5 text-center">
        <p>
          <strong>Disclaimer:</strong> This tool is made to give a general idea
          between the purchasing power of currencies in different countries, it
          uses Purchasing Power Parity (PPP) data for the calculation and
          doesn't take cost of living index (by city) into the consideration.
          <br /> <br /> Read more about PPP and how it's calculated here:{' '}
          <a
            target="_blank"
            href="https://www.oecd.org/sdd/prices-ppp/purchasingpowerparities-frequentlyaskedquestionsfaqs.htm"
            rel="noopener noreferrer"
          >
            PPP Faqs at OECD
          </a>
        </p>
      </div>
    </div>
  );
};

export default Main;
