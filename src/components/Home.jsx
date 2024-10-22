import React from 'react'
import { Navbar, Hero, Why, AddServices, Review, FAQ, FAQ2, Footer } from './'



function Home() {


    return (
        <>

            <div className="Namaste-Remittance m-auto flex flex-col h-screen">
                <Navbar />
                <Hero />
            </div>
            <Why />
            <AddServices />
            <Review />
            <FAQ />
            <FAQ2 />
            <Footer />
        </>
    )
}

export default Home