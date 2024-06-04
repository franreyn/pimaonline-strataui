import React from "react";
import customElements from "../CreateCustomElement";

const ButtonLink: React.FC<any> = customElements["ButtonLink"];

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
};

export default function ButtonWidget({ href, target, children }: ButtonLinkProps) {

  return (
    <ButtonLink>
      <a href={href} target={target}>{children}</a>
    </ButtonLink>
  );
}
