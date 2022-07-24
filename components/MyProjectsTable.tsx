import { useEffect, useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  TableContainer,
  TableCaption,
  chakra,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { Project } from '../types';
import { nanoid } from 'nanoid';

const RightArrow = chakra(AiOutlineArrowRight);
const LeftArrow = chakra(AiOutlineArrowLeft);
const RightChevron = chakra(BsChevronDoubleRight);
const LeftChevron = chakra(BsChevronDoubleLeft);

const MyProjectsTable: NextPage = () => {
  const [data, setData] = useState<Project[] | []>([]);
  const columns = useMemo(
    () => [
      {
        Header: 'My Projects',
        columns: [
          {
            Header: 'Project',
            accessor: 'project',
          },
          {
            Header: 'Description',
            accessor: 'description',
          },
          {
            Header: 'Contributors',
            accessor: 'contributors',
          },
        ],
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  useEffect(() => {
    setData([
      {
        project: 'Bug Tracker',
        description:
          'Project management tool to track project issues, bugs, etc',
        contributors: ['Shariq Ali'],
      },
      {
        project: 'CrimsonCodex Youtube',
        description:
          'Youtube channel where I play games like Minecraft & Terraria',
        contributors: ['Shariq Ali, TheRandomBros'],
      },
      {
        project: 'Demo Bug Tracker',
        description: 'Film the video to preview bug tracker',
        contributors: ['Shariq Ali'],
      },
    ]);
  }, []);

  return (
    <TableContainer height='60%'>
      <Table {...getTableBodyProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={nanoid()}>
              {headerGroup.headers
                .filter((header) => header.Header !== 'My Projects')
                .map((column) => (
                  <Th {...column.getHeaderProps()} key={nanoid()}>
                    {column.render('Header')}
                  </Th>
                ))}
            </Tr>
          ))}
        </Thead>
      </Table>
    </TableContainer>
  );
};

export default MyProjectsTable;
