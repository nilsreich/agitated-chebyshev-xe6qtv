import { createMachine } from "xstate";

export const toggleMachine = createMachine({
  initial: "active",
  states: {
    active: {
      on: {
        toggleEvent: {
          target: "disabled",
        },
      },
    },
    disabled: {
      on: {
        toggleEvent: {
          target: "active",
        },
      },
    },
  },
});
