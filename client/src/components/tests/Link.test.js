import React from "react";
import { render } from "@testing-library/react";

import Link from "../Link";

describe("Link", () => {
  it("should render link with info", () => {
    const { getByText, getByTestId } = render(
      <Link link={{
        id: "test",
        link: "test.com",
        owner: "mota",
        likes: 0,
        difficulty: 10,
        desc: "a test",
      }}/>
    );
    expect(getByTestId("link-ref").textContent).toBe("Link: test.com");
    expect(getByText("Descrição: a test")).toBeTruthy();
    expect(getByText("Owner: mota")).toBeTruthy();
    expect(getByText("Likes: 0")).toBeTruthy();
    expect(getByText("Difficulty: 10")).toBeTruthy();
  });
});