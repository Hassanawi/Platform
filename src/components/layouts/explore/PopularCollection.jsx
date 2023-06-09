import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import { ethers } from 'ethers';
import ContractABI from "../../../contracts/contractAbi.json"
// import { Dropdown } from 'react-bootstrap';

const PopularCollection = props => {
    const data = props.data;
    const [tokenAddress , setTokenAddress] = useState("");
    const [visible , setVisible] = useState(12);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    function tokenAddressFunc(e){
        setTokenAddress(e.target.value)
    }


    const AddressFunc = async () => {
        if (typeof window.ethereum !== "undefined") {
          try {
            const data = "0x009Dddd6E6c46F1E9557fADfe643f655CC6A4eFb";
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" }); // prompt user to connect to Metamask
            const signer = provider.getSigner();
            // const signerAddress = await signer.getAddress();
            // console.log(signerAddress)
            const contract = new ethers.Contract(data, ContractABI, signer);
            console.log("Checking contract...");
            const sales = await contract.presales(tokenAddress);
            console.log("Sales:", sales);

            const unixTimestamp = parseInt(sales.endTime, 16) / 1000; // Convert hexadecimal timestamp to Unix timestamp

            const date = new Date(unixTimestamp * 1000); // Create a new Date object with the Unix timestamp value

            const year = date.getFullYear();
            const month = date.getMonth() + 1; // Add 1 because getMonth() returns a zero-based index
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            const humanTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
            // setAddress(sales);
            console.log(humanTime)
            
          } catch (error) {
            console.log(error);
            // setAddress("Install Metamask");
          }
        }
        else {
          console.log("Metamask not detected");
        }
      };
      

    // const [presaleStatus, setPresaleSatus] = userState('Upcoming')
  return (
    <>
    <input value={tokenAddress} onChange={tokenAddressFunc} type="text" placeholder='Enter token Address' />
    <button onClick={AddressFunc}>Click Me</button>
    <section className="tf-section trendy-colection-page style-2">
        <div className="container">
            <div className="row">

               
                {/* <div className="col-md-12">
                    <div className="wg-drop-category seclect-box">
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>All Categories</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>NFT</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Crypto</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Token</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>New Items</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>New bestsellers</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>New releases</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Buy Now</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>Wallet</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Website</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Sort By</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>View</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Rating</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Sale</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Date</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="sc-button style letter style-2"><span>Filter</span> </button>
                    </div>
                </div> */}
                {
                    data.slice(0,visible).map((item,index)=> (
                        <div key={index} className="fl-item col-xl-3 col-lg-4 col-md-6">
                            <div className="sc-product-item style-5">
                            <div className="product-img">
                                    
                                    {/* <Link to="/connect-wallet"
                                        className="sc-button style letter"><span>View presale</span>
                                    </Link> */}
                                    <label>{item.tags}</label>
                                    
                                </div>
                                <div className="product-content">
                                    
                                    <div className="product-author flex">
                                        <div className="avatar">
                                            <img src={item.logo} alt="Bidzen"/>
                                        </div>
                                    </div>
                                    <h4 className="title"><Link to="/item-details">{item.title}</Link> <p>1 BNB = {item.rate}</p> </h4>
                                    
                                    <div><h5 style={{fontWeight: "normal"}} className="title"> Softcap/Hardcap <p style={{fontWeight: "normal"}} >{item.hcsc}</p></h5></div>
                                    <div><h5 style={{fontWeight: "normal"}} className="title"> Liquidity % <p style={{fontWeight: "normal"}} >{item.liq}</p></h5></div>
                                    <div><h5 style={{fontWeight: "bold"}} className="title"> Starts at <p style={{fontWeight: "Bold"}} >{item.start}</p></h5></div>

                                    {/* <div className="product-author flex">
                                        <div className="avatar">
                                            <img src={item.avt} alt="Bidzen" />
                                        </div>
                                        <div className="infor">
                                            <div className="author-name"><Link to="/authors">{item.name}</Link></div>
                                            <span>Creator</span>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="product-img">
                                    {/* <img src={item.img} alt="Bidzen" /> */}
                                    <Link to="#"
                                        className="sc-button style letter"><span>View presale</span>
                                    </Link>
                                    {/* <label>{item.tags}</label> 
                                     <label>{item.tags2}</label> 
                                    <p>hassan</p> 
                                     <div className="avatar-box">
                                        {
                                            item.avtList.map((item,index) => (
                                                <img key={index} src={item.img1} alt="Bidzen" />
                                            ))
                                        }
                                    </div>  */}
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
                
                {
                    visible < data.length && 
                    <div className="col-md-12">
                        <button id="loadmore" className=" sc-button style letter style-2" onClick={showMoreItems}><span>More presales</span>
                        </button>
                     </div>
                }
            </div>
        </div>
    </section>
    </>
    );
};

export default PopularCollection;
