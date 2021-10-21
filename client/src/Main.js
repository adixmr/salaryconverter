import { useState, useEffect } from 'react';
const axios = require('axios')

const Main = () => {
    const [loading, setLoading] = useState(true)
    const [countries, setCountries] = useState({})
    const [from, setFrom] = useState('IN')
    const [to, setTo] = useState('US')
    const [salary, setSalary] = useState('100000')
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            let countries = await axios.get('/list')
            let data = await axios.get('/api/'+from+'/'+to)
            setCountries(countries.data)
            setData(data.data)
            setLoading(false)
        }
        
        fetchData();
    }, [from, to]); 

    const handleTo      = (e) => setTo(e.target.value)
    const handleFrom    = (e) => setFrom(e.target.value)
    const handleSalary  = (e) => setSalary(e.target.value)

    return (
        <div className="jumbotron">
            <div className="container">
                <h1>Equivalent Salary Converter Using PPP!</h1>
                <p>A salary of INR 45k is roughly equal to $600 but if you move from India to USA, can $600 give you the same standard of living? Can you purchase the same goods and services for $600 that you used to get for INR 45k in India? The answer is NO.
                <br/><br/>
                    Using the concept of PPP (Purchasing Power Parity), we can get a more accurate estimate for the conversion. Let's get started!</p>                    
                <form>
                    <div className="form-group row">
                        <label htmlFor="from" style={{fontWeight: "bold"}} className="col-4 col-form-label">Current Country</label> 
                        <div className="col-8">
                        <select id="from" name="from" onChange={handleFrom} className="custom-select" required="required">
                            {Object.keys(countries).map(key => <option value={key}>{countries[key]}</option>)}
                        </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 col-form-label" style={{fontWeight: "bold"}} >Current Salary (in {data.currency && data.currency.from})</label> 
                        <div className="col-8">
                        <input id="text" name="text" onChange={handleSalary}  type="text" value={salary} className="form-control"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-4 col-form-label" style={{fontWeight: "bold"}} >Target Country</label> 
                        <div className="col-8">
                        <select id="to" name="to" onChange={handleTo} value={to} className="custom-select">
                        {Object.keys(countries).map(key => <option value={key}>{countries[key]}</option>)}
                        </select>
                        </div>
                    </div> 
                </form>
                { !loading &&
                    <div className="text-center mt-5 alert alert-info" role="alert">You need to make <strong>{data.conversion && data.conversion.factor.toFixed(2)}x</strong> the amount when you move from <strong>{data.country && data.country.from}</strong> to <strong>{data.country && data.country.to}.</strong> 
                    <br/>
                    i.e. <strong> {data.currency && data.currency.from} {data.conversion && (data.conversion.factor*salary).toFixed(2)}</strong> which is equal to <strong>  {data.currency && data.currency.to}  {data.conversion && (data.conversion.direct*salary).toFixed(2)}</strong>
                    </div>
                }
                {
                    loading &&
                    <div className="text-center">
                        <button className="mt-5 btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                        </button>
                    </div>
                }   
            </div>      

        </div>
    )
}

export default Main;