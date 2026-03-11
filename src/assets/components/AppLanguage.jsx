import { useState } from 'react'  /* we must import the useState following this command */
export function AppLanguage() { /* we export our component to reuse in main.jsx, before the return goes all our logic and function, also array and other data */
    const languages = [/* here we have our array */
        {
            id: 1,
            title: "HTML",
            description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
        },
        {
            id: 2,
            title: "CSS",
            description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
        },
        {
            id: 3,
            title: "JavaScript",
            description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
        },
        {
            id: 4,
            title: "Node.js",
            description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
        },
        {
            id: 5,
            title: "Express",
            description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
        },
        {
            id: 6,
            title: "ReactJS",
            description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
        }
    ];
    const [selected, setSelected] = useState(0) /* here we set our useState */

    return ( /* here we start working */
        <>
            <div className="h1">Learn Web Development</div> {/* simple header: h1 in a div */}
            <div className="container"> {/* bootstrap container start */}
                <div className="row rows-col-6"> {/* bootstrap row start */}
                    {languages.map((language) => ( /* here we use map on our array to cycle the objects */
                        <> {/* here i create another fragment to use more div inside the same map function */}
                            <div className="col"> {/* bootstrap col */}

                                <button key={language.id} onClick={() => setSelected(language.id)} className="buttons">{language.title}</button> {/* button manipulation. we use language.whatWeNeed to get data and dynamicly inject in html */}

                            </div >

                            <div className="text">{language.id == selected && language.description}</div> {/* here we must work with our other div, the text that must pop up when we press the button */}

                        </>
                    ))}
                </div>
            </div >


        </>
    )
}