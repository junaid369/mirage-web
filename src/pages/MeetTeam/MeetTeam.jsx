import React, { useEffect, useState } from "react";
import MeetTeams from "../../components/MeetTeam/MeetTeams";

import Footer from "../../components/Footer/Footer";

function MeetTeam() {
  return (
    <div className="mt-24">
      <MeetTeams />

      <Footer />
    </div>
  );
}

export default MeetTeam;
