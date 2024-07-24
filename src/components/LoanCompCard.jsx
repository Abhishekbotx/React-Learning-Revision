import React from 'react'


const LoanCompCard = () => {
    const loanData = [{
        bankName: "ICICI Bank",
        loanType: "Personal Loan",
        interestRate: "11.25%",
        loanAmount: "1,50,000",
        tenure: "4 years"
    }]
    return (
        <div className="bg-white shadow-md rounded p-4 m-4">
            {loanData.map((loan, index) => (
                <div>
                    <div key={index} className="">
                        <div className='flex capitalize my-2 gap-x-4'>
                            <p>bankName:</p>
                            <p>{loan.bankName}</p>
                        </div>
                        <div className='flex capitalize my-2 gap-x-4'>
                            <p>loanType:</p>
                            <p>{loan.loanType}</p>
                        </div>
                        <div className='flex capitalize  my-2 gap-x-4'>
                            <p>interestRate:</p>
                            <p>{loan.interestRate}</p>
                        </div>
                        <div className='flex capitalize my-2 gap-x-4'>
                            <p>loanAmount:</p>
                            <p>{loan.loanAmount}</p>
                        </div>
                        <div className='flex capitalize my-2 gap-x-4'>
                            <p>tenure:</p>
                            <p>{loan.tenure}</p>
                        </div>
                        

                    </div>
                    <div className='flex flex-row-reverse'>
                    <button className='px-4 py-2  bg-green-500 text-white rounded-md'>Select</button>
                    </div>
                </div>

            ))}
        </div>
    );


}

export default LoanCompCard