import React, { useState } from 'react';
import AvatarList from '../../components/AvatarList';
import { DropdownBtn } from '../../components/ui/Buttons';

const Find = () => {
    const [loc, setLoc] = useState("all")
    const [cat, setCat] = useState("all")
    const [prof, setProf] = useState("all")
    return (
        <div className="dfc ma">
            <div className="df jc-c ai-c w-100 pbt-2 fw">
                <span className="dfc plr-3">
                    <h4 className="mbt-2">Location:</h4>
                    <DropdownBtn onSelect={setLoc} value={loc} variant="clear" size="lg"
                    list={["all", "pdf", "svg", "png", "jpeg"]} />
                </span>
                <span className="dfc plr-3">
                    <h4 className="mbt-2">Catagory:</h4>
                    <DropdownBtn onSelect={setCat} value={cat} variant="clear" size="lg"
                    list={["all", "pdf", "svg", "png", "jpeg"]} />
                </span>
                <span className="dfc plr-3">
                    <h4 className="mbt-2">Profession:</h4>
                    <DropdownBtn onSelect={setProf} value={prof} variant="clear" size="lg"
                    list={["all", "pdf", "svg", "png", "jpeg"]} />
                </span>
            </div>
            <AvatarList />
        </div>
    )
};

export default Find;