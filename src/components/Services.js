import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const services = [
  {
    name: 'UI/UX Design',
    description: 'Crafting seamless and captivating user interfaces and experiences. Specializing in intuitive designs that exceed user expectations, whether for a website or mobile app, ensuring a delightful and engaging user journey.',
    link: 'Learn more'
},

{
    name: 'Development',
    description: 'Seasoned in full-stack web development, I create scalable and innovative digital solutions, balancing front-end finesse with back-end robustness to meet the diverse needs of modern businesses.',
    link: 'Learn more'
},

{
    name: '3D Projects',
    description: 'Specializing in 3D, I bring ideas to life through immersive architectural visualizations, captivating product animations, and crafting virtual environments. Experience extends to interactive simulations and engaging multimedia experiences.',
    link: 'Learn more'
},

{
    name: 'Digital Marketing',
    description: 'Strategically orchestrating compelling campaigns for top brands in the dynamic digital landscape. Enhancing brand visibility, driving engagement, and achieving measurable results through strategic storytelling and data-driven insights.',
    link: 'Learn more'
}
]

const Services = () => {
  return ( 
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Transforming Ideas into Digital Masterpieces, One Line of Code and Pixel at a Time.</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} 
        className='flex-1'>
          <div>
            {services.map((service, index) =>{
              const { name, description, link } = service
              return <div className='border-b border-white/20 h-[160px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='services' className='btn h-9 w-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </a>
                  <a href='services' className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
