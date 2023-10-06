const ATMDeposit = ({ onChange, isDeposit, isValid, dep }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3 style={{marginTop:"7px"}} > {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange} value = {dep}></input>
        <input type="submit" width="200" value="Submit" id="submit-input" disabled={!isValid}></input>
      </label>
    );
  };
   
  const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);

    const handleChange = (event) => {
      console.log(`handleChange ${event.target.value}`);
      if (event.target.value <= 0) {
        setValidTransaction(false);
        return;
      }
      if (atmMode === 'Cash Back' && event.target.value > totalState) {     
        setValidTransaction(false);
      }
      else {
        setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
    };

    const handleSubmit = (event) => {
      //first validate if there is enough money to make a withdrawal if not alert and return
      //to reset the form and not update the balance with a negative value
      if (!isDeposit) {
        if (deposit > totalState) {
          alert('No overdrafting allowed. Please enter a valid amount.');          
        }
        else {
          let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
          setTotalState(newTotal);
        }
      }
      else {
        let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
        setTotalState(newTotal);
      }
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {   
        setAtmMode(event.target.value);
        console.log(`handleModeSelect ${event.target.value}`);
        
        setValidTransaction(false);
        setDeposit('');
        if (event.target.value === 'Deposit') {          
          setIsDeposit(true);          
        } else {                  
          setIsDeposit(false);          
        }
    };

    return (
      <form onSubmit={handleSubmit} style={{margin:"20px"}}>
        <h2 id="total">{status}</h2>
        
        <label>Select an action below to continue</label>
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value="">Select an option</option>
            <option id="deposit-selection" value="Deposit">Deposit</option>
            <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>

        { atmMode ? <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction} dep ={deposit}></ATMDeposit>:<></> } 
        
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));
  

  