
{/*import React from 'react';
export default function Dropbox(props, selectedOption, onOptionChange) {

  const Dropbox = ({ selectedOption, onOptionChange }) => {
    const handleOptionSelect = (event) => {
      const option = event.target.value;
      onOptionChange(option);
    };

  const arrayNames = Object.keys(props.dropbox);
  const arrayValues = Object.values(props.dropbox);
  const consistOfDate = arrayNames.includes("date");

 return (
    <>

    </>
  )
};
  

return (
    <>
    {
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
}*/}