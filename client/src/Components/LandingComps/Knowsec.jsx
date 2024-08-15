import React from 'react'
import temp from "../../assets/LandingImages/temp.png"
import Ques from './Ques'
import hero from '../../assets/LandingImages/Designer (3).jpeg'

const quess = [
    {
        question: "What is Walmart Store Connect?",
        answer: "Walmart Store Connect is a platform that allows sellers to list and sell their products on Walmart.com."
      },
      {
        question: "How do I create a Walmart Store Connect account?",
        answer: "To create a Walmart Store Connect account, visit the Walmart Seller Center and follow the on-screen instructions."
      },
      {
        question: "What are the benefits of using Walmart Store Connect?",
        answer: "Benefits include increased product visibility, access to a vast customer base, potential for higher sales, and streamlined order management."
      },
      {
        question: "Is there a fee to use Walmart Store Connect?",
        answer: "Yes, Walmart Store Connect charges fees for listing products, order fulfillment, and other services. Specific fees vary based on product categories and seller plans."
      },
      {
        question: "What kind of support is available for Walmart Store Connect users?",
        answer: "Walmart Store Connect offers customer support through email, phone, and online resources. Specific support options may vary based on your seller plan."
      },
      {
        question: "How do I list my products on Walmart Store Connect?",
        answer: "To list your products, you'll need to provide detailed product information, including titles, descriptions, images, pricing, and inventory levels."
      },
      {
        question: "What product categories are supported on Walmart Store Connect?",
        answer: "Walmart Store Connect supports a wide range of product categories. You can find a complete list in the Seller Center."
      },
      {
        question: "How do I manage my product inventory on Walmart Store Connect?",
        answer: "You can manage your inventory directly through the Walmart Seller Center. You can update quantities, prices, and product details as needed."
      },
      {
        question: "How do I handle returns and refunds through Walmart Store Connect?",
        answer: "Walmart Store Connect provides guidelines for handling returns and issuing refunds. You can find specific instructions in the Seller Center."
      },
]

const Knowsec = () => {
  return (
    <div className=' p-8 w-[95%] h-[800px] m-auto flex gap-[5%]  my-8'>
        <div className='w-[40%] rounded-xl overflow-hidden '>
            <img src={hero} alt="" className='h-[100%] w-full object-cover '  />
        </div>
        <div className='w-[50%] no-scl overflow-y-scroll '>
            <div className='text-center font-bold text-[24px] mb-4'>
                More to Know....
            </div>
            <div className='w-full flex flex-col gap-4' >
                {
                    quess.map( (ele) => {
                        return <Ques ques={ele.question}  ans={ele.answer}/>
                    } )
                }
            </div>
        </div>
    </div>
  )
}

export default Knowsec
