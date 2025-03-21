import React from "react";

const Nav = () => {
  return (
    <div className="lottery-container">
    <nav className="navbar">
      <button className="connect-wallet">Connect Wallet</button>
    </nav>
    <div className="content">
      <button className="buy-ticket">Buy Ticket & Win</button>
      <div className="jackpot">
        <h2 className="jack">JACKPOT</h2>
        <p>XXXX / <span className="highlight">100,000 USDC</span></p>
      </div>
      <div className="draws">
        <div className="weekly-draw">
          <h3  className="jack">WEEKLY JACKPOT</h3>
          <p>XXX USDC</p>
          <p className="time">Time: 00:00</p>
        </div>
        <div className="daily-draw">
          <h3>DAILY DRAW</h3>
          <p className="time">00:00</p>
        </div>
      </div>
      <div className="winners">
        <h3  className="jack">WINNERS</h3>
        <div className="winner">
          <span>0x...abc</span> <span className="win">WIN</span> <span className="amount">XXX</span>
          <a href="#" className="txn-link">View Transaction</a>
        </div>
        <div className="winner">
          <span>0x...def</span> <span className="win">WIN</span> <span className="amount">XXX</span>
          <a href="#" className="txn-link">View Transaction</a>
        </div>
      </div>
    </div>
  </div>
);
};


export default Nav;


