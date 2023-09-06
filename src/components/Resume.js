import data from './data.json';
const Resume = () =>{
    const { resume_summary } = data;
    const info = Object.keys(resume_summary);
    return (
        <section className="p-5 p-md-4">
            <div className="pt-4">
            <h1 className="text-md-start text-center text-dark py-4"><span className='border-bottom border-2 border-primary-subtle py'>Experience</span></h1>
            <p className="about-p">Here, I'd like to share a glimpse of some of my experiences along this journey</p>
            </div>
            <div className='d-flex flex-column flex-md-row gap-2 px-md-2'>
            {info.map((item) => (
                    <div className="flex-card p-4 col-md-4 " key={item}>
                        <h6 className='text-center text-md-center text-dark'><i className={`${resume_summary[item].icon} text-primary fs-5 px-2`}></i> {item}</h6>
                        <span className='text-start badge bg-dark text-light'>{resume_summary[item].Progress}</span>
                        <p className='about-p'>{resume_summary[item].description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Resume;