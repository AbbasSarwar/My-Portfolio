const Contact = ()=>{
    const Submithandle = (e) => {
        e.preventDefault();
    } 
    return (
        <section className="d-flex flex-column text-light justify-content-center align-items-center bg-primary py-5 py-md-5">
            <h1 className="pt-5"><span className="border-bottom border-2 border-primary-subtle py">Contact me</span></h1>
            <p className="col-md-6 col-8 fw-semibold">If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it</p>
            <form onSubmit={Submithandle} action="" className="d-flex flex-column col-md-6 col-8 gap-2 form">
                <input type="text" class="form-control" name="name" placeholder="Full Name"/>
                <input type="email" class="form-control" placeholder="Email" name="email" />
                <textarea name="text" class="form-control" cols="30" placeholder="Text" rows="10"></textarea>
                <div className="d-flex justify-content-center">
                <input type="submit" value="Submit" className="button col-4" />
                </div>
            </form>
        </section>
    )
}

export default Contact;