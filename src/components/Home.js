import React, { useState, useEffect } from "react";

function Home() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Fetch NFTs from Solana
    // For now, use dummy data
    const dummyNFTs = [
      {
        id: 1,
        name: "NFT 1",
        image:
          "https://airnfts.s3.amazonaws.com/nft-images/20210903/random_pixels_Red_man_1630688795315.jpeg",
        price: 1.0,
      },
      {
        id: 2,
        name: "NFT 2",
        image:
          "https://i.seadn.io/gae/qFluRqzGnbcDHzAkqRdicT7rCduPGuT03HoyJugmu4tdgGmuZM3SeGIHTVWQk7GYj9S8ILNCKVSe1vwZixJJBWe5m4PamstiQEBSwQ?auto=format&dpr=1&w=3840",
        price: 2.0,
      },
    ];
    setNfts(dummyNFTs);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">All NFTs</h1>
      <div className="row">
        {nfts.map((nft) => (
          <div key={nft.id} className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column">
              <img
                src={nft.image}
                alt={nft.name}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-end">
                <h5 className="card-title">{nft.name}</h5>
                <p className="card-text">Price: {nft.price} SOL</p>
                <button className="btn btn-primary mt-auto">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
