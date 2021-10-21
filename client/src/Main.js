import { useState, useEffect } from 'react';
const axios = require('axios')

const Main = () => {
    const [countries, setCountries] = useState({})
    const [from, setFrom] = useState('IN')
    const [to, setTo] = useState('US')
    const [salary, setSalary] = useState('100000')
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            let countries = await axios.get('/list')
            let data = await axios.get('/api/'+from+'/'+to)
            setCountries(countries.data)
            setData(data.data)
            console.log(data)
        }
        
        fetchData();
    }, [from, to]); 



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
                        <select id="from" name="from" className="custom-select" required="required">
                            {Object.keys(countries).map(key => <option value={key}>{countries[key]}</option>)}
                        </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-4 col-form-label" style={{fontWeight: "bold"}} >Current Salary (in {data.currency && data.currency.from})</label> 
                        <div className="col-8">
                        <input id="text" name="text" type="text" value={salary} className="form-control"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-4 col-form-label" style={{fontWeight: "bold"}} >Target Country</label> 
                        <div className="col-8">
                        <select id="to" name="to" value={to} className="custom-select">
                        {Object.keys(countries).map(key => <option value={key}>{countries[key]}</option>)}
                        </select>
                        </div>
                    </div> 
                    <div className="form-group row">
                        <div className="offset-4 col-8">
                        <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>      

        </div>
    )
}

export default Main;