import { render, screen } from "@testing-library/react";
import Users from "./user";

describe("Users", () => {
const users = ["Tharusha", "Dayan", "Charith"];
  test("renders Users component", () => {
    render(<Users users={users} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders all users", () =>{
    render(<Users users={users} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(users.length);
  });
});
