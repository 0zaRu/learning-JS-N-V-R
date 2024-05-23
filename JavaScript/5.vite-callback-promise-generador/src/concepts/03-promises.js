import {heroes} from "../heroes.js";

/**
 * @param {HTMLDivElement} element
 * */
export const promiseComponent =  (element) => {
    console.log('promiseComponent')

    const renderHero = (hero) => {
        element.innerHTML = hero.name
    }

    const  renderError = (error) => {
        element.innerHTML = `
            <h3>${error}</h3>
        `
    }

    const render2Hero = (hero1, hero2) => {
        element.innerHTML = `${hero1.name} -- ${hero2.name}`
    }


    const id1 = "5d86371f1efebc31def272e2"
    const id2 = "5d86371fd55e2e2a30fe1ccb2"

    findHero(id1)
        .then( hero1 => {

            findHero(id2)
                .then ( hero2 => {

                    render2Hero(hero1, hero2)

                })
                .catch(renderError)

        })
        .catch(renderError)


    // FORMATO RESUMIDO
    // SEPASA SOLO LA FUNCIÓN, INTERPRETANDO JAVASCRIPT QUE DEBE PASAR A ESA FUNCIÓN LAS VARIABLES ANTERIORES DE FORMA AUTOMÁTICA

    //findHero(id1).then(renderHero)

}

/**
 * @param {String} id
 * @return {Promise}
 * */
const findHero = ( id ) => {

    return new Promise((resolve, reject) => {

        const hero = heroes.find( hero => hero.id === id)

        if (hero)
            resolve(hero)
        else
            reject(`Heroe con id ${id} no se ha encontrado`)
    })
}