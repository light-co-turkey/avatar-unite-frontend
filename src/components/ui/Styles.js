export const selectStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: "1rem",
        fontSize: ".9rem",
        borderColor: "inherit"
    }),
    menu: (provided) => ({
        ...provided,
        fontSize: ".9rem",
        color: "black"
    }),
}

export const selectStylesL = {
    control: (provided) => ({
        ...provided,
        borderRadius: "1rem 0 0 1rem",
        fontSize: ".9rem",
        borderColor: "#393F3F"

    }),
    menu: (provided) => ({
        ...provided,
        fontSize: ".9rem",
        color: "black"
    }),
}

export const selectStylesM = {
    control: (provided) => ({
        ...provided,
        borderRadius: "0",
        fontSize: ".9rem",
        borderColor: "#393F3F",
        borderLeft: "none"

    }),
    menu: (provided) => ({
        ...provided,
        fontSize: ".9rem",
        color: "black"
    }),
}

export const selectStylesR = {
    control: (provided) => ({
        ...provided,
        borderLeft: "0",
        borderRadius: "0 1rem 1rem 0",
        fontSize: ".9rem",
        borderColor: "#393F3F"
    }),
    menu: (provided) => ({
        ...provided,
        fontSize: ".9rem",
        color: "black"
    }),
}