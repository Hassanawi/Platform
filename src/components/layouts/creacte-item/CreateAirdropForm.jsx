import React, { useState } from 'react';
// import img from '../../../assets/images/background/img-create-item.jpg'
import { ethers } from 'ethers';
import Abi from "../../../contracts/AirdropAbi.json"

const Create = () => {
    const [tokenAddress , setTokenAddress] = useState("");
    const [tokenAmount , setTokenAmount] = useState();
    const [walletAddressList , setWalletAddressList] = useState();
    const [Status , setStatus] =useState("")
    
    async function GetAirDrop(event) {
        event.preventDefault();
        if (typeof window.ethereum !== 'undefined') {
            setStatus("Wait...")

            try {
                const data = "0x53332Da74003640B6e93D80dCCe9Ab2ABB3c745b";
                const providers = new ethers.providers.Web3Provider(window.ethereum);
                const signer = providers.getSigner();
                const contract = new ethers.Contract(data, Abi, signer);

                const sendTX = await contract.createAirdrop(tokenAddress, [walletAddressList], tokenAmount)
                // await sendTX.wait()
                console.log(sendTX)
                const check = sendTX.toString()
                console.log(check)
                setStatus("Succesfully sent transaction")
            }
            catch (error) {
                console.log(error)
                setStatus("Somethigng went wrong.")
            }
        }
    }

    const TokenAddressFunc = (e)=>{
        const data = e.target.value;
        setTokenAddress(data);
        console.log (data);
    }
    const tokenAmountFunc = (e) => {
        const data = e.target.value;
        setTokenAmount(data);
        console.log (data);
    }
    const walletAddressListFunc = (e) => {
        const data = e.target.value;
        setWalletAddressList(data);
        console.log (data);
    }

return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Airdrop</h3>
                                <p className="desc">Airdrop tokens to your userbase!</p>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                {/* <label className="uploadFile">
                                    <span className="filename">Choose Item</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label> */}
                                {/* <div className="input-group">
                                    <input id="comment-message" name="message" type="text" placeholder="Project Name" required />
                                    
                                </div> */}
                                <div className="input-group">
                                    <input value={tokenAddress} onChange={TokenAddressFunc} name="number" type="text" placeholder="Token Address" required />
                                    {/* <input name="number" type="text" placeholder="Rate (1 BNB = ??? tokens)"
                                        required /> */}
                                </div>
                                <div className="input-group">
                                    <input value={tokenAmount} onChange={tokenAmountFunc} name="number" type="number" placeholder="Token Amount" required />
                                    {/* <input name="number" type="text" placeholder="Hardcap" required /> */}
                                </div>
                                {/* <div className="input-group">
                                    <input name="name" type="text" placeholder="Liquidity %" required />
                                    <input name="number" type="text" placeholder="Start date"
                                        required />
                                </div> */}
                                <textarea value={walletAddressList} onChange={walletAddressListFunc} id="comment-message" name="message" tabIndex="4"
                                    placeholder="Wallet Address List" aria-required="true"></textarea>
                                <div className="input-group style-2 ">
                                    {/* <div className="btn-check">
                                        <input type="radio" id="sale" name="fav_language" />
                                        <label htmlFor="sale">Whitelist</label>
                                    </div> */}
                                    {/* <div className="btn-check">
                                        <input type="radio" id="price" name="fav_language" />
                                        <label htmlFor="price">
                                            Instant Sale Price
                                        </label>
                                    </div>
                                    <div className="btn-check">
                                        <input type="radio" id="purchase" name="fav_language" />
                                        <label htmlFor="purchase">
                                            Unlock Purchased
                                        </label>
                                    </div> */}
                                </div>
                                <button onClick={GetAirDrop} name="submit" id="submit"
                                    className="sc-button style letter style-2"><span>Send Airdrop</span> </button>
                                    <p>{Status}</p>
                            </form>
                        </div>
                        {/* <div className="form-background">
                            <img src={img} alt="Bidzen" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Create;
