import React, { FC, memo } from "react";
import classNames from "classnames";

import { ICoreUIBaseProps } from "../types";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface IPagination extends ICoreUIBaseProps {
  type?: "minimal" | "compact";
  totalItems: number;
  currentPage?: number;
  itemPerPage?: number;
  pageVisible?: number;
  onChange?: (page: number) => void;
}

const Pagination: FC<IPagination> = memo(
  ({
    className,
    totalItems,
    currentPage = 1,
    itemPerPage = 5,
    pageVisible = 5,
    type,
    visible = true,
    onChange,
  }) => {
    let pager: any = null;

    const setPage = (page: number) => {
      if (page === currentPage) return;
      if (page < 1 || page > pager.totalPages) return;
      onChange?.(page);
    };

    const getPage = () => {
      const totalPages = Math.ceil(totalItems / itemPerPage);
      const middle = Math.floor(pageVisible / 2);
      const preMiddle = middle - 1;
      const nextMiddle = middle + 1;
      const isOdd = pageVisible % 2 === 0;

      let startPage: number, endPage: number;

      if (totalPages <= pageVisible) {
        startPage = 1;
        endPage = totalPages;
      } else {
        if (currentPage <= nextMiddle) {
          startPage = 1;
          endPage = pageVisible;
        } else if (currentPage + preMiddle >= totalPages) {
          startPage = totalPages - (pageVisible - 1);
          endPage = totalPages;
        } else {
          startPage = currentPage - middle;
          endPage = currentPage + (isOdd ? preMiddle : middle);
        }
      }

      const startIndex = (currentPage - 1) * itemPerPage;
      const endIndex = Math.min(startIndex + itemPerPage - 1, totalItems - 1);
      const pages = Array.apply(null, {
        length: endPage + 1 - startPage,
      } as unknown[]).map((_, i) => startPage + i);

      return {
        totalItems: totalItems,
        currentPage: currentPage,
        itemPerPage: itemPerPage,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
      };
    };

    const renderPageNumber = () => {
      if (type === "minimal") return null;

      return pager.pages.map((page: number, index: number) => (
        <li
          key={index}
          className={classNames(
            "pagination__item",
            "pagination__number",
            pager.currentPage === page ? "pagination__item--active" : ""
          )}
        >
          <button
            onClick={(e) => {
              setPage(page);
              e.preventDefault();
            }}
          >
            {page}
          </button>
        </li>
      ));
    };

    const renderFirstButton = () => {
      if (type === "minimal" || type === "compact") return null;

      return (
        <li
          className={classNames(
            "pagination__item",
            "pagination__icon",
            pager.currentPage === 1 ? "pagination__item--disabled" : ""
          )}
        >
          <button onClick={() => setPage(1)} disabled={pager.currentPage === 1}>
            <ChevronDoubleLeftIcon />
          </button>
        </li>
      );
    };

    const renderLastButton = () => {
      if (type === "minimal" || type === "compact") return null;

      return (
        <li
          className={classNames(
            "pagination__item",
            "pagination__icon",
            pager.currentPage === pager.totalPages
              ? "pagination__item--disabled"
              : ""
          )}
        >
          <button
            onClick={() => setPage(pager.totalPages)}
            disabled={pager.currentPage === pager.totalPages}
          >
            <ChevronDoubleRightIcon />
          </button>
        </li>
      );
    };

    const renderPreviousButton = () => {
      return (
        <li
          className={classNames(
            "pagination__item",
            "pagination__icon",
            "pagination__prev",
            pager.currentPage === 1 ? "pagination__item--disabled" : ""
          )}
        >
          <button
            onClick={() => setPage(pager.currentPage - 1)}
            disabled={pager.currentPage === 1}
          >
            <ChevronLeftIcon />
          </button>
        </li>
      );
    };

    const renderNextButton = () => {
      return (
        <li
          className={classNames(
            "pagination__item",
            "pagination__icon",
            "pagination__next",
            pager.currentPage === pager.totalPages
              ? "pagination__item--disabled"
              : ""
          )}
        >
          <button
            onClick={() => setPage(pager.currentPage + 1)}
            disabled={pager.currentPage === pager.totalPages}
          >
            <ChevronRightIcon />
          </button>
        </li>
      );
    };

    pager = getPage();

    if (!visible) return null;
    if (!totalItems) return null;
    if (!currentPage) return null;
    if (pager && (!pager.pages || pager.pages.length <= 1)) return null;

    return (
      <div className={classNames("pagination", className)}>
        <ul className="pagination__list w-full">
          {renderFirstButton()}
          {renderPreviousButton()}
          {renderPageNumber()}
          {renderNextButton()}
          {renderLastButton()}
        </ul>
      </div>
    );
  }
);

Pagination.displayName = "Pagination";

export default Pagination;
