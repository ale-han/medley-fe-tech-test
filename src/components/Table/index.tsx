import React from "react";
import { IPayout } from "../../types";
import {
  TD,
  TDNoData,
  TDText,
  TDValueText,
  THText,
  THValue,
  TableContent,
  TableContentTR,
  TableWrapper,
} from "./styles";
import Badge from "../Badge";
import { getShortenDateString } from "../../utils/helpers";

type Props = {
  data: IPayout[];
};

const Table = ({ data }: Props) => {
  return (
    <TableWrapper>
      <TableContent>
        <thead>
          <tr>
            <THText>Username</THText>
            <THText>Date & Time</THText>
            <THText>Status</THText>
            <THValue>Value</THValue>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <TableContentTR key={index}>
              <TDText>{d.username}</TDText>
              <TDText>{getShortenDateString(d.dateAndTime)}</TDText>
              <TD>
                <Badge
                  status={d.status === "Completed" ? "success" : "disabled"}
                >
                  {d.status === "Completed" ? "Paid" : d.status}
                </Badge>
              </TD>
              <TDValueText>{d.value}</TDValueText>
            </TableContentTR>
          ))}
          {data.length === 0 && <TDNoData colSpan={4}>No Data</TDNoData>}
        </tbody>
      </TableContent>
    </TableWrapper>
  );
};

export default Table;
