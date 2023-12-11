import React, { useEffect, useState } from "react";
import { ReactComponent as ThreeDotsIcon } from "../../assets/icons/icon-three-dots.svg";
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/icon-arrow-right.svg";
import { ArrowButton, PageButton, PaginationWrapper } from "./styles";

type Props = {
  page?: number;
  totalCount: number;
  onChange?: (page: number) => void;
};

const Pagination = (props: Props) => {
  const [pages, setPages] = useState<number[]>([]);
  const [page, setPage] = useState(props.page ? props.page : 1);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(page);
    }
  }, [page]);

  useEffect(() => {
    if (props.page) {
      setPage(props.page);
    }
  }, [props.page]);

  useEffect(() => {
    const tmp: number[] = [];
    tmp.push(1);

    if (page - 2 > 1) {
      tmp.push(-1);
    }

    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(page + 1, props.totalCount - 1);
      i++
    ) {
      tmp.push(i);
    }

    if (page + 2 < props.totalCount) {
      tmp.push(-1);
    }
    if (!tmp.includes(props.totalCount) && props.totalCount) {
      tmp.push(props.totalCount);
    }

    setPages(tmp);
  }, [page, props.totalCount]);

  const onClickPrev = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  const onClickNext = () => {
    setPage((prev) => Math.min(prev + 1, props.totalCount));
  };

  return (
    <PaginationWrapper>
      <ArrowButton onClick={onClickPrev}>
        <LeftArrowIcon width={12} height={16} />
      </ArrowButton>
      {pages.map((p, i) =>
        p === -1 ? (
          <ThreeDotsIcon key={i} width={12} height={24} />
        ) : (
          <PageButton
            selected={p === page}
            key={i}
            onClick={() => (p !== -1 ? setPage(p) : 1)}
          >
            {p}
          </PageButton>
        )
      )}
      <ArrowButton onClick={onClickNext}>
        <RightArrowIcon width={12} height={16} />
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
