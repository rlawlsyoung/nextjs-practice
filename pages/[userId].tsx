const UserDetail = (props: any) => {
  console.log(props.userData);

  return (
    <>
      <h1>
        {props.userData.name} ({props.userData.username})
      </h1>
      <ul>
        <li>phone : {props.userData.phone}</li>
        <li>email : {props.userData.email}</li>
      </ul>
    </>
  );
};

export async function getServerSideProps(context: any) {
  console.log(typeof context);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.userId}`
  );
  const data = await res.json();
  return {
    props: {
      userData: data,
    },
  };
}

export default UserDetail;
