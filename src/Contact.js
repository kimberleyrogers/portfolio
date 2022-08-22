import { useState } from "react";

function Contact() {

    const [who, setWho] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    // another for radio buttons



    return (
        <div className="central-container">
            <h2>this is a contact form</h2>
            <form className="form">
                <label>Who are you?</label>
                <input
                    type="text"
                    required
                    value={who}
                    onChange = {(e) => setWho(e.target.value)}
                />
                
                <label>Contact email</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}

                />
                {/* radio buttons here */}
                <label>What kind of enquiry is this?</label>
                <div>
                    <p>Job Offer</p>
                    <p>Chance to Network</p>
                    <p>Salacious Gossip</p>
                    <p>Feedback or Comments</p>
                </div>
                <label>Talk to me...</label>
                <textarea
                    type="text"
                    required
                    value={comments}
                    onChange = {(e) => {setComments(e.target.value)}}
                />
            </form>
        </div>
    )

}

export default Contact