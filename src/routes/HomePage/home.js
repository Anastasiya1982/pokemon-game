import React, {useState} from "react";
import Header from "../../components/Header/header";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/footer";
import imgBg from "../../assets/bg3.jpg";





const HomePage=({ onChangePage })=>{

    const handlerClickBtn=(page)=>{
        console.log('HomePage');
        onChangePage&& onChangePage(page);
    }


    return (
        <>

            <Header title="Pockemon Game"
                    descr="This is the Game about Pokemons"
                    onClickBtn={handlerClickBtn}
            />

            <Layout id="1"
                    title="Rules"
                    urlBg={imgBg}
            >
                <p>  In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
            </Layout>

            <Layout id="2"
                    title="Cards"
                    colorBg="grey"
            >



            </Layout>
            <Layout id="3"
                    title="Layout3"
                    urlBg={imgBg}
            >

            </Layout>

            <Footer/>
        </>
    )
}
export default HomePage;
