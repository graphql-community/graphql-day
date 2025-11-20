import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { ForwardedRef, forwardRef, ReactElement } from "react";

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace AnchorProps {
  interface IntrinsicAnchorProps
    extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    > {
    href: `#${string}` | `http${string}`;
  }

  interface InternalAnchorProps extends NextLinkProps {}
}

export type AnchorProps =
  | AnchorProps.IntrinsicAnchorProps
  | AnchorProps.InternalAnchorProps;

export const Anchor = forwardRef(function Anchor(
  props: AnchorProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return isInternal(props) ? (
    <NextLink {...props} ref={ref} />
  ) : props.href?.startsWith("#") ? (
    <a ref={ref} {...props} />
  ) : (
    <a ref={ref} rel="noopener noreferrer" target="_blank" {...props} />
  );
}) as (props: AnchorProps) => ReactElement;

function isInternal(
  props: AnchorProps
): props is AnchorProps.InternalAnchorProps {
  return (
    typeof props.href === "object" ||
    (typeof props.href === "string" &&
      !props.href.startsWith("http") &&
      !props.href.startsWith("#"))
  );
}
