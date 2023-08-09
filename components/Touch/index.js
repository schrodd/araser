export default function Touch(){
    const year = new Date().getFullYear()
    return (
        <section id="touch">
            <p>Copyright © {year} Araser SRL</p>
            <div>
                <p>Desarrollado por</p>
                <img src="/touch.svg" alt="Touch logo"/>
            </div>
        </section>
    )
}