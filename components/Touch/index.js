export default function Touch(){
    const year = new Date().getFullYear()
    return (
        <section id="touch">
            <p>Copyright © {year} Araser SRL</p>
            <div>
                <p>Desarrollado por</p>
                <a href='https://www.touchandgrow.com.ar/' rel='noopener noreferrer' target='_blank'>
                    <img src="/touch.svg" alt="Touch logo"/>
                </a>
            </div>
        </section>
    )
}