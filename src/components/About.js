import data from './data.json';
import image from '../assets/man.jpg';
const About = ()=>{
    const { resume } = data;
    return (
        <section className="About p-5 p-5 p-md-4">
            <div className='d-flex flex-column py-2'>
            <h1 className='py-2 text-center text-md-start'><span className='border-bottom border-2 border-primary-subtle py'>About</span></h1>
            <p className='about-first-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio quo molestiae quod necessitatibus quibusdam libero iure odio cupiditate quae repellat asperiores soluta. Quia quis, vel iste distinctio architecto unde.</p>
            </div>
            <div className="d-flex flex-md-row flex-column">
                <div className="about-img pe-4">
                    <img src={image} className='img-fluid' alt="profile" />
                </div>
                <div className="about-more py-4 py-md-0">
                    <h2 className='text-dark'>Front End Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et, cupiditate eveniet molestias quas exercitationem praesentium cumque itaque magni beatae nihil possimus mollitia ea nemo ab autem alias iste ipsam.</p>
                    <ul className='address list-group py-md-4'>
                        {
                            Object.entries(resume).map(([item, value])=>{
                                return ( <li className='list fw-medium' key={item}><i className="fa-solid fa-angle-right text-primary" /> <span className='fw-semibold'>{item}</span>: {value}</li> )
                            })
                        }
                    </ul>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, eaque doloremque ea culpa eos repellendus enim porro est fuga saepe doloribus nobis possimus unde molestias consequatur a dolorum, aperiam officia?</p>
                </div>
            </div>
        </section>
    )
}
export default About;