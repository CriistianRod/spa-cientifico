import getData from '../utils/getData'

const Home =  async () => {
    const characters = await getData()

    const view = /*html*/`
    <h1>Total resultados: ${characters.results.length}</h1>
    <section class="Characters">
    ${characters.results.map(character => /*html*/`
        <article class="Character-item">
            <p>${character.id}</p>
            <a href="#/${character.id}/">
                <img src=${character.image} alt=${character.name}/>
                <h2>${character.name}</h2>
            </a>
        </article>
    `).join('')}
    </section>
    `

    return view
}

export default Home