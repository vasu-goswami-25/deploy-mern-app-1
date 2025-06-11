import { Check } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricing=[
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: "18,000/-",
      length: 3
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEARLY",
      price: "34,000/-",
      length: 6
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: "67,000/-",
      length: 12
    }
  ];
  return (
    <section className='pricing'>
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.length} Months</p>
                </div>

                <div className="description">
                  <p>
                    <Check/> ✅ Personalized Workout Plans
                  </p>
                  <p>
                    <Check/> 🏋️ Certified Trainers
                  </p>
                  <p>
                    <Check/> ⏰ Flexible Timings
                  </p>
                  <p>
                    <Check/> 🧘 Free Yoga & Zumba Sessions
                  </p>
                  <p>
                    <Check/> 📱 Mobile App Support
                  </p>
                  <p>
                    <Check/> 🏆 Monthly Fitness Challenges
                  </p>
                  <Link to={"/"}>Join Now</Link>
                </div>
              </div>
            )
          })
        }
      </div>
      
    </section>
  )
}

export default Pricing
