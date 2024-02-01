import { logRoles, render, screen } from "@testing-library/react";
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

  test("renders login button", () => {
    render(<Users users={users} />);
    const buttonElement = screen.getByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders logout button", () => {
    render(<Users users={users} />);
    //search multiple attributes
    const buttonElement = screen.queryByRole("button", { name: "Logout" });
    expect(buttonElement).toBeNull();
  });

  test("login button is displayed", async () => {
    const view = render(<Users users={users} />);
    //show all roles
    logRoles(view.container);

    //use for async/timing loading
    const buttonElement = await screen.findByRole("button", { name: "Logout" }
    , {timeout: 2000});

    //debug
    screen.debug();
    expect(buttonElement).toBeInTheDocument();
  });
});
