import type { NextPage } from 'next';
import { Box, Center, Divider, Flex, Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../components/Navbar';
import DashHeader from '../components/DashHeader';
import TicketsByPriority from '../components/TicketsByPriority';
import TicketsByType from '../components/TicketsByType';
import TicketsByProgress from '../components/TicketsByProgress';
import TicketsByUser from '../components/TicketsByUser';
import MyProjectsTable from '../components/MyProjectsTable';

const Dashboard: NextPage = () => {
  return (
    <Flex h='100vh' flexDir='row' overflow='hidden' maxW='2000px'>
      {/* Dashboard/Navbar */}
      <Flex
        w='15%'
        flexDir='column'
        alignItems='center'
        boxShadow='2px 0 5px -2px '
        display={{ base: 'none', md: 'flex' }}
      >
        <NavBar />
      </Flex>

      {/* Components */}
      <Flex w='full' flexDirection='column' overflowY='auto'>
        {/* DashHeader Component */}
        <DashHeader />
        {/* Contents */} {/* <DaGrid/> */}
        <Flex
          flexDirection='column'
          justifyContent='space-evenly'
          alignItems='center'
          h='full'
        >
          <MyProjectsTable />
          <Flex height='30%'>
            <Box>Widget 1</Box>
            <Box>Widget 2</Box>
            <Box>Widget 3</Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
