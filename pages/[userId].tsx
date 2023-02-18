const UserDetail = (props: any) => {
  return (
    <>
      <h1> 하이</h1>
    </>
  );
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
//   const data = await res.json();
//   return {
//     fallback: false,
//     paths: meetups.map((meetup) => ({
//       params: { meetupId: meetup._id.toString() },
//     })),
//   };
// };

export async function getServerSideProps(context: any) {
  console.log(typeof context);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await res.json();
  return {
    props: {
      userList: data,
    },
  };
}

export default UserDetail;
