import React from "react";
import { toSvg } from "jdenticon";
import { minidenticon } from "minidenticons";

interface MinidenticonImgProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  username: string;
  saturation?: number;
  lightness?: number;
}

export const MinidenticonImg = ({
  username,
  saturation = 95,
  lightness = 45,
  ...props
}: MinidenticonImgProps) => {
  const svgURI = React.useMemo(
    () =>
      "data:image/svg+xml;utf8," +
      encodeURIComponent(minidenticon(username, saturation, lightness)),
    [username, saturation, lightness],
  );
  return <img src={svgURI} alt={username} {...props} />;
};

export const JdentiIcon = ({
  value,
  size,
  className,
}: {
  value: string;
  size: number;
  className?: string;
}) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: toSvg(value, size),
      }}
    ></div>
  );
};
