import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ethers } from 'ethers';
import Header from '../components/header/Header';
import { Newsletters } from '../components/layouts/home/Newsletters';
import Footer from '../components/footer/FooterStyle2';
import ContractABI from '../contracts/contractAbi.json'


function PreSale() {

    const [Address , setAddress] =useState("")

// create a async function 
    // const AddressFunc = async () => {
       
    //     try {
    //         const data ="0x009Dddd6E6c46F1E9557fADfe643f655CC6A4eFb"
    //         const providers = new ethers.providers.Web3Provider(window.ethereum);
    //         const signer = providers.getSigner();
    //         const contract = new ethers.Contract(data, ContractABI, signer);
    //         console.log("checking contract")
    //         setAddress("Wait");
    //         const Sales = await contract.getPresalesByOwner();
    //         await Sales.wait();
    //         console.log(Sales)
    //         // setAddress(Sales);
    //   }
    //   catch {
    //     setAddress("Install Metamask");
    //   }
    // }

    const AddressFunc = async () => {
        try {
            const data = "0x009Dddd6E6c46F1E9557fADfe643f655CC6A4eFb";
            const providers = new ethers.providers.Web3Provider(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" }); 
            const signer = providers.getSigner();
            // const signerAddress = await signer.getAddress();
            // console.log(signerAddress)
            const contract = new ethers.Contract(data, ContractABI, signer);
            console.log("Checking contract...");
            setAddress("Please wait...");
            const sales = await contract.getPresalesByOwner();
            console.log("Sales:", sales[0]);
            console.log("Sales:", sales[1]);
            setAddress(sales[0]);
        } catch (error) {
            console.log(error);
            setAddress("Install Metamask");
        }
    };


  return (<>
    <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">PreSales</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Sales</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <TopSeller data={dataHotCollection2} /> */}
    <h1>working continue in morning</h1>


    <button onClick={AddressFunc} >Click ME:</button>
    <p>{Address}</p>
    
    <Newsletters />
    <Footer />
  </div>;
  </>
  )
}

export default PreSale