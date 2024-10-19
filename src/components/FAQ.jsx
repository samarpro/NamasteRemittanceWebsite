import React,{useEffect, useState} from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { Button } from './elements';
import Nepali1 from '../assets/Nepali1.jpeg'
import Nepali2 from '../assets/Nepali2.jpeg'

function FAQ() {
  let FAQ = [
    {
      question: "Is my money safe while in trade with your company?",
      answer: "Namaste Remittance is a legitimate operating company approved by the Australian government, and all the transactions and funds you have received in Namaste Remittance swap are protected and supervised by Australian law and the Australian Financial Transactions Reporting and Analysis center"
    },
    {
      question: "Why choose us?",
      answer: "Namaste Remittance has extensive business relations and selective trading with many banks and financial institutions. Namaste has maintained a high turnover and high credibility in the industry, from the source to obtain a more preferential wholesale exchange rate. Namaste provides customers with integrity, professional, quality, efficient currency exchange and global remittance one-stop service."
    },
    {
      question: "Is there any transaction amount limit for trading in your company?",
      answer: "There is no limit, however, you will need to supply the source of funds if the amount is large."
    },
    {
      question: "What information of receiver do I need to provide during the remittance?",
      answer: "For all remittances, at a minimum, you will be required to provide the sender's account name, payee's address, bank account or card number, detailed name and address of the bank. In addition, it is best to provide the beneficiary bank's cheque book pic where all information is included. So that your money can be arrived at the designated account accurately in the shortest time."
    },
    {
      question: "If I am not in Melbourne, can I do business with your company?",
      answer: "If you have already had an account with us, you could continue transactions with us through phone calls, emails or online no matter where you are. For customers who are outside of Melbourne, you could mail us your certified copies for the account registration before we could carry out any transactions or you can call us and send all KYC required documents to create a transaction with references."
    },
    {
      question: "What are our advantages compared with Australian banks and other similar businesses?",
      answer: "Namaste Remittance can provide you with a more competitive exchange rate to minimize your costs in transaction. In addition, Namaste can provide more flexible trading and services models than banks and ordinary similar remittance with faster service and lower service fees."
    }
    
    
  ]
  const [FAQcounter, setFAQcounter] = useState(1000)
  
  return (
    <article className="font-inter m-1 container lg:m-auto  space-y-10">
      <h2 className="text-5xl p-3 my-5 font-extrabold lg:text-7xl">Frequently <br /> Asked Question</h2>
      <div className="question">        {
          FAQ.map((obj,id) => {
            return (
              <section className="font-inter" key={id}>
                <div className="flex items-center ">
                  <FaPlus style={{ display: FAQcounter==id?"none":"inline-block", color: 'red', margin: "20px" }} onClick={()=>setFAQcounter(id)} />
                  <FaMinus style={{ display: FAQcounter===id?"inline-block":"none", color: 'red', margin: "20px" }} onClick={()=>setFAQcounter(1000)} />
                  <h2 className="inline-block font-xl font-extrabold md:text-2xl ">{obj.question}</h2>
                </div>
                <p className={`p-2 pl-11 ${FAQcounter==id?"block":'hidden'} ease-out duration-1000`}  >{obj.answer}</p>
                <hr />
              </section>
            )
          })
        }
      </div>
    </article>
  )
}

function FAQ2(){
 

  return (
    <div className="container m-auto my-10 flex flex-wrap justify-evenly items-center gap-20 sm:gap-0 overflow-x-hidden">
      <div className="text font-jakarta space-y-3 h-max">
        <h3 className="font-extrabold text-4xl lg:text-6xl ">Have a question?</h3>
        <p className="text-gray-500 lg:text-xl">We're just a click away!</p>
        <Button text="Contact us" className={'rounded-md p-2 px-5 text-white bg-gradient-to-l from-red-600 to-red-700 transition-all duration-[1000ms] ease-in-out hover:shadow-[0px_0px_10px_1px_rgba(255,0,51,1)] border hover:border hover:border-red-300'} />
      </div>
      <div id="images" className="images w-9/12 max-w-sm">
        <img src={Nepali1} alt="Send money to Nepal; Nepali boy - Namaste Remittance"  className="relative top-0 left-0 rounded-3xl rounded-br-sm shadow-[0px_20px_20px_10px_#d6d6d6] sm:w-44 lg:w-52 lg:rounded-tr-lg" />
        <img src={Nepali2} alt="Send money to parents in Nepal - Namaste Remittance" className=" relative -top-10 -right-10 rounded-3xl rounded-tl-sm shadow-[0px_20px_20px_10px_#d6d6d6] sm:w-56 sm:right-0 sm:translate-x-[80%] lg:translate-x-1/2  lg:w-72 " />
      </div>
    </div>
  )
}

export default FAQ
export {FAQ2}