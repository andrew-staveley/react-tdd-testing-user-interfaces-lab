import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("Displays a top level heading with the text `Hi, I'm _____`", () => {
    render(<App />)
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })
    expect(topLevelHeading).toBeInTheDocument();
})

test("Displays a top level image with a picture with an alt of `Profile Picture`.", () => {
    render(<App />)
    const profilePhoto = screen.getByRole("image", {
        name: /profile picture/i,
        exact: false,
    })
    expect(profilePhoto).toBeInTheDocument();
})
