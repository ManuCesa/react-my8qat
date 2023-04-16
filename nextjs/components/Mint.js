import Head from "next/head";
import Image from "next/image";
import { React, useState, useContext } from "react";
import { EthersContext } from "../context/Connector";
import { useETH } from "../context/Connector";

function Mint() {

  const {
    address,
    Mint,
    PresaleMint,
    Minted,
    Presale,
    MaxPerWallet,
    MaxPerWalletWL,
    connect,
    WLSupply,
    Supply,
    WLPrice,
    Price,
    Token,
    IncrementTokens,
    DecrementTokens
  } = useETH();


  return (
    <div className="flex flex-col justify-center items-center space-y-5 w-full">
      <div>
        <button
          className={`${
            address ? "hidden" : "block"
          } w-[200px] h-[50px] font-bold bg-white shadow-lg rounded-md hover:bg-slate-200 transition-all ease-in-out`}
          onClick={(e) => {
            e.preventDefault();
            connect();
          }}
        >
          Connect Wallet
        </button>
      </div>

      <div
        id="containerbox"
        className={`${
          address ? "flex" : "hidden"
        } bg-zinc-300 text-center flex-col sm:flex-row sm:justify-around justify-center items-center space-y-5 sm:space-y-0 p-2 w-[95%] lg:w-[60%] min-h-[400px] shadow-lg rounded-tl-2xl rounded-br-2xl`}
      >

        <div
          id="mintinfo"
          className="flex flex-col justify-center items-center space-y-5"
        >
          <p className="bg-white p-2 rounded-md shadow-md text-md sm:text-xl">
            <span className="animate-pulse">
              {Presale ? "Presale" : "Publicsale"}
            </span>
          </p>

          <p className="p-2">
            Your Wallet: {String(address).substring(0, 6)}....
            {String(address).substring(36, 42)}
          </p>

          <p className="text-md">
            {Minted} of {Presale ? WLSupply : Supply} Minted
          </p>

          <div className="flex justify-center items-center space-x-5 p-2 bg-white rounded-md shadow-lg">
            <button
              className=" w-10 h-10 rounded-full bg-slate-700 text-white font-bold hover:bg-slate-500 transition-all ease-in-out shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                DecrementTokens();
              }}
            >
              -
            </button>
            <h1>{Token}</h1>
            <button
              className=" w-10 h-10 rounded-full bg-slate-700 text-white font-bold hover:bg-slate-500 transition-all ease-in-out shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                IncrementTokens();
              }}
            >
              +
            </button>
          </div>

          <p className=" text-md">
            {Presale
              ? String((WLPrice * Token) / 1e18)
              : String((Price * Token) / 1e18)}{" "}
            ETH
          </p>

          <div>
            <button
              className={` w-[150px] h-[50px] font-bold bg-white shadow-lg rounded-md hover:bg-slate-200 transition-all ease-in-out`}
              onClick={(e) => {
                e.preventDefault();
                if (Presale) {
                  PresaleMint(Token);
                } else {
                  Mint(Token);
                }
              }}
            >
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
