import React, { useState } from "react";

function Mint() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleMint = () => {
    // Logic to mint NFT on Solana
    console.log({ name, price, image });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mint NFT</h1>
      <form onSubmit={handleMint} className="w-50 mx-auto">
        <div className="form-group mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter property name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price">Price (SOL):</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price in SOL"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Mint
        </button>
      </form>
    </div>
  );
}

export default Mint;
