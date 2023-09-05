import image from '../assets/man.jpg'
const About = ()=>{
    return (
        <section className="About">
            <h1><span>About</span></h1>
            <p className='about-first-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio quo molestiae quod necessitatibus quibusdam libero iure odio cupiditate quae repellat asperiores soluta. Quia quis, vel iste distinctio architecto unde.</p>

            <div className="about-details">
                <div className="about-img">
                    <img src={image} alt="profile" />
                </div>
                <div className="about-more">
                    <h2>Front End Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et, cupiditate eveniet molestias quas exercitationem praesentium cumque itaque magni beatae nihil possimus mollitia ea nemo ab autem alias iste ipsam.</p>
                    <ul className='address'>
                        <li><i class="fa-solid fa-angle-right" /> <span className='bold-about'>Experience</span>: 3y</li>
                        <li><i class="fa-solid fa-angle-right" /> <span className='bold-about'>Country</span>: Pakistan</li>
                        <li><i class="fa-solid fa-angle-right" /> <span className='bold-about'>Age</span>: 19</li>
                        <li><i class="fa-solid fa-angle-right" /> <span className='bold-about'>Available</span>: Yes</li>
                    </ul>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, eaque doloremque ea culpa eos repellendus enim porro est fuga saepe doloribus nobis possimus unde molestias consequatur a dolorum, aperiam officia?</p>
                </div>
            </div>
        </section>
    )
}
export default About;