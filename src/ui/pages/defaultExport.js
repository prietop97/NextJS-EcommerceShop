import Homepage from "./Homepage"
import React from "react"
import TestRenderer from 'react-test-renderer'; 

const testRenderer = TestRenderer.create(
    <Homepage />
  );

export const Pages = {
    Homepage: testRenderer.toJSON()
}