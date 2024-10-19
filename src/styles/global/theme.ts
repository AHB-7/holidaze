const baseTheme = {
    colors: {
        primary: "#F97300",
        secondary: "#2ecc71",
    },
    breakpoints: {
        sm: "600px",
        md: "800px",
        lg: "1200px",
    },
};

export const lightTheme = {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        background: "#EEEEEE",
        text: "#040D12",
    },
};

export const darkTheme = {
    ...baseTheme,
    colors: {
        ...baseTheme.colors,
        background: "#040D12",
        text: "#EEEEEE",
    },
};

export const theme = lightTheme;
