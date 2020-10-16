import React from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import { render, waitFor } from "@testing-library/react";

import Tags from "../Tags";

jest.mock("axios");

describe("Tags", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should render load test", async () => {
    axios.get.mockImplementationOnce(() => new Promise((r) => {}));
    const { getAllByTestId } = render(<Tags/>);
    const loadcards = getAllByTestId("loadcard");
    expect(loadcards.length).toBe(20);
    loadcards.forEach(e => {
      expect(e.className).toBe("pa2 w-20 f3");
    });
  });

  it("should render tag", async () => {
    axios.get.mockImplementationOnce(() => 
      ({ data: ['test'] })
    );
    const { getByTestId } = render(
      <BrowserRouter>
        <Tags/>
      </BrowserRouter>
    );
    await waitFor(() => jest.advanceTimersByTime(1000));
    expect(getByTestId('tags').textContent).toMatch('test');
  });
});