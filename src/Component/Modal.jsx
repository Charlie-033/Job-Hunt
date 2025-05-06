import React from "react";
import { useParams } from "react-router";

const Modal = ({job, id}) => {
    console.log(id);
    // const id = useParams();
    // console.log(id)
  return (
    
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{job.title}</p>
        </div>
      </dialog>
  );
};

export default Modal;
