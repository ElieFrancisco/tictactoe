import React from 'react';

function Mailbox(props){
    const messagesnonlus = props.messagesnonlus;
    return(
        <div>
            <h1>Hello!</h1>
            { messagesnonlus.length>0 &&
                <h2>
                    Vous avez {messagesnonlus.length} message(s) non lu(s).
                </h2>
                // <p>Voici les derniers messages non lus : </p><br/>
                // <p>{messagesnonlus[0]}</p>
                // <p>{messagesnonlus[1]}</p>
                // <p>{messagesnonlus[2]}</p>
            }
        </div>
    );
}

export default Mailbox;















