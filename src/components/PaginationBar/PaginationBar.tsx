import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProps } from './PaginationBar.types';
import { getPageNumbers, getPaginationBarSettings, makeBlur } from '@/utils';
import { AriaLabels, SearchParamsKeys } from '@/constants';
import { Button, Item, List, TemplateItem } from './PaginationBar.styled';
import { BtnClickEvt } from '@/types/types';

const PaginationBar: FC<IProps> = ({ itemsQuantity, quantity, step = 1 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuantity = Math.ceil(itemsQuantity / quantity);
  const pageNumbers = getPageNumbers(pageQuantity);
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const {
    firstPage,
    lastPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    isShowFirstPageBtn,
    isShowPrevTemplateBtn,
    isValidPage,
  } = getPaginationBarSettings({
    pageNumbers,
    currentPage,
    step,
  });

  const onPageBtnClick = ({
    e,
    page,
  }: {
    e: BtnClickEvt;
    page: number;
  }): void => {
    makeBlur(e.currentTarget);
    searchParams.set(SearchParamsKeys.page, String(page));
    setSearchParams(searchParams);
  };

  return (
    <List>
      <Item>
        <Button
          disabled={isBackNavBtnDisable}
          onClick={(e) => {
            onPageBtnClick({ e, page: currentPage - 1 });
          }}
        >
          {'<< Previous'}
        </Button>
      </Item>
      {isShowFirstPageBtn && (
        <Item>
          <Button
            onClick={(e) => {
              onPageBtnClick({ e, page: firstPage });
            }}
          >
            {firstPage}
          </Button>
        </Item>
      )}
      {isShowPrevTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isValidPage &&
        pageNumbers.map((number) => (
          <Item
            key={number}
            page={number}
            currentPage={currentPage}
            step={step}
          >
            <Button
              className={number === currentPage ? 'active' : ''}
              aria-label={`${AriaLabels.pageBtn} ${number}`}
              onClick={(e) => {
                onPageBtnClick({ e, page: number });
              }}
            >
              {number}
            </Button>
          </Item>
        ))}
      {isShowNextTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isShowLastPageBtn && (
        <Item>
          <Button
            onClick={(e) => {
              onPageBtnClick({ e, page: lastPage });
            }}
          >
            {lastPage}
          </Button>
        </Item>
      )}
      <Item>
        <Button
          disabled={isNextNavBtnDisable}
          onClick={(e) => {
            onPageBtnClick({ e, page: currentPage + 1 });
          }}
        >
          {'Next >>'}
        </Button>
      </Item>
    </List>
  );
};

export default PaginationBar;
