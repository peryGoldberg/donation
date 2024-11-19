
import { useMemo, useState, useEffect } from 'react';
import OnDonate from './OnDonate';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Donation.css'
const Donation = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [localListPeople, setLocalListPeople] = useState([]);

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('myArray'));
    if (storedArray) {
      setLocalListPeople(storedArray);
    }
  }, [props.listPeople]);

  let filtered = useMemo(() => {
    return localListPeople.filter(
      (item) =>
        item.name.includes(inputValue) || item.dedication.includes(inputValue)
    );
  }, [inputValue, localListPeople]);

  // Sort the array by sum
  let changeHeight = (e) => {
    const sortedList = [...localListPeople].sort((a, b) => b.amount - a.amount);
    setLocalListPeople(sortedList);
  };

  // Sort the array by old
  let changeOld = (e) => {
    const sortedList = [...localListPeople].sort(
      (b, a) => b.dateDonate - a.dateDonate
    );
    setLocalListPeople(sortedList);
  };

  // Sort the array by new
  let changeNew = (e) => {
    const sortedList = [...localListPeople].sort(
      (a, b) => b.dateDonate - a.dateDonate
    );
    setLocalListPeople(sortedList);
  };
  return (
    <>
          <div className='sortandsearch'>
        <div className='sort'>
          <label style={{color:"red"}}>מיין לפי:</label>
          <Button color='info' variant="contained" onClick={changeNew} >חדש</Button>
          <Button color='info' variant="contained" onClick={changeOld}>ישן</Button>
          <Button color='info' variant="contained" onClick={changeHeight}>גובה התרומה</Button>
        </div>
        <div className='donationsearch'>
            <TextField className='bg'  color='info' id="outlined-basic" label="חפש תרומה" variant="outlined"
              onChange={(e) => {
                setInputValue(e.target.value)
              }} />
          <ul className="all">{filtered.map((item, index) => { return <li className='listDonation' key={index}><OnDonate myPeople={item} /></li> })}</ul>
        </div>
      </div>
    </>

  );
}

export default Donation;