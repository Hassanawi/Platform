import React, { useState } from 'react';
import { ethers } from 'ethers';
import moment from "moment"
import Abi from "../../../contracts/contractAbi.json";

// import img from '../../../assets/images/background/img-create-item.jpg';

const Create = () => {

    const [Address, setAddress] = useState("")
    const [presaleRate, setPresaleRate] = useState("");
    const [listingRate, setListingRate] = useState("");
    const [SoftCap, setSoftCap] = useState("");
    const [HardCap, setHardCap] = useState("");
    const [Minumum, setMinumum] = useState("");
    const [Maxumum, setMaxumum] = useState("");
    const [liquidity, setLiquidity] = useState("");
    const [datelock, setDateLock] = useState("");
    const [WhitelistUsers, setWhitelistUsers] = useState("");
    const [StartTime, setStartTime] = useState("");
    const [EndTime, setEndTime] = useState("");
    const [Status, setStatus] = useState("");
    const [TokenToSale, setTokenToSale] = useState("");
    const [CheckWhiteListUsers, setCheckWhiteListUsers] = useState("");

    async function getAllData(event) {
        event.preventDefault();
        // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // setAddress(accounts[0]);
        if (typeof window.ethereum !== 'undefined') {
            setStatus("Wait...")

            try {
                const data = "0xcEb2780C55D54C86F99f7505c04312B7448d5FBa";
                const providers = new ethers.providers.Web3Provider(window.ethereum);
                const signer = providers.getSigner();
                const contract = new ethers.Contract(data, Abi, signer);

                const sendTX = await contract.createPresale(
                    Address,   
                    presaleRate,
                    listingRate,
                    SoftCap,
                    HardCap,
                    Minumum,
                    Maxumum,
                    StartTime,
                    EndTime,
                    TokenToSale,
                    liquidity,
                    CheckWhiteListUsers,
                    [WhitelistUsers],
                    datelock

                )
                // await sendTX.wait()
                console.log(sendTX)
                const check = sendTX.toString()
                console.log(check)
                setStatus("successfully sent transaction")
            }
            catch (error) {
                if(Address === '' ) {
                    setStatus("Please fill all the fields")
                }
                
                else{
                    console.log(error)
                    setStatus("Error")
                }
            }
        }
    }


    const AddressFunc = (e) => {

        const data = e.target.value
        setAddress(data);
        console.log(data)

    }
    const persaleRateFunc = (e) => {

        const data = e.target.value
        setPresaleRate(data);
        console.log(data)

    }
    const listingRateFunc = (e) => {

        const data = e.target.value
        setListingRate(data);
        console.log(data)


    }
    const softCapFunc = (e) => {

        const data = e.target.value
        setSoftCap(data);
        console.log(data)

    }
    const hardCapFunc = (e) => {

        const data = e.target.value
        setHardCap(data);
        console.log(data)


    }
    const minumumFunc = (e) => {

        const data = e.target.value
        setMinumum(data);
        console.log(data)
    }
    const MaxumumFunc = (e) => {

        const data = e.target.value
        setMaxumum(data);
        console.log(data)
    }
    const liquidityFunc = (e) => {

        const data = e.target.value
        setLiquidity(data);
        console.log(data)
    }
    const datelockFunc = (e) => {

        const dateTimeValue = e.target.value;
        console.log("Selected date and time:", dateTimeValue);
        // parse the selected date and time string into a moment object using format 'YYYY-MM-DDTHH:mm'
        const selectedDateTime = moment(dateTimeValue, "YYYY-MM-DDTHH:mm");
        console.log("Selected date and time as moment object:", selectedDateTime);
        // convert the moment object to a unix timestamp in seconds
        const timestamp = selectedDateTime.unix();
        console.log("Unix timestamp:", timestamp);
        setDateLock(timestamp);

    }

    const WhitelistUsersFunc = (e) => {

        const data = e.target.value
        setWhitelistUsers(data);
        console.log(data)
    }

    const StartTimeFunc = (e) => {
        const dateTimeValue = e.target.value;
        console.log("Selected date and time:", dateTimeValue);
        // parse the selected date and time string into a moment object using format 'YYYY-MM-DDTHH:mm'
        const selectedDateTime = moment(dateTimeValue, "YYYY-MM-DDTHH:mm");
        console.log("Selected date and time as moment object:", selectedDateTime);
        // convert the moment object to a unix timestamp in seconds
        const timestamp = selectedDateTime.unix();
        console.log("Unix timestamp:", timestamp);
        setStartTime(timestamp);
    }
    const EndTimeFunc = (e) => {
        const dateTimeValue = e.target.value;
        console.log("Selected date and time:", dateTimeValue);
        // parse the selected date and time string into a moment object using format 'YYYY-MM-DDTHH:mm'
        const selectedDateTime = moment(dateTimeValue, "YYYY-MM-DDTHH:mm");
        console.log("Selected date and time as moment object:", selectedDateTime);
        // convert the moment object to a unix timestamp in seconds
        const timestamp = selectedDateTime.unix();
        console.log("Unix timestamp:", timestamp);
        setEndTime(timestamp);
    }
    const TokenToSaleFunc = (e) => {

        const data = e.target.value;
        setTokenToSale(data);
        console.log(data)
    }
    const CheckWhiteList = (event) => {
        setCheckWhiteListUsers(event.target.value);
        console.log(event.target.checked);
    }


    return (
        <section className="tf-section create-item pd-top-0 mg-t-40">
            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Create Presale</h3>
                                    <p className="desc">Create a custom presale for your token</p>
                                </div>
                                <form id="create-item-1" acceptCharset="utf-8">
                                    {/* <label className="uploadFile">
                                    <span className="filename">Choose Item</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label> */}
                                    <div className="input-group">
                                        <input value={Address} onChange={AddressFunc} name="text" type="text" placeholder="Contract Address" required />

                                    </div>
                                    <p className="desc"> .</p>
                                    <h4 className="desc">⫸ Presale Details</h4>
                                    <p className="desc"> .</p>
                                    <p className="desc">The Presale Rate defines how many tokens contributors get per BNB, the listing Rate sets how many tokens per BNB on PancakeSwap</p>
                                    <div className="input-group">
                                        <input value={presaleRate} onChange={persaleRateFunc} name="number" type="number" placeholder="Presale Rate" required />
                                        <input value={listingRate} onChange={listingRateFunc} name="number" type="number" placeholder="Listing Rate" required />
                                    </div>
                                    <p className="desc">SoftCap is the minimum amount required for a successful presale, HardCap is the target limit of raised capital</p>
                                    <div className="input-group">
                                        <input value={SoftCap} onChange={softCapFunc} name="number" type="number" placeholder="Softcap" required />
                                        <input value={HardCap} onChange={hardCapFunc} name="number" type="number" placeholder="Hardcap" required />
                                    </div>
                                    <p className="desc">Minimum and maximum BNB each wallet can contribute</p>
                                    <div className="input-group">
                                        <input value={Minumum} onChange={minumumFunc} name="number" type="number" placeholder="Minumum" required />
                                        <input value={Maxumum} onChange={MaxumumFunc} name="number" type="number" placeholder="Maximum" required />
                                    </div>

                                    <p className="desc">Liquidity % going to PancakeSwap and its unlock date</p>
                                    <div className="input-group">
                                        <input value={liquidity} onChange={liquidityFunc} name="number" type="number" placeholder="Liquidity % for PancakeSwap" required />
                                        <input  onChange={datelockFunc} name="date" type="datetime-local" placeholder="Unlock Date" required />
                                    </div>
                                    <div className="input-group style-2 ">
                                        <div className="btn-check">
                                            <input
                                                type="radio"
                                                id="sale"
                                                name="fav_language"
                                                value="whitelistPresale"
                                                checked={CheckWhiteListUsers === "whitelistPresale"}
                                                onChange={CheckWhiteList}
                                            />
                                            <label htmlFor="sale">Whitelist Presale</label>
                                        </div>
                                        {/* <div className="btn-check">
                                        <input type="radio" id="sale" name="fav_language" />
                                        <label  htmlFor="sale">Whitelist Presale</label>
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
                                    <textarea value={WhitelistUsers} onChange={WhitelistUsersFunc} id="comment-message" name="message" tabIndex="4"
                                        placeholder="Whitelisted Wallet Address list" aria-required="true"></textarea>

                                    <p className="desc"> .</p>
                                    <h4 className="desc">⫸ Presale Schedule</h4>
                                    <p className="desc"> .</p>
                                    <p className="desc">Start Time:</p>
                                    <div className="input-group">
                                        <input onChange={StartTimeFunc} type="datetime-local" required />
                                    </div>
                                    <p className="desc">End Time:</p>
                                    <div className="input-group">
                                        <input onChange={EndTimeFunc} type="datetime-local" required />
                                    </div>
                                    <p className="desc">Token to sale:</p>
                                    <div className="input-group">
                                        <input value={TokenToSale} onChange={TokenToSaleFunc} type="number" required />
                                    </div>

                                    {/* //above data use in blockchain   */}
                                    <p className="desc"> .</p>
                                    <h4 className="desc">⫸ Project Details</h4>
                                    <p className="desc"> .</p>
                                    <p className="desc">Enter your project details</p>
                                    <div className="input-group">
                                        <input id="comment-message" name="message" type="text" placeholder="Project Name" required />
                                    </div>
                                    <div className="input-group">
                                        <textarea id="comment-message" name="message" tabIndex="4"
                                            placeholder="Project Description" aria-required="true"></textarea>
                                    </div>
                                    <div className="input-group">
                                        <input id="comment-message" name="message" type="text" placeholder="Website Link" required />
                                        <label className="uploadFile">
                                            <span className="filename">Upload Logo</span>
                                            <input type="file" className="inputfile form-control" name="file" />
                                            <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                        </label>
                                    </div>
                                    <p className="desc">Add link to your project's introduction YouTube video to be embedded on your presale page</p>
                                    <div className="input-group">
                                        <input id="comment-message" name="message" type="text" placeholder="Introductory Video Link" required />
                                    </div>
                                    <p className="desc">Add your social links</p>
                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="YouTube" required />
                                        <input name="name" type="text" placeholder="Twitter" required />
                                    </div>
                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="Telegram" required />
                                        <input name="name" type="text" placeholder="Discord" required />
                                    </div>
                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="Github" required />
                                        <input name="name" type="text" placeholder="Instagram" required />
                                    </div>
                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="LinkedIn" required />
                                        <input name="name" type="text" placeholder="Reddit" required />
                                    </div>



                                    {/* <div className="input-group">
                                    <input name="name" type="text" placeholder="Audit Report Link" required />
                                    <label className="uploadFile">
                                    <span className="filename">Upload PDF</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label>
                                    <input name="number" type="text" placeholder="Start date" required />
                                </div> */}


                                    <button onClick={getAllData} name="submit" id="submit"
                                        className="sc-button style letter style-2"><span>Create Presale</span> </button>
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
