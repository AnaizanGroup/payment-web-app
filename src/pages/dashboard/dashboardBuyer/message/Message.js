import React, { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { HeadTabs } from "../../../../components/headTab2/HeadTab2"

import "./Message.scss"

const MessageBuyer = () => {
    const [index, setIndex] = useState(0)
    const [boxAns, isBoxAns] = useState(0)

    const [idAns, setIdAns] = useState()
    const [idMsg, setIdMsg] = useState()
    const [authors, setAuthors] = useState()
    const [date, setDate] = useState()
    const [msgs, setMsgs] = useState()
    const [ans, setAns] = useState()

    const active = {
        color: 'var(--orange)'
    }

    const message = [
        {
            idMsg: 1,
            auteur: 'Jean Hugues HOUISSON',
            date: '12/02/2023 à 12h35',
            message: 'Salut mec. bien ou quoi ? tranquille ?',
            status: '0',
            rep: '0'
        },
        {
            idMsg: 2,
            auteur: 'AMEDEE LOUGBENON',
            date: '12/02/2023 à 12h35',
            message: 'Salut mec. tranquille ?',
            status: '1',
            rep: '1'
        },
    ]
    const [msg, setMsg] = useState(message)
    const showMessage = (index) => {
        setIndex(index)
        if (index == 1) {
            const tab = message.find(
                (item) => item.status == 1
            )
            setMsg([tab])
        } else {
            setMsg(message)
        }
    }

    const showBoxAns = (id, author, date, msg) => {
        isBoxAns(true)
        setAuthors(author)
        setDate(date)
        setMsgs(msg)
        setIdMsg(id)
    }

    return (
        <div className="msg-dashboard-buyer">
            <HeadTabs title={"Mes Messages"} />
            <div className="message-block-parent parent">
                <div className="head-block-msg">
                    <button style={index == 0 ? active : null}
                        onClick={() => showMessage(0)}> Tout les messages({message.length})</button>
                    <button style={index == 1 ? active : null}
                        onClick={() => showMessage(1)}> Message non lu(0)</button>
                </div>
                <div className="block-message">
                    <div className="messages">
                        {msg && (
                            msg.map((list, index) => {
                                return <div className="msg-box" key={index}
                                    onClick={() => showBoxAns(list.idMsg, list.auteur, list.date,
                                        list.message)}>
                                    <p className="head-msg">
                                        <span className="author">
                                            <FaUserCircle />
                                            <span> {list.auteur} </span>
                                        </span>
                                        <li> {list.date} </li>
                                    </p>
                                    <p className="msg"> {list.message} </p>
                                </div>
                            })
                        )}
                    </div>
                </div>
            </div>
            <div className="block-field-rep"
                style={boxAns ? { display: 'block' } : { display: 'none' }}>
                <span className="close"
                    onClick={() => isBoxAns(false)}> &times;</span>
                <h4>
                    Répondre à {authors}
                </h4>
                <div className="msg">
                    <b>Message:</b>
                    <p> {msgs} </p>
                </div>
                <div className="field">
                    <textarea cols={6} rows={8}
                        placeholder="Entré votre réponse"
                        value={ans}
                        onChange={e => e.target.value}></textarea>
                    <button>Envoyé</button>
                </div>
            </div>
        </div>
    )
}

export default MessageBuyer;