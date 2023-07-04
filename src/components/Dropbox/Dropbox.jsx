
import React from 'react';
export default function Dropbox(props) {

  {/*const handleChange = (event) => {
    const selectedValue = event.target.value;
    setChange(selectedValue);
  };*/}

  const arrayNames = Object.keys(props.dropbox);
  const arrayValues = Object.values(props.dropbox);
  const consistOfDate = arrayNames.includes("date");

  {/*return (
    <>
      <select name="t" id="t" className="t" onChange={handleChange}>
        {props.map((value) => (
          <option value={value} id={value} className={value}>{value}</option>
        ))}
      </select>
    </>
  )
};*/}
  
return (
    <>
      {consistOfDate ? (
        <>
          {arrayNames.map((names, index) => (
            names === "date" ? (
                  <input type="date" id="date" className="date" name="date"></input>
            ) : (
                  <select name={names} id={names} className={names}>
                  {arrayValues[index].map((value) => (
                        <option value={value} id={value} className={value}>{value}</option>
                  ))}
                  </select>
            )
          ))}
        </>
      ) : (
        <>
          {arrayNames.map((names, index) => (
            <select name={names} id={names} className={names}>
              {arrayValues[index].map((value) => (
                <option value={value} id={value} className={value}>{value}</option>
              ))}
            </select>
          ))}
        </>
      )}
      <input type="submit" value="Go"></input>     
    </>
  );
}