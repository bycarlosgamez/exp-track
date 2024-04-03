function ProfileCard({ title, handle, img }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{handle}</p>
      <img src={img} />
    </>
  );
}

export default ProfileCard;
