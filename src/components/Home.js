import parse from 'html-react-parser';
import data from './data.json';
const Home = ()=>{
    const {info} = data;
    return(
        <section className="Home">
            <h1>Hello, I am Abbas Sarwar</h1>
            <h2>{parse(info.bio)}</h2>
            <a href={info.main_social} className='connect'>Let's Connect</a>
        </section>
    )
}
export default Home;