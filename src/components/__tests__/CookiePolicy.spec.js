import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CookiePolicy from "../CookiePolicy.vue";

describe("CookiePolicy", () => {
  it("renders properly", () => {
    const wrapper = mount(CookiePolicy);
    // expect(wrapper.text()).toContain('')
  });
});
