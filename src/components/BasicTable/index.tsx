import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

// import MyLogo from "../../../static/img/logo.png";
import ThreeDotsIcon from "../../../static/img/three-dots.png";

// import mockData from "../../../data/mock-data.json";
import { UserTable } from "./interface";
import * as S from "./styles";

const mockData = [
  {
    id: 1,
    name: "Sam's Ford",
    origin: "Miami, FA",
    contact: "John Doe",
    email: "john@myemail.com",
    phone: "555-555-1212",
    dealerId: "ABC-123456",
    activated: new Date("2021-06-30"),
    status: "Active",
  },
  {
    id: 2,
    name: "Alpha Cars & Motorcycles",
    origin: "Acton, MA",
    contact: "Jane Brown",
    email: "Text label",
    phone: "555-555-1212",
    dealerId: "ABC-123456",
    activated: new Date("2021-06-30"),
    status: "Suspended",
  },
  {
    id: 2,
    name: "Alpha Cars & Motorcycles",
    origin: "Acton, MA",
    contact: "Jane Brown",
    email: "Text label",
    phone: "555-555-1212",
    dealerId: "ABC-123456",
    activated: new Date("2021-06-30"),
    status: "Signed Up",
  },
];

const formatActivatedDate = (date: Date): string => {
  if (!date) return "-";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const columnHelper = createColumnHelper<any>();

const columns = [
  columnHelper.accessor("contact", {
    header: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="checkbox"
          style={{ height: "18px", width: "18px" }}
        />
      </div>
    ),
    cell: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="checkbox"
          style={{ height: "18px", width: "18px" }}
        />
      </div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("logo", {
    id: "logo",
    header: () => "Logo",
    cell: (info) => (
      <i>
        <S.MyLogo />
      </i>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("name", {
    id: "name",
    header: () => <span>Name</span>,
    cell: (info) => (
      <div>
        <S.Title>{info.getValue()}</S.Title>
        <br />
        <S.SubTitle>{info.row.original.origin}</S.SubTitle>
      </div>
    ),
    footer: (info) => info.column.id,
    size: 211,
  }),
  columnHelper.accessor("contact", {
    header: () => "Contact",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    size: 108,
  }),
  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    size: 135,
  }),
  columnHelper.accessor("phone", {
    header: () => "Phone",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    size: 135,
  }),
  columnHelper.accessor("dealerId", {
    header: () => "Dealer ID",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    size: 92,
  }),
  columnHelper.accessor("activated", {
    header: () => "Activated",
    cell: (info) => formatActivatedDate(info.renderValue()),
    footer: (info) => info.column.id,
    size: 92,
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    size: 92,
  }),
  columnHelper.accessor("actions", {
    header: () => <div style={{ textAlign: "center" }}>Actions</div>,
    cell: () => (
      <S.ButtonActions>
        <button>
          <img src={ThreeDotsIcon} />
        </button>
      </S.ButtonActions>
    ),
    footer: (info) => info.column.id,
    size: 57,
  }),
];

const Table = () => {
  const data = React.useMemo(() => mockData, []);
  const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() });

  return (
    <>
      {" "}
      <S.Table>
        <S.TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <S.TableHeaderCell
                  key={header.id}
                  size={header.getSize()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </S.TableHeaderCell>
              ))}
            </tr>
          ))}
        </S.TableHeader>
        <S.TableBody>
          {table.getRowModel().rows.map((row) => (
            <S.TableBodyRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <S.TableBodyCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </S.TableBodyCell>
              ))}
            </S.TableBodyRow>
          ))}
        </S.TableBody>
      </S.Table>
      <div className="popover"></div>
    </>
  );
};

export default Table;
