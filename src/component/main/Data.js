
import playrom from '../../assets/PL3.png'
import purist from '../../assets/pl4.png'
import makerkit from '../../assets/m9.png'
import storeDesign from "../../assets/audiophile.png"
import reactIcon from '../../assets/react.svg'
import tailwindIcon from '../../assets/tailwind.png'
import nextjsIcon from '../../assets/next-js.svg'
import stripeIcon from '../../assets/stripe.svg'
import supabaseIcon from '../../assets/supabase.png'
import reactqueryIcon from '../../assets/react-query.svg'





export const data=[
  
    {
        name:"Playroom platform",
        src:playrom,
        desc:" Playroom is a platform provides scalable multiplayer backend and cross-platform integrations for web-based games. Build effortlessly with zero server setup. and I was the only developper that have created all the front end with React js and tailwind css for the platform application  ",
        technologie:[{name:"React",icon:reactIcon},{name:"Tailwind ",icon:tailwindIcon}],
        demoLink:'https://playroom-www-v2.pages.dev/',
        githubLink:'https://github.com/asadm/playroom-www-v2',
      

       },
    {
     name:"Customer Dashboard Portal",
     src: purist,
     desc:"Pursit Portal is a user-friendly platform designed to assist Pursit startup users in managing their subscriptions. With this portal, users can easily change their plans, reset their passwords or email addresses, and upgrade or downgrade their plans.",
     technologie:[{name:"Next js",icon:nextjsIcon},{name:"Tailwind ",icon:tailwindIcon},{name:"Supabase ",icon:supabaseIcon},{name:"Stripe ",icon:stripeIcon}],
     demoLink:'https://purist-olive.vercel.app/',
     githubLink:'https://github.com/zhucode/purist',
      
    },
  
    {
        name:"Makerkit Sass Starter clone",
        src:makerkit,
        desc:"makerkit is a SaaS Starter includes all the essential tools and resources you need to launch your project. with already built user authentication ,user profil sesttings ,dashboard panel and so much ,more ... !",
        technologie:[{name:"React",icon:reactIcon},{name:"Tailwind ",icon:tailwindIcon},{name:"Supabase ",icon:supabaseIcon},{name:"React Query ",icon:reactqueryIcon}],
        demoLink:'https://makerkitv2.netlify.app',
        githubLink:'https://github.com/elghanbibadr/makerkit1',
        
       },
   
    {
        name:" Ecommerce Store",
        src:storeDesign,
        desc:"audiophile ecommerce store is an app that allows user to chose multiple items and add them to cart and store the chosesn item to local storage of their browser so if they refresh the browser the selected won't get lost",
        technologie:[{name:"React",icon:reactIcon},{name:"Tailwind ",icon:tailwindIcon}],
        demoLink:'https://audiophilestore1.netlify.app',
        githubLink:'https://github.com/elghanbibadr/autophileEcommerce',

       },
   
]