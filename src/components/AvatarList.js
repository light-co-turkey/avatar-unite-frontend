import React, { useState } from 'react';
import { TextBtn, ToggleSwitch } from './ui/Buttons';

import './components.scss'

let mockUser = {
    profilePhoto: "https://siasky.net/NAA0gABrkBW9-iIKxu4Fm5CzsFb-k0pqX5DYs3LELva55A",
    name: "Luxe", surname: "Vinco", country: "Turkey", city: "Istanbul", categories: ["Engineering", "Athletics"],
    professions: ["Coding", "Calisthenics"], bio: "JS & Solidity Coding, Relentless Gym attender!"
}

let mockUsers = [
    mockUser, mockUser
]

const AvatarList = () => {

    let mapList = mockUsers.map((x, index) => {
        return (
            <li key={index}>
                <img src={x.profilePhoto} alt={x.name + "-photo"} />
                <span>
                    <p>Name</p>
                    <p><b>{x.name + " " + x.surname}</b></p>
                </span>
                <span>
                    <p>Location</p>
                    <p><b>{x.country + " - " + x.city}</b></p>
                </span>
                <span>
                    <p>Categories</p>
                    {x.categories.map((y, index) => <p key={index} className="pl-2">
                        <b>{y},</b>
                    </p>)}
                </span>
                <span>
                    <p>Professions</p>
                    {x.professions.map((y, index) => <p key={index} className="pl-2">
                        <b>{y},</b>
                    </p>)}
                </span>
                <span>
                    <p>Bio</p>
                    <p><b>{x.bio}</b></p>
                </span>
                <TextBtn className="m-2" size="md" variant="info">View</TextBtn>
            </li>
        )
    });

    return (
        <div className="avatar-list mt-2">
            <ul>
                {mapList}
            </ul>
        </div>
    )
};

export default AvatarList;