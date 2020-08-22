
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import React from "react";
import { GlobalStyle } from "../src/components/shared/global";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  options: {
    showRoots: true,
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
});

// 自定义目录顺序
const loaderFn = () => {
  return [
    // 目录顺序
    // require("../src/stories/colors.stories.mdx"),
    // require("../src/stories/typography.stories.mdx"),
  ];
};
configure(loaderFn, module);

addDecorator(withA11y);

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));