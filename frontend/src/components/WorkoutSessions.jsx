import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Unlock your full potential with expert-designed sessions that target every major
         muscle group — perfect for building strength, burning fat, and staying motivated.
        </p>
        <img src='/img5.jpg' alt='workout' />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Intense. Focused. Transformational — these bootcamps are built to challenge
         your limits and reshape your body.
        </p>
        <div className="bootcamps">
          <div>
            <h4>🏁 1. Fitness Kickstart (Beginner)</h4>
            <p>
            Start strong with foundational exercises that build your fitness, improve flexibility,
             and boost confidence.
            </p>
          </div>

          <div>
            <h4>💪 2. Strength Surge (Intermediate)</h4>
            <p>
            Elevate your strength with bodyweight exercises, light lifting, and functional
             training to build muscle and endurance.
            </p>
          </div>

          <div>
            <h4>⚡ 3. Power Push (Advanced)</h4>
            <p>
            Challenge your limits with intense workouts designed to enhance strength, speed,
             and overall performance.
            </p>
          </div>

          <div>
            <h4>🏆 4. Peak Performance (Expert)</h4>
            <p>
            Reach your highest potential with expert-level workouts focused on maximum strength,
             power, and athletic conditioning.
            </p>
          </div>
          <div>
            <h4>💥 5. Body Sculpt (For Every Athlete).</h4>
            <p>
            Shape, tone, and strengthen your body with a combination of functional exercises and 
            targeted routines designed to get results for every fitness enthusiast.
            </p>
          </div>
          <div>
            <h4>🔥 6. Total Transformation (All Levels)</h4>
            <p>
            Achieve lasting results with a mix of strength, endurance, and fat-burning exercises.
             Perfect for anyone ready to transform their body and mindset.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default WorkoutSessions
