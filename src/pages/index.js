const Home = () => {
  return <div />;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: "/home-main",
    },
  };
};

export default Home;
