"use client";
import { useMachine } from "@xstate/react";
import { toggleMachine } from '../machines/toggleMachine'
import type { ButtonProps } from "../types/types";
import { buttonStyles } from "../styles/styles";

export const Button = ({ label, className, intent, size }: ButtonProps) => {
  const [state, send] = useMachine(() => toggleMachine);

  return (
    <>
      <button
        onClick={() => send("toggleEvent")}
        className={buttonStyles({ intent, size, className })}
      >
        {JSON.stringify(state.value)} - {label}
      </button>
    </>
  );
};
