
export function Header() {

    return (
        <section id="header-section">
            <h1 className="bold-text page-title">kimberley rogers</h1>
            <p className="tiny email"><a href="mailto:kimberleymrogers@gmail.com" target="_blank">kimberleymrogers@gmail.com</a></p>
            <p className="tiny">0403 935 928</p>
            <div id="header-btn">
                {/* eslint-disable-next-line */}
                <a href="https://linkedin.com/in/kimberley-rogers-melb/" target="_blank"><button>Linkedin</button></a>
                {/* eslint-disable-next-line */}
                <a href="https://drive.google.com/file/d/1NxtMqLwFXU9YYYkybumtjfPjBqEpRXb5/view?usp=sharing" target="_blank"><button>Resume</button></a>
                {/* eslint-disable-next-line */}
                <a href="https://github.com/kimberleyrogers" target="_blank"><button>GitHub</button></a>
                {/* eslint-disable-next-line */}
                <a href="mailto:kimberleymrogers@gmail.com" target="_blank"><button>Email Me</button></a>
            </div>
            {/* <h6>resume?</h6> */}
        </section>
    )
}

