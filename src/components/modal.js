import React from "react";
import "../styles/modal.css";

function Modal(props) {
	return (
		<div
			className={`modal ${props.show ? "show" : ``}`}
			onClick={props.onClose}
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button onClick={props.onClose} className="modal-button">
					x
				</button>
				<div className="modal-text">{props.children}</div>
			</div>
		</div>
	);
}

export default Modal;
