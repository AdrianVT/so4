export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-20 h-20 rounded-full mr-4" alt={name} />
      <div className="text-2xl font-bold">{name}</div>
    </div>
  )
}
