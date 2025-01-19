
import Usebooked from "@/Hooks/Usebooked";
import React from "react";

function ManageSlot() {

  // slot jokon add korba oi time , user data store kora rakbo 
  // tr por show korabo

  const {booked} = Usebooked();


  

  return (
    <div>
      <h2>Total : booked</h2>
    </div>

  );
}

export default ManageSlot;
