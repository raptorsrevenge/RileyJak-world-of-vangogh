import React, { useState } from "react";
import Header from "../common/header";
import Modal from "../components/modal";
import "../styles/read.css";
import "../styles/modal.css";

import letter from "../assets/icons/letter.svg";

function Read() {
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [show4, setShow4] = useState(false);
	const [show5, setShow5] = useState(false);
	const [show6, setShow6] = useState(false);
	const [show7, setShow7] = useState(false);
	const [show8, setShow8] = useState(false);
	const [show9, setShow9] = useState(false);
	const [show10, setShow10] = useState(false);
	return (
		<>
			<Header />
			<div className="letter-container">
				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow1(true)}
				/>
				<Modal onClose={() => setShow1(false)} show={show1}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						Love many things, for therein lies the true strength, and whosoever
						loves much performs much, and can accomplish much, and what is done
						in love is done well.
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow2(true)}
				/>
				<Modal onClose={() => setShow2(false)} show={show2}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						A great fire burns within me, but no one stops to warm themselves at
						it, and passers-by only see a wisp of smoke
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow3(true)}
				/>
				<Modal onClose={() => setShow3(false)} show={show3}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						If you hear a voice within you say you cannot paint, then by all
						means paint and that voice will be silenced.
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow4(true)}
				/>
				<Modal onClose={() => setShow4(false)} show={show4}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						Close friends are truly life's treasures. Sometimes they know us
						better than we know ourselves. With gentle honesty, they are there
						to guide and support us, to share our laughter and our tears. Their
						presence reminds us that we are never really alone.
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow5(true)}
				/>
				<Modal onClose={() => setShow5(false)} show={show5}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						If I am worth anything later, I am worth something now. For wheat is
						wheat, even if people think it is a grass in the beginning.
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow6(true)}
				/>
				<Modal onClose={() => setShow6(false)} show={show6}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						The heart of man is very much like the sea, it has its storms, it
						has its tides and in its depths it has its pearls too
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow7(true)}
				/>
				<Modal onClose={() => setShow7(false)} show={show7}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						Your profession is not what brings home your weekly paycheck, your
						profession is what you're put here on earth to do, with such passion
						and such intensity that it becomes spiritual in calling.
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow8(true)}
				/>
				<Modal onClose={() => setShow8(false)} show={show8}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						Let us keep courage and try to be patient and gentle. And let us not
						mind being eccentric, and make distinction between good and evil.
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow9(true)}
				/>
				<Modal onClose={() => setShow9(false)} show={show9}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						I experience a period of frightening clarity in those moments when
						nature is so beautiful. I am no longer sure of myself, and the
						paintings appear as in a dream.
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>

				<img
					src={letter}
					alt="envelope"
					className="letter-button"
					onClick={() => setShow10(true)}
				/>
				<Modal onClose={() => setShow10(false)} show={show10}>
					<h3 className="dear-read">Dear Friend,</h3>
					<p className="message">
						The more ugly, old, nasty, ill, and poor I become the more I want to
						get my own back by producing vibrant, well-arranged, radiant colour.
					</p>
					<h3 className="end-read">Yours Truly,</h3>
					<h3 className="end-read">Vincent</h3>
				</Modal>
			</div>
		</>
	);
}

export default Read;
