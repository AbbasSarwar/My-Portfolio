import data from './data.json';
const About = ()=>{
    const { resume, info } = data;
    return (
        <section className="About p-5 p-md-4">
            <div className='d-flex flex-column py-2'>
            <h1 className='py-4 text-center text-md-start'><span className='border-bottom border-2 border-primary-subtle py'>About</span></h1>
            <p className='about-p'>Hello, I'm a web developer! I can help you build a product, feature, or website. Please take a look at some of my work and experience. If you like what you see and have a project you need coded, don't hesitate to contact me.</p>
            </div>
            <div className="d-flex flex-md-row flex-column">
                <div className="about-img pe-md-4">
                    <img src={info.picture} className='img-fluid' alt="profile" />
                </div>
                <div className="about-more py-4 py-md-0 text-justify">
                    <h2 className='text-dark'>Full-stack Developer</h2>
                    <p className='about-p'>Over 7 months of peer-to-peer programming experience through Zoom meetings, delivering high-quality products within tight deadlines, while maintaining continuous communication.</p>
                    <ul className='address list-group py-3 py-md-4'>
                        {
                            Object.entries(resume).map(([item, value])=>{
                                return ( <li className='list fw-medium' key={item}><i className="fa-solid fa-angle-right text-primary" /> <span className='fw-semibold'>{item}</span>: {value}</li> )
                            })
                        }
                    </ul>
                    <p className='about-p'>If you're filled with curiosity and a desire to bring your ideas to life, whether it's building a project together or considering me for your next hire, I'd love to hear from you. Let's connect and make your vision a reality!</p>
                </div>
            </div>
        </section>
    )
}
export default About;