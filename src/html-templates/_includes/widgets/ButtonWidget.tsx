import React from "react";
import customElements from "../CreateCustomElement";

const ButtonLink: React.FC<any> = customElements["ButtonLink"];

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  button?: boolean;
};

export default function ButtonWidget({ href, target, button, children, ...props }: ButtonLinkProps) {

  return (
    <ButtonLink button>
      <a href={href} target={target} {...props}>{children}</a>
    </ButtonLink>
  );
}
