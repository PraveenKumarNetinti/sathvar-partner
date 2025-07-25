import * as React from "react";

import { cn, cnExt } from "@/utils/cn";

import * as Divider from "@/components/ui/divider";

const Table = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <div className={cnExt("h-full w-full overflow-x-auto", className)}>
      <table ref={forwardedRef} className="w-full" {...rest} />
    </div>
  );
});
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ ...rest }, forwardedRef) => {
  return <thead ref={forwardedRef} {...rest} />;
});
TableHeader.displayName = "TableHeader";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <th
      ref={forwardedRef}
      className={cnExt(
        "bg-bg-weak-50 text-paragraph-sm text-text-sub-600 px-3 py-2 text-left first:rounded-l-lg last:rounded-r-lg",
        className,
      )}
      {...rest}
    />
  );
});
TableHead.displayName = "TableHead";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & {
    spacing?: number;
  }
>(({ spacing = 8, ...rest }, forwardedRef) => {
  return (
    <>
      {/* to have space between thead and tbody */}
      <tbody
        aria-hidden="true"
        className="table-row"
        style={{
          height: spacing,
        }}
      />

      <tbody ref={forwardedRef} {...rest} />
    </>
  );
});
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <tr ref={forwardedRef} className={cn("group/row", className)} {...rest} />
  );
});
TableRow.displayName = "TableRow";

function TableRowDivider({
  className,
  dividerClassName,
  ...rest
}: React.ComponentPropsWithoutRef<typeof Divider.Root> & {
  dividerClassName?: string;
}) {
  return (
    <tr aria-hidden="true" className={className}>
      <td colSpan={999} className="py-1">
        <Divider.Root
          variant="line-spacing"
          className={dividerClassName}
          {...rest}
        />
      </td>
    </tr>
  );
}
TableRowDivider.displayName = "TableRowDivider";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <td
      ref={forwardedRef}
      className={cnExt(
        "text-paragraph-sm text-text-sub-600 group-hover/row:bg-bg-weak-50 h-16 px-3 py-1 transition duration-200 ease-out first:rounded-l-xl last:rounded-r-xl",
        className,
      )}
      {...rest}
    />
  );
});
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...rest }, forwardedRef) => (
  <caption
    ref={forwardedRef}
    className={cnExt("text-paragraph-sm text-text-sub-600 mt-4", className)}
    {...rest}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table as Root,
  TableHeader as Header,
  TableBody as Body,
  TableHead as Head,
  TableRow as Row,
  TableRowDivider as RowDivider,
  TableCell as Cell,
  TableCaption as Caption,
};
