import React from 'react'
import JsonData from './payment.json'

 function JsonDataDisplayPayment(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.payment_date}</td>
                    <td>{info.payment_amount}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplayPayment;