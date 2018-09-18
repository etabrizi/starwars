import Layout from '../components/layout'

const About = () => (
    <Layout>
        <div>
            <p className="animated fadeInUp">"It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. </p>
            <style jsx>{`
            p { 
                color: #FFE81F;  
                padding: 40px;
                text-align: center;      
         }
        `}</style>
        </div>
    </Layout>)

export default About;