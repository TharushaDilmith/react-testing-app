import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
    test("renders Application component", () => {
        render(<Application />);

        const headingElement = screen.getByRole("heading", {
            level: 1,
        });
        expect(headingElement).toBeInTheDocument();

        const subHeadingElement = screen.getByRole("heading", {
            level: 2,
        });
        expect(subHeadingElement).toBeInTheDocument();

        const paragraphElement = screen.getByText(
            "Complete the form below to apply for a job"
        );
        expect(paragraphElement).toBeInTheDocument();

        const spanElement = screen.getByTitle("close");
        expect(spanElement).toBeInTheDocument();

        const imageElement = screen.getByAltText("placeholder");
        expect(imageElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", { name: "Name:" });
        expect(nameElement).toBeInTheDocument();

        const nameLabelElement = screen.getByLabelText("Name:" , { selector: "input" });
        expect(nameLabelElement).toBeInTheDocument();

        const nameDisplayElement = screen.getByDisplayValue("John Doe");
        expect(nameDisplayElement).toBeInTheDocument(); 

        const namePlaceholderElement = screen.getByPlaceholderText("Enter your name");
        expect(namePlaceholderElement).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", { name: "Bio:" });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsLabelElement = screen.getByText(
            "I agree to the terms and conditions"
        );
        expect(termsLabelElement).toBeInTheDocument();

        const confirmElement = screen.getByRole("button");
        expect(confirmElement).toBeInTheDocument();
    });
});