type Props = {
  name: string
  description: string
  value: string
  image: string
}

function Components({ name, description, value, image }: Props) {
  return (
    <article className="profile-card">
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p className="description">{description}</p>
      <p className="value">{value}</p>
    </article>
  )
}

export default Components
