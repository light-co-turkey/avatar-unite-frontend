import React from "react";

import poweredByAvax from "../assets/Powered_by_Avalanche_Red.svg";

const CFooter = e => {

  return (
    <div style={{ height: "7rem", position: "relative", top: "112px"}} className="plr-3 pb-3 pt-1 bst-4">
      <div className="h-100 df jc-sb ai-c mlra" style={{ maxWidth: "1140px" }}>
        <span className="dfc jc-c ai-c f-3">
          <a href="https://t.me/avatar_finance" target="_blank" rel="noopener noreferrer" className="mb-3"><b>Telegram: </b>@avatar_finance</a>
          <a href="https://t.me/avatar_finance_tr" target="_blank" rel="noopener noreferrer" className=""><b>Telegram Tr: </b>@avatar_finance_tr</a>
        </span>
        <span className="dfc jc-c ai-c f-3">
          {/* <p className="mb-2">open beta v2</p> */}
          <img style={{ height: "2.5rem" }} src={poweredByAvax} alt="Powered By Avax" />
        </span>
      </div>
    </div>
  );
}

export default CFooter;
