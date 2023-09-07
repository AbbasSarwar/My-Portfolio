import React from "react";
import data from "../data.json";


const Modal = ({ closeModal, infodata }) => {
  const { portfolio } = data;

  return (
    <section className="flex-modal modal border d-flex flex-column px-4 py-2">
      <i
        className="fa-sharp fa-solid fa-xmark p-2 fs-3 align-self-end"
        onClick={closeModal}
      ></i>
      <div className="d-flex flex-column h-100">
        <h1 className="text-center text-md-start py-2">{infodata}</h1>
        <ul className="d-flex flex-row gap-2 p-0 justify-content-center justify-content-md-start">
          {portfolio[infodata].stack.map((i) => (
            <li key={i} className="badge text-dark bg-info">
              {i}
            </li>
          ))}
        </ul>
        <img
          className="img-fluid rounded-1 mx-auto w-75"
          src={portfolio[infodata].Picture}
          alt=""
        />
        <p className="p-2 ">{portfolio[infodata].description}</p>
        <ul className="d-flex flex-wrap gap-md-2 gap-2 justify-content-center justify-content-md-end px-0 py-2">
          {portfolio[infodata].stacks.map((i) => (
            <li key={i} className="badge text-light bg-primary">
              {i}
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-md-end justify-content-center align-items-end gap-2">
          {portfolio[infodata].Live? (<a href={portfolio[infodata].Live} className="btn btn-primary">
            See Live
          </a>) : (<a href={portfolio[infodata].Live} className="btn btn-primary">
            No Live
          </a>)}
          <a href={portfolio[infodata].source_link} className="btn btn-primary">
            See Source
          </a>
        </div>
      </div>
    </section>
  );
};

export default Modal;
