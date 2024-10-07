/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
"use client";


import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { PlusPlusDefault221 } from "../../icons/PlusPlusDefault221";

export const Button = ({
  editText = "Button",
  rightIcon = true,
  leftIcon = true,
  text = true,
  size,
  type,
  stateProp,
  breakpoint,
  className,
  icon = <PlusPlusDefault221 className="!relative !w-4 !h-4" color="#141414" />,
  override = <PlusPlusDefault221 className="!relative !w-4 !h-4" color="#141414" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xl",
    type: type || "primary",
    state: stateProp || "default",
    breakpoint: breakpoint || "desktop",
  });

  return (
    <button
      className={`all-[unset] box-border inline-flex items-center overflow-hidden rounded-[var(--semantics-dimensions-rounded-rounded-lg)] justify-center relative ${
        (state.breakpoint === "desktop" &&
          state.size === "xl" &&
          state.state === "disabled" &&
          state.type === "primary") ||
        (state.state === "default" && state.type === "outline") ||
        (state.state === "disabled" && state.type === "outline") ||
        (state.state === "hovered" && state.type === "outline")
          ? "border border-solid"
          : state.state === "focused"
          ? "border-2 border-solid"
          : ""
      } ${
        state.state === "default" && state.type === "outline"
          ? "border-[color:var(--component-colors-button-outline-border-button-outline-border-default)]"
          : state.state === "hovered" && state.type === "outline"
          ? "border-[color:var(--component-colors-button-outline-border-button-outline-border-hovered)]"
          : state.type === "primary" && state.state === "focused"
          ? "border-[color:var(--component-colors-button-primary-border-button-primary-border-focused)]"
          : state.type === "danger" && state.state === "focused"
          ? "border-[color:var(--component-colors-button-danger-border-button-danger-border-focused)]"
          : state.type === "success" && state.state === "focused"
          ? "border-[color:var(--component-colors-button-success-border-button-success-border-focused)]"
          : state.type === "secondary" && state.state === "focused"
          ? "border-[color:var(--component-colors-button-secondary-border-button-secondary-border-focused)]"
          : state.type === "outline" && state.state === "focused"
          ? "border-[color:var(--component-colors-button-outline-border-button-outline-border-focused)]"
          : state.state === "disabled" &&
            state.type === "primary" &&
            state.size === "xl" &&
            state.breakpoint === "desktop"
          ? "border-[color:var(--component-colors-button-primary-border-button-primary-border-disabled)]"
          : state.type === "outline" && state.state === "disabled"
          ? "border-[color:var(--component-colors-button-outline-border-button-outline-border-disabled)]"
          : ""
      } ${state.size === "xl" ? "gap-1" : "gap-0.5"} ${
        (state.breakpoint === "mobile" && state.size === "xl" && state.type === "danger") ||
        (state.breakpoint === "mobile" && state.size === "xl" && state.type === "outline") ||
        (state.breakpoint === "mobile" && state.size === "xl" && state.type === "primary") ||
        (state.breakpoint === "mobile" && state.size === "xl" && state.type === "secondary") ||
        (state.breakpoint === "mobile" && state.size === "xl" && state.type === "success")
          ? "px-[13px] py-0"
          : (state.breakpoint === "desktop" && state.size === "lg" && state.type === "link") ||
            (state.breakpoint === "desktop" && state.size === "md") ||
            (state.breakpoint === "desktop" && state.size === "sm" && state.type === "danger") ||
            (state.breakpoint === "desktop" && state.size === "sm" && state.type === "outline") ||
            (state.breakpoint === "desktop" && state.size === "sm" && state.type === "primary") ||
            (state.breakpoint === "desktop" && state.size === "sm" && state.type === "secondary") ||
            (state.breakpoint === "desktop" && state.size === "sm" && state.type === "success") ||
            (state.breakpoint === "mobile" && state.size === "lg") ||
            (state.breakpoint === "mobile" && state.size === "md" && state.type === "link")
          ? "pr-[var(--primitives-dimensions-dimensions-4)] pl-[var(--primitives-dimensions-dimensions-4)] py-0"
          : (state.breakpoint === "mobile" && state.size === "md" && state.type === "danger") ||
            (state.breakpoint === "mobile" && state.size === "md" && state.type === "outline") ||
            (state.breakpoint === "mobile" && state.size === "md" && state.type === "primary") ||
            (state.breakpoint === "mobile" && state.size === "md" && state.type === "secondary") ||
            (state.breakpoint === "mobile" && state.size === "md" && state.type === "success") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "danger") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "outline") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "primary") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "secondary") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "success")
          ? "px-2.5 py-0"
          : "px-3.5 py-0"
      } ${
        (state.breakpoint === "desktop" && state.size === "xl" && state.type === "danger") ||
        (state.breakpoint === "desktop" && state.size === "xl" && state.type === "outline") ||
        (state.breakpoint === "desktop" && state.size === "xl" && state.type === "primary") ||
        (state.breakpoint === "desktop" && state.size === "xl" && state.type === "secondary") ||
        (state.breakpoint === "desktop" && state.size === "xl" && state.type === "success")
          ? "h-[var(--primitives-dimensions-dimensions-11)]"
          : (state.breakpoint === "desktop" && state.size === "lg" && state.type === "danger") ||
            (state.breakpoint === "desktop" && state.size === "lg" && state.type === "outline") ||
            (state.breakpoint === "desktop" && state.size === "lg" && state.type === "primary") ||
            (state.breakpoint === "desktop" && state.size === "lg" && state.type === "secondary") ||
            (state.breakpoint === "desktop" && state.size === "lg" && state.type === "success") ||
            (state.breakpoint === "mobile" && state.size === "xl" && state.type === "danger") ||
            (state.breakpoint === "mobile" && state.size === "xl" && state.type === "outline") ||
            (state.breakpoint === "mobile" && state.size === "xl" && state.type === "primary") ||
            (state.breakpoint === "mobile" && state.size === "xl" && state.type === "secondary") ||
            (state.breakpoint === "mobile" && state.size === "xl" && state.type === "success")
          ? "h-[var(--primitives-dimensions-dimensions-10)]"
          : (state.breakpoint === "desktop" && state.size === "md" && state.type === "danger") ||
            (state.breakpoint === "desktop" && state.size === "md" && state.type === "outline") ||
            (state.breakpoint === "desktop" && state.size === "md" && state.type === "primary") ||
            (state.breakpoint === "desktop" && state.size === "md" && state.type === "secondary") ||
            (state.breakpoint === "desktop" && state.size === "md" && state.type === "success") ||
            (state.breakpoint === "mobile" && state.size === "lg" && state.type === "danger") ||
            (state.breakpoint === "mobile" && state.size === "lg" && state.type === "outline") ||
            (state.breakpoint === "mobile" && state.size === "lg" && state.type === "primary") ||
            (state.breakpoint === "mobile" && state.size === "lg" && state.type === "secondary") ||
            (state.breakpoint === "mobile" && state.size === "lg" && state.type === "success")
          ? "h-[var(--primitives-dimensions-dimensions-9)]"
          : (state.breakpoint === "mobile" && state.size === "sm" && state.type === "danger") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "outline") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "primary") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "secondary") ||
            (state.breakpoint === "mobile" && state.size === "sm" && state.type === "success")
          ? "h-[var(--semantics-dimensions-size-size-5xl)]"
          : (state.breakpoint === "desktop" &&
              state.size === "sm" &&
              state.state === "default" &&
              state.type === "outline") ||
            (state.breakpoint === "desktop" &&
              state.size === "sm" &&
              state.state === "disabled" &&
              state.type === "outline") ||
            (state.breakpoint === "desktop" &&
              state.size === "sm" &&
              state.state === "hovered" &&
              state.type === "outline") ||
            (state.breakpoint === "mobile" &&
              state.size === "md" &&
              state.state === "default" &&
              state.type === "outline") ||
            (state.breakpoint === "mobile" &&
              state.size === "md" &&
              state.state === "disabled" &&
              state.type === "outline") ||
            (state.breakpoint === "mobile" &&
              state.size === "md" &&
              state.state === "hovered" &&
              state.type === "outline")
          ? "h-[38px]"
          : state.state === "focused" &&
            ["desktop", "mobile"].includes(state.breakpoint) &&
            (state.breakpoint === "desktop" || state.size === "md") &&
            (state.breakpoint === "mobile" || state.size === "sm") &&
            ["sm", "md"].includes(state.size)
          ? "h-10"
          : "h-9"
      } ${
        state.state === "default" && state.type === "primary"
          ? "bg-[color:var(--component-colors-button-primary-surface-button-primary-surface-default)]"
          : state.state === "default" && state.type === "danger"
          ? "bg-[color:var(--component-colors-button-danger-surface-button-danger-surface-default)]"
          : state.state === "default" && state.type === "success"
          ? "bg-[color:var(--component-colors-button-success-surface-button-success-surface-default)]"
          : state.state === "default" && state.type === "secondary"
          ? "bg-[color:var(--component-colors-button-secondary-surface-button-secondary-surface-default)]"
          : state.state === "default" && state.type === "outline"
          ? "bg-component-colors-button-secondary-surface-button-secondary-outline-default"
          : state.state === "hovered" && state.type === "primary"
          ? "bg-[color:var(--component-colors-button-primary-surface-button-primary-surface-hovered-duplicate)]"
          : state.state === "hovered" && state.type === "danger"
          ? "bg-[color:var(--component-colors-button-danger-surface-button-danger-surface-hovered)]"
          : state.type === "success" && state.state === "hovered"
          ? "bg-[color:var(--component-colors-button-success-surface-button-success-surface-hovered)]"
          : state.state === "hovered" && state.type === "secondary"
          ? "bg-[color:var(--component-colors-button-secondary-surface-button-secondary-surface-hovered)]"
          : state.state === "hovered" && state.type === "outline"
          ? "bg-[color:var(--component-colors-button-outline-surface-button-outline-surface-hovered)]"
          : state.type === "primary" && state.state === "focused"
          ? "bg-[color:var(--component-colors-button-primary-surface-button-primary-surface-focused)]"
          : state.type === "danger" && state.state === "focused"
          ? "bg-[color:var(--component-colors-button-danger-surface-button-danger-surface-focused)]"
          : state.type === "success" && state.state === "focused"
          ? "bg-[color:var(--component-colors-button-success-surface-button-success-surface-focused)]"
          : state.type === "secondary" && state.state === "focused"
          ? "bg-[color:var(--component-colors-button-secondary-surface-button-secondary-surface-focused)]"
          : state.type === "primary" && state.state === "disabled"
          ? "bg-[color:var(--component-colors-button-primary-surface-button-primary-surface-disabled-duplicate)]"
          : state.state === "disabled" && state.type === "danger"
          ? "bg-[color:var(--component-colors-button-danger-surface-button-danger-surface-disabled)]"
          : state.type === "success" && state.state === "disabled"
          ? "bg-[color:var(--component-colors-button-success-surface-button-success-surface-disabled)]"
          : state.type === "secondary" && state.state === "disabled"
          ? "bg-[color:var(--component-colors-button-secondary-surface-button-secondary-surface-disabled-duplicate)]"
          : "bg-component-colors-button-secondary-surface-button-outline-surface-focused"
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {leftIcon && <>{icon}</>}

      {text && (
        <div className="inline-flex items-center gap-2.5 flex-[0_0_auto] p-1 justify-center relative">
          <div
            className={`w-fit mt-[-1.00px] whitespace-nowrap relative ${
              state.size === "xl" && state.breakpoint === "desktop"
                ? "font-desktop-l2-l2-primary-heavy"
                : state.breakpoint === "desktop" && ["lg", "md", "sm"].includes(state.size)
                ? "font-desktop-l3-l3-primary-heavy"
                : state.breakpoint === "mobile" && state.size === "sm"
                ? "font-mobile-l3-l3-primary-heavy"
                : "font-mobile-l2-l2-primary-heavy"
            } ${
              state.size === "xl" && state.breakpoint === "desktop"
                ? "tracking-[var(--desktop-l2-l2-primary-heavy-letter-spacing)]"
                : state.breakpoint === "desktop" && ["lg", "md", "sm"].includes(state.size)
                ? "tracking-[var(--desktop-l3-l3-primary-heavy-letter-spacing)]"
                : state.breakpoint === "mobile" && state.size === "sm"
                ? "tracking-[var(--mobile-l3-l3-primary-heavy-letter-spacing)]"
                : "tracking-[var(--mobile-l2-l2-primary-heavy-letter-spacing)]"
            } ${
              state.size === "xl" && state.breakpoint === "desktop"
                ? "text-[length:var(--desktop-l2-l2-primary-heavy-font-size)]"
                : state.breakpoint === "desktop" && ["lg", "md", "sm"].includes(state.size)
                ? "text-[length:var(--desktop-l3-l3-primary-heavy-font-size)]"
                : state.breakpoint === "mobile" && state.size === "sm"
                ? "text-[length:var(--mobile-l3-l3-primary-heavy-font-size)]"
                : "text-[length:var(--mobile-l2-l2-primary-heavy-font-size)]"
            } ${
              state.size === "xl" && state.breakpoint === "desktop"
                ? "[font-style:var(--desktop-l2-l2-primary-heavy-font-style)]"
                : state.breakpoint === "desktop" && ["lg", "md", "sm"].includes(state.size)
                ? "[font-style:var(--desktop-l3-l3-primary-heavy-font-style)]"
                : state.breakpoint === "mobile" && state.size === "sm"
                ? "[font-style:var(--mobile-l3-l3-primary-heavy-font-style)]"
                : "[font-style:var(--mobile-l2-l2-primary-heavy-font-style)]"
            } ${
              state.state === "default" && state.type === "danger"
                ? "text-[color:var(--component-colors-button-danger-text-button-danger-text-default)]"
                : state.state === "default" && state.type === "success"
                ? "text-[color:var(--component-colors-button-success-text-button-success-text-default)]"
                : state.state === "default" && state.type === "secondary"
                ? "text-[color:var(--component-colors-button-secondary-text-button-secondary-text-default)]"
                : state.state === "default" && state.type === "outline"
                ? "text-[color:var(--component-colors-button-outline-text-button-outline-text-default)]"
                : state.state === "hovered" && state.type === "primary"
                ? "text-[color:var(--component-colors-button-primary-text-button-primary-text-hovered)]"
                : state.state === "hovered" && state.type === "danger"
                ? "text-[color:var(--component-colors-button-danger-text-button-danger-text-hovered)]"
                : state.type === "success" && state.state === "hovered"
                ? "text-[color:var(--component-colors-button-success-text-button-success-text-hovered)]"
                : state.state === "hovered" && state.type === "secondary"
                ? "text-[color:var(--component-colors-button-secondary-text-button-secondary-text-hovered)]"
                : state.state === "hovered" && state.type === "outline"
                ? "text-[color:var(--component-colors-button-outline-text-button-outline-text-hovered)]"
                : state.type === "primary" && state.state === "focused"
                ? "text-[color:var(--component-colors-button-primary-text-button-primary-text-focused)]"
                : state.type === "danger" && state.state === "focused"
                ? "text-[color:var(--component-colors-button-danger-text-button-danger-text-focused)]"
                : state.type === "success" && state.state === "focused"
                ? "text-[color:var(--component-colors-button-success-text-button-success-text-focused)]"
                : state.type === "secondary" && state.state === "focused"
                ? "text-[color:var(--component-colors-button-secondary-text-button-secondary-text-focused)]"
                : state.type === "outline" && state.state === "focused"
                ? "text-[color:var(--component-colors-button-outline-text-button-outline-text-focused)]"
                : state.type === "primary" && state.state === "disabled"
                ? "text-[color:var(--component-colors-button-primary-text-button-primary-text-disabled)]"
                : state.state === "disabled" && state.type === "danger"
                ? "text-[color:var(--component-colors-button-danger-text-button-danger-text-disabled)]"
                : state.type === "success" && state.state === "disabled"
                ? "text-[color:var(--component-colors-button-success-text-button-success-text-disabled)]"
                : state.type === "secondary" && state.state === "disabled"
                ? "text-[color:var(--component-colors-button-secondary-text-button-secondary-text-disabled)]"
                : state.type === "outline" && state.state === "disabled"
                ? "text-[color:var(--component-colors-button-outline-text-button-outline-text-disabled)]"
                : state.state === "default" && state.type === "link"
                ? "text-[color:var(--component-colors-button-link-text-button-link-text-default)]"
                : state.type === "link" && state.state === "hovered"
                ? "text-[color:var(--component-colors-button-link-text-button-link-text-hovered)]"
                : state.type === "link" && state.state === "disabled"
                ? "text-[color:var(--component-colors-button-link-text-button-link-text-disabled)]"
                : "text-[color:var(--component-colors-button-primary-text-button-primary-text-default)]"
            } ${
              state.size === "xl" && state.breakpoint === "desktop"
                ? "font-[number:var(--desktop-l2-l2-primary-heavy-font-weight)]"
                : state.breakpoint === "desktop" && ["lg", "md", "sm"].includes(state.size)
                ? "font-[number:var(--desktop-l3-l3-primary-heavy-font-weight)]"
                : state.breakpoint === "mobile" && state.size === "sm"
                ? "font-[number:var(--mobile-l3-l3-primary-heavy-font-weight)]"
                : "font-[number:var(--mobile-l2-l2-primary-heavy-font-weight)]"
            } ${
              state.size === "xl" && state.breakpoint === "desktop"
                ? "leading-[var(--desktop-l2-l2-primary-heavy-line-height)]"
                : state.breakpoint === "desktop" && ["lg", "md", "sm"].includes(state.size)
                ? "leading-[var(--desktop-l3-l3-primary-heavy-line-height)]"
                : state.breakpoint === "mobile" && state.size === "sm"
                ? "leading-[var(--mobile-l3-l3-primary-heavy-line-height)]"
                : "leading-[var(--mobile-l2-l2-primary-heavy-line-height)]"
            }`}
          >
            {editText}
          </div>
        </div>
      )}

      {rightIcon && <>{override}</>}
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Button.propTypes = {
  editText: PropTypes.string,
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,
  text: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm", "lg", "xl"]),
  type: PropTypes.oneOf(["danger", "success", "outline", "secondary", "primary", "link"]),
  stateProp: PropTypes.oneOf(["hovered", "disabled", "focused", "default"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
};
