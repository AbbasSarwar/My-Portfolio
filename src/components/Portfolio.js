import { useState } from "react";
import Modal from "./modals/Modal";
import data from "./data.json";
const Portfolio = () => {
  const { portfolio } = data;
  const [modal, setModal] = useState(false);
  const [infodata, setinfodata] = useState(null);
  const info = Object.keys(portfolio);

  const modalOpen = (item) => {
    setModal(true);
    setinfodata(item);
  };
  const closeModal = () => {
    setModal(false);
    setinfodata(null);
  };
  return (
    <section className="py-5 p-md-4">
      <h1 className="text-dark py-4"><span className="border-bottom border-2 border-primary-subtle py">Portfolio</span></h1>
      <div className="container d-flex gap-md-3 gap-3 flex-column">
        {info.map((item) => (
          <div
            className="flex-cards d-flex flex-column flex-md-row px-2 py-4 "
            key={item}
          >
            <div className="col-md-4">
              <img
                className="img-fluid rounded-1"
                src={portfolio[item].Picture}
                alt="Portfolio"
              />
            </div>
            <div className="col-md-8 d-flex flex-column px-md-3 w-md-100">
              <h2 className="text-center text-md-start">{item}</h2>
              <ul className="d-flex flex-row gap-2 p-0 justify-content-center justify-content-md-start">
                {portfolio[item].stack.map((i) => (
                  <li key={i} className="badge text-light bg-info">
                    {i}
                  </li>
                ))}
              </ul>
              <p className="about-p">{portfolio[item].description}</p>
              <ul className="d-flex flex-wrap gap-md-2 gap-2 justify-content-center justify-content-md-start px-0 py-2">
                {portfolio[item].stacks.map((i) => (
                  <li key={i} className="badge text-light bg-primary">
                    {i}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  modalOpen(item);
                }}
                className="button col-6 col-md-3 align-self-center align-self-md-start"
              >
                See Project
              </button>
            </div>
          </div>
        ))}
        {modal && <Modal closeModal={closeModal} infodata={infodata} />}
      </div>
    </section>
  );
};
export default Portfolio;
