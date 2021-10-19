import React, { useState } from 'react';
import { ToggleSwitch } from '../../components/ui/Buttons';
import Find from './Find';
import Profile from './Profile';

const Landing = () => {
  const [phase, setPhase] = useState(1)
  return (
    <div className="dfc">
      <ToggleSwitch onSwitch={setPhase} value={phase} className="h-2 w-80 mlr-a"
        fieldList={[{ text: "Find", count: 1 }, { text: "Profile", count: 2 }]} />
      <div className="w-100 mlr-a mt-3">
        {phase === 1 ? <Find />
          : phase === 2 ? <Profile />
            : null}
      </div>
    </div>
  )
};

export default Landing;