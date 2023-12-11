import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import {
  SearchBarContainer,
  SpinnerWrapper,
  TableContainer,
  TableFooter,
  TableHeadingContainer,
  TableTitleContent,
  TableTitleMarker,
  TableTitleWrapper,
} from "./styles";
import Table from "../../components/Table";
import SearchBar from "../../components/SearchBar";
import { PulseLoader } from "react-spinners";
import { OriginTheme } from "../../styles/themes";
import Pagination from "../../components/Pagination";
import { IPayout } from "../../types";
import Select from "react-select";
import { fetchPayoutsAPI, fetchSearchedPayoutsAPI } from "../../utils/apis";
import { PageSizes } from "./data";

const PayoutsPage = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PageSizes[0].value);

  const [payouts, setPayouts] = useState<IPayout[]>([]);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery === "") {
      loadPayoutsWithoutQuery(page, pageSize);
    }
  }, [page]);

  useEffect(() => {
    if (searchQuery === "") {
      if (page === 1) {
        loadPayoutsWithoutQuery(page, pageSize);
      } else {
        setPage(1);
      }
    } else {
      (async () => {
        setLoading(true);
        const data = await fetchSearchedPayoutsAPI(searchQuery);
        setPayouts(data);
        setTotalPageCount(Math.ceil(data.length / pageSize));
        setLoading(false);
      })();
      setPage(1);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === "") {
      if (page === 1) {
        loadPayoutsWithoutQuery(page, pageSize);
      } else {
        setPage(1);
      }
    } else {
      setPage(1);
      setTotalPageCount(Math.ceil(payouts.length / pageSize));
    }
  }, [pageSize]);

  const loadPayoutsWithoutQuery = async (p: number, l: number) => {
    setLoading(true);
    const result = await fetchPayoutsAPI(p, l);
    setPayouts(result.data);
    setTotalPageCount(Math.ceil(result.metadata.totalCount / l));
    setLoading(false);
  };

  return (
    <Page title="Payouts">
      <TableHeadingContainer>
        <TableTitleWrapper>
          <TableTitleMarker />
          <TableTitleContent>Payout History</TableTitleContent>
        </TableTitleWrapper>
        <SearchBarContainer>
          <SearchBar
            placeholder="Search"
            onSubmitSearch={(value) => setSearchQuery(value)}
          />
        </SearchBarContainer>
      </TableHeadingContainer>
      <TableContainer>
        <Table
          data={
            searchQuery === ""
              ? payouts
              : payouts.slice(pageSize * (page - 1), pageSize * page)
          }
        />
        {loading && (
          <SpinnerWrapper>
            <PulseLoader color={OriginTheme.colors.primary} margin={5} />
          </SpinnerWrapper>
        )}
      </TableContainer>
      <TableFooter>
        <Select
          options={PageSizes}
          onChange={(v) => v && setPageSize(v.value)}
          defaultValue={PageSizes[0]}
        />
        <Pagination
          totalCount={totalPageCount}
          page={page}
          onChange={(p) => setPage(p)}
        />
      </TableFooter>
    </Page>
  );
};

export default PayoutsPage;
