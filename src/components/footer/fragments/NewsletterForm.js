import "../Footer.scss"

export const Newsletter = () => {
    return (
        <>
            <div className="newsletter">
                <p> Connectez-vous à nos nouvelles publication</p>
                <form>
                    <input type="email" placeholder="Votre e-mail" />
                    <button> Envoyer </button>
                </form>
            </div>
        </>
    )
}