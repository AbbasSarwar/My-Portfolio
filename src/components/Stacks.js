import ProgressBar from "@ramonak/react-progress-bar";
import data from './data.json';
const Stacks = () =>{
    const { Stacks } = data;
    const info = Object.entries(Stacks);
    return (
        <section className='d-flex w-100 flex-column py-5 p-md-4 px-2'>
            <h1 className='py-4 text-md-start text-center '><span className="border-bottom border-2 border-primary-subtle py">Stacks</span></h1>
            <div className='d-flex flex-column h-100 gap-4 px-2'>
                {
                    info.map(([cat, item])=>(
                        <div className='flex-card w-100 p-2'>
                        <h2>{cat}</h2>
                        <ul className='px-2'>
                            {item.list.map((i, index)=>(
                                <li className="d-flex gap-1 flex-column" key={index}> <span className="fsize">{i}</span> <ProgressBar bgColor="purple" completed={100} /></li>
                            ))}
                        </ul>
                    </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Stacks;