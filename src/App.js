import React from'react';
import Header from "./components/Header/header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/footer";
import imgBg from "./assets/bg3.jpg";



const App=()=>{
    return(
        <>
          <Header title="Title"
          descr="This is the description of the header"/>
           <Layout id="1"
                    title="Layout1"
                    descr="This is decription of the layout1"
                    urlBg={imgBg}


           />
           <Layout id="2"
                   title="Layout2"
                   descr="This is decription of the layout2"
                   colorBg="grey"

           />
           <Layout id="3"
                   title="Layout3"
                   descr="This is decription of the layout3"
                   urlBg={imgBg}
                    />
           <Footer />
        </>
    )
}
export default App;
