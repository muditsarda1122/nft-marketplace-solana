import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Mint from "./components/Mint";
import MyNft from "./components/MyNft";
import "bootstrap/dist/css/bootstrap.min.css";

const getProvider = () => {
  if ("phantom" in window) {
    const provider = window.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  window.open("https://phantom.app/", "_blank");
};

function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    const provider = getProvider();
    if (provider) {
      try {
        const resp = await provider.connect();
        console.log(resp.publicKey.toString());
        setWalletAddress(resp.publicKey.toString());
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Real Estate NFT Marketplace
          </Link>
          <div className="collapse navbar-collapse d-flex justify-content-center">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mint">
                  Mint
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-nfts">
                  My NFTs
                </Link>
              </li>
            </ul>
            <div className="d-flex ms-auto">
              <button className="btn btn-primary" onClick={connectWallet}>
                {walletAddress
                  ? `Connected: ${walletAddress.substring(
                      0,
                      6
                    )}...${walletAddress.substring(walletAddress.length - 4)}`
                  : "Connect Phantom Wallet"}
              </button>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/my-nfts" element={<MyNft />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
