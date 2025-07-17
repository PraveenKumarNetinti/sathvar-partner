import React from "react";
import { RiArrowRightSLine, RiHomeSmile2Line } from "@remixicon/react";
import { Link, useRouterState } from "@tanstack/react-router";

import * as Breadcrumb from "@/components/ui/breadcrumb";

const RouterBreadcrumbs = (
  props: React.ComponentPropsWithoutRef<typeof Breadcrumb.Root>,
) => {
  const matches = useRouterState({ select: (s) => s.matches });

  const breadcrumbs = matches
    .filter((match) => match.context.title)
    .map(({ pathname, context }) => {
      return {
        title: context.title ?? "",
        path: pathname,
      };
    });

  return (
    <Breadcrumb.Root {...props}>
      <Breadcrumb.Item asChild>
        <Link to="/">
          <Breadcrumb.Icon as={RiHomeSmile2Line} />
        </Link>
      </Breadcrumb.Item>

      <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />

      {breadcrumbs?.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb?.path}>
          <Breadcrumb.Item asChild>
            <Link to={breadcrumb?.path}>{breadcrumb?.title}</Link>
          </Breadcrumb.Item>

          {breadcrumbs?.length - 1 !== index && (
            <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />
          )}
        </React.Fragment>
      ))}
    </Breadcrumb.Root>
  );
};

export default RouterBreadcrumbs;
