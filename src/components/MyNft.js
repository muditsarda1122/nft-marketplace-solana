import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MyNft() {
  const [userNFTs, setUserNFTs] = useState([]);
  const [boughtNFTs, setBoughtNFTs] = useState([]);

  useEffect(() => {
    // Fetch user's minted and bought NFTs from Solana
    // For now, use dummy data
    const dummyUserNFTs = [
      {
        id: 1,
        name: "User NFT 1",
        image:
          "https://airnfts.s3.amazonaws.com/nft-images/20210903/random_pixels_Red_man_1630688795315.jpeg",
        price: 1.0,
      },
    ];
    const dummyBoughtNFTs = [
      {
        id: 2,
        name: "Bought NFT 1",
        image:
          "https://i.seadn.io/gae/qFluRqzGnbcDHzAkqRdicT7rCduPGuT03HoyJugmu4tdgGmuZM3SeGIHTVWQk7GYj9S8ILNCKVSe1vwZixJJBWe5m4PamstiQEBSwQ?auto=format&dpr=1&w=3840",
        price: 2.0,
      },
    ];
    setUserNFTs(dummyUserNFTs);
    setBoughtNFTs(dummyBoughtNFTs);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My NFTs</h1>
      <h2 className="text-center mb-3">Minted NFTs</h2>
      <div className="row">
        {userNFTs.map((nft) => (
          <div key={nft.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={nft.image}
                alt={nft.name}
                className="card-img-top"
                // style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{nft.name}</h5>
                <p className="card-text">Price: {nft.price} SOL</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center mb-3">Bought NFTs</h2>
      <div className="row">
        {boughtNFTs.map((nft) => (
          <div key={nft.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={nft.image}
                alt={nft.name}
                className="card-img-top"
                // style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{nft.name}</h5>
                <p className="card-text">Price: {nft.price} SOL</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyNft;
