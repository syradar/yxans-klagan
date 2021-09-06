import _styled from "../../_snowpack/pkg/@emotion/styled.js";

const Button = _styled.button(({
  variant,
  isSmall
}) => [// The common button styles
{
  "transform": "var(--tw-transform)",
  "paddingLeft": "2rem",
  "paddingRight": "2rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontWeight": "700",
  "textTransform": "uppercase",
  "letterSpacing": "0.025em",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "transitionDuration": "75ms"
}, {
  "borderWidth": "2px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))",
  "borderRadius": "0px"
}, // Use the variant grouping feature to add variants to multiple classes
{
  ":hover, :focus": {
    "--tw-scale-x": "1.05",
    "--tw-scale-y": "1.05",
    "transform": "var(--tw-transform)",
    "--tw-text-opacity": "1",
    "color": "rgba(217, 119, 6, var(--tw-text-opacity))"
  }
}, // Use props to conditionally style your components
variant === 'primary' && {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
}, // Combine regular css with tailwind classes within backticks
variant === 'secondary' && [// css`
//   box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
// `,
{
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
}], // Conditional props can be added
isSmall ? {
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem"
} : {
  "fontSize": "1.125rem",
  "lineHeight": "1.75rem"
} // The theme import can supply values from your tailwind.config.js
// css`
//   color: ${theme`colors.black`};
// `,
]);

export default Button;