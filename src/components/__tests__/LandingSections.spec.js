import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import LandingSection from "../LandingSectionLayout.vue";

describe("LandingSectionLayout", () => {
  it("renders properly", () => {
    const wrapper = mount(LandingSection, { props: { sectionName: "test" } });
    expect(wrapper.props().sectionName).toContain("test");
    // expect(wrapper.text()).toContain('Height 100vh')
  });
});
